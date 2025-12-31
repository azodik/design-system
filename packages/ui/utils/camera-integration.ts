/**
 * Camera Integration utilities - Camera/file access utilities
 */

import { useState, useEffect } from "react";

export interface CameraOptions {
  /**
   * Video constraints
   */
  video?: boolean | MediaTrackConstraints;
  /**
   * Audio constraints
   */
  audio?: boolean | MediaTrackConstraints;
  /**
   * Facing mode
   */
  facingMode?: "user" | "environment";
  /**
   * Width
   */
  width?: number;
  /**
   * Height
   */
  height?: number;
}

export interface FileInputOptions {
  /**
   * Accept file types
   */
  accept?: string;
  /**
   * Multiple files
   */
  multiple?: boolean;
  /**
   * Capture mode (camera, microphone, etc.)
   */
  capture?: "user" | "environment" | "camera" | "microphone";
}

/**
 * Check if camera is supported
 */
export function isCameraSupported(): boolean {
  return (
    typeof navigator !== "undefined" &&
    "mediaDevices" in navigator &&
    "getUserMedia" in navigator.mediaDevices
  );
}

/**
 * Request camera access
 */
export async function requestCameraAccess(options: CameraOptions = {}): Promise<MediaStream> {
  if (!isCameraSupported()) {
    throw new Error("Camera is not supported");
  }

  const constraints: MediaStreamConstraints = {
    video:
      options.video !== undefined
        ? options.video
        : {
            facingMode: options.facingMode || "environment",
            width: options.width,
            height: options.height,
          },
    audio: options.audio !== undefined ? options.audio : false,
  };

  return navigator.mediaDevices.getUserMedia(constraints);
}

/**
 * Stop camera stream
 */
export function stopCameraStream(stream: MediaStream): void {
  stream.getTracks().forEach((track) => track.stop());
}

/**
 * Capture photo from stream
 */
export function capturePhotoFromStream(
  stream: MediaStream,
  videoElement: HTMLVideoElement,
): Promise<string> {
  return new Promise((resolve, reject) => {
    videoElement.srcObject = stream;
    videoElement.onloadedmetadata = () => {
      videoElement
        .play()
        .then(() => {
          const canvas = document.createElement("canvas");
          canvas.width = videoElement.videoWidth;
          canvas.height = videoElement.videoHeight;
          const ctx = canvas.getContext("2d");
          if (!ctx) {
            reject(new Error("Could not get canvas context"));
            return;
          }
          ctx.drawImage(videoElement, 0, 0);
          const dataUrl = canvas.toDataURL("image/jpeg");
          resolve(dataUrl);
        })
        .catch(reject);
    };
    videoElement.onerror = reject;
  });
}

/**
 * Create file input for camera
 */
export function createCameraFileInput(
  options: FileInputOptions = {},
  onFileSelect: (file: File) => void,
): HTMLInputElement {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = options.accept || "image/*";
  input.multiple = options.multiple || false;
  if (options.capture) {
    input.capture = options.capture;
  }

  input.onchange = (e) => {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return input;
}

/**
 * Trigger file input click
 */
export function triggerFileInput(input: HTMLInputElement): void {
  input.click();
}

/**
 * Read file as data URL
 */
export function readFileAsDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/**
 * React hook for camera access
 */
export function useCamera() {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const start = async (options?: CameraOptions) => {
    setIsLoading(true);
    setError(null);
    try {
      const mediaStream = await requestCameraAccess(options);
      setStream(mediaStream);
      return mediaStream;
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Failed to access camera");
      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const stop = () => {
    if (stream) {
      stopCameraStream(stream);
      setStream(null);
    }
  };

  useEffect(() => {
    return () => {
      if (stream) {
        stopCameraStream(stream);
      }
    };
  }, [stream]);

  return {
    stream,
    error,
    isLoading,
    start,
    stop,
    isSupported: isCameraSupported(),
  };
}
