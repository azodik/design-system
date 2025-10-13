import React, { useState } from "react";
import { Textarea, Card } from "@azodik/ui";

export const TextareaPreview = () => {
  const [message, setMessage] = useState("");
  const [comment, setComment] = useState("");

  return (
    <div className="flex-vertical-lg">
      <Card className="p-6">
        <div className="flex-vertical">
          <Textarea
            label="Message"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
          />
          <Textarea
            label="Comment"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
          />
        </div>
      </Card>
    </div>
  );
};

export const TextareaCode = `import React, { useState } from "react";
import { Textarea, Card } from "@azodik/ui";

export const TextareaExample = () => {
  const [message, setMessage] = useState("");
  const [comment, setComment] = useState("");

  return (
    <div className="flex-vertical-lg">
      <Card className="p-6">
        <div className="flex-vertical">
          <Textarea
            label="Message"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
          />
          <Textarea
            label="Comment"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
          />
        </div>
      </Card>
    </div>
  );
};`;
