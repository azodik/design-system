import React, { useCallback, useState, useRef } from "react";
import Button from "./Button";

export interface FileUploadProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "onChange"
> {
  /**
   * Callback when files are selected
   */
  onFilesSelected?: (files: File[]) => void;
  /**
   * Accepted file types (e.g., "image/*", ".pdf,.doc")
   */
  accept?: string;
  /**
   * Allow multiple file selection
   */
  multiple?: boolean;
  /**
   * Maximum file size in bytes
   */
  maxSize?: number;
  /**
   * Maximum number of files
   */
  maxFiles?: number;
  /**
   * Enable drag and drop
   */
  dragAndDrop?: boolean;
  /**
   * Custom upload button text
   */
  buttonText?: string;
  /**
   * Show file list
   */
  showFileList?: boolean;
  /**
   * Custom validation function
   */
  validateFile?: (file: File) => string | null;
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Loading state
   */
  loading?: boolean;
}

export interface FileWithPreview extends File {
  preview?: string;
  error?: string;
  id: string;
}

export function FileUpload({
  onFilesSelected,
  accept,
  multiple = false,
  maxSize,
  maxFiles,
  dragAndDrop = true,
  buttonText = "Choose Files",
  showFileList = true,
  validateFile,
  disabled = false,
  loading = false,
  className = "",
  ...props
}: FileUploadProps) {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const fileIdCounter = useRef(0);

  const generateFileId = useCallback(() => {
    return `file-${Date.now()}-${fileIdCounter.current++}`;
  }, []);

  const validateFiles = useCallback(
    (fileList: File[]): { valid: FileWithPreview[]; errors: Record<string, string> } => {
      const validFiles: FileWithPreview[] = [];
      const fileErrors: Record<string, string> = {};

      fileList.forEach((file) => {
        const fileId = generateFileId();
        const fileWithId: FileWithPreview = Object.assign(file, { id: fileId });

        // Check max size
        if (maxSize && file.size > maxSize) {
          const maxSizeMB = (maxSize / (1024 * 1024)).toFixed(2);
          fileErrors[fileId] = `File "${file.name}" exceeds maximum size of ${maxSizeMB}MB`;
          return;
        }

        // Check max files
        if (maxFiles && files.length + validFiles.length >= maxFiles) {
          fileErrors[fileId] = `Maximum ${maxFiles} file(s) allowed`;
          return;
        }

        // Custom validation
        if (validateFile) {
          const error = validateFile(file);
          if (error) {
            fileErrors[fileId] = error;
            return;
          }
        }

        // Generate preview for images
        if (file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = (e) => {
            if (e.target?.result) {
              fileWithId.preview = e.target.result as string;
            }
          };
          reader.readAsDataURL(file);
        }

        validFiles.push(fileWithId);
      });

      return { valid: validFiles, errors: fileErrors };
    },
    [maxSize, maxFiles, files.length, validateFile, generateFileId],
  );

  const handleFiles = useCallback(
    (fileList: FileList | null) => {
      if (!fileList || fileList.length === 0) return;

      const fileArray = Array.from(fileList);
      const { valid, errors: fileErrors } = validateFiles(fileArray);

      if (valid.length > 0) {
        const newFiles = multiple ? [...files, ...valid] : valid;
        setFiles(newFiles);
        setErrors(fileErrors);
        onFilesSelected?.(newFiles);
      } else {
        setErrors(fileErrors);
      }
    },
    [files, multiple, validateFiles, onFilesSelected],
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleFiles(e.target.files);
      // Reset input to allow selecting the same file again
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    },
    [handleFiles],
  );

  const handleDragEnter = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (!disabled && dragAndDrop) {
        setIsDragging(true);
      }
    },
    [disabled, dragAndDrop],
  );

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      if (disabled || !dragAndDrop) return;

      handleFiles(e.dataTransfer.files);
    },
    [disabled, dragAndDrop, handleFiles],
  );

  const handleRemoveFile = useCallback(
    (fileId: string) => {
      const newFiles = files.filter((f) => f.id !== fileId);
      setFiles(newFiles);
      const newErrors = { ...errors };
      delete newErrors[fileId];
      setErrors(newErrors);
      onFilesSelected?.(newFiles);
    },
    [files, errors, onFilesSelected],
  );

  const formatFileSize = useCallback((bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
  }, []);

  const containerClasses = [
    "file-upload",
    isDragging && "file-upload-dragging",
    disabled && "file-upload-disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClasses}>
      <div
        className="file-upload-dropzone"
        role="button"
        tabIndex={0}
        aria-label="File upload dropzone"
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            // Trigger file input click
            const input = e.currentTarget.querySelector('input[type="file"]') as HTMLInputElement;
            input?.click();
          }
        }}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleInputChange}
          disabled={disabled || loading}
          className="file-upload-input"
          aria-label="File upload"
          {...props}
        />
        <div className="file-upload-content">
          <div className="file-upload-icon">📁</div>
          <p className="file-upload-text">
            {isDragging ? (
              "Drop files here"
            ) : dragAndDrop ? (
              <>
                Drag and drop files here, or{" "}
                <button
                  type="button"
                  className="file-upload-browse"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={disabled || loading}
                >
                  browse
                </button>
              </>
            ) : (
              <Button
                onClick={() => fileInputRef.current?.click()}
                disabled={disabled || loading}
                loading={loading}
              >
                {buttonText}
              </Button>
            )}
          </p>
          {accept && <p className="file-upload-hint">Accepted: {accept}</p>}
          {maxSize && (
            <p className="file-upload-hint">Max size: {(maxSize / (1024 * 1024)).toFixed(2)}MB</p>
          )}
        </div>
      </div>

      {showFileList && files.length > 0 && (
        <div className="file-upload-list">
          {files.map((file) => (
            <div key={file.id} className="file-upload-item">
              {file.preview ? (
                <img src={file.preview} alt={file.name} className="file-upload-preview" />
              ) : (
                <div className="file-upload-icon-small">📄</div>
              )}
              <div className="file-upload-info">
                <div className="file-upload-name">{file.name}</div>
                <div className="file-upload-meta">
                  {formatFileSize(file.size)}
                  {errors[file.id] && (
                    <span className="file-upload-error"> • {errors[file.id]}</span>
                  )}
                </div>
              </div>
              <button
                type="button"
                className="file-upload-remove"
                onClick={() => handleRemoveFile(file.id)}
                disabled={disabled}
                aria-label={`Remove ${file.name}`}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FileUpload;
