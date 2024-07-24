"use client"

import React, { useEffect, useState } from "react";
import { marked } from "marked";

const MarkdownRenderer = ({ filePath }: { filePath: string }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(filePath)
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, [filePath]);

  return (
    <div className="prose max-w-none">
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </div>
  );
};

export default MarkdownRenderer;
