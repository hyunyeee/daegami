"use client";

import { TextareaHTMLAttributes, useEffect, useRef } from "react";
import { Textarea } from "@/components/ui/textarea";

export function AutoResizingTextarea({
  value,
  ...others
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "inherit";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <Textarea
      value={value}
      ref={textareaRef}
      className="max-h-[200px] min-h-[20px] resize-none border-transparent bg-transparent p-2 shadow-none"
      {...others}
    />
  );
}
