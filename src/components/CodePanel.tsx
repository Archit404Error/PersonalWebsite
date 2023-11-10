"use client";

import { code, CodeBlock } from "@/code";
import { useEffect, useState } from "react";

interface CodeBlockProps {
  text: string;
  color: string;
  setDoneRendering: any;
}

const CodeBlock = ({ text, color, setDoneRendering }: CodeBlockProps) => {
  const [renderedIdx, setRenderedIdx] = useState(0);
  const [renderIntervalId, setRenderIntervalId] = useState<NodeJS.Timeout>();

  const renderNextChar = () => {
    if (renderedIdx < text.length) {
      setRenderedIdx((renderedIdx) => renderedIdx + 1);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(renderNextChar, 40);
    setRenderIntervalId(intervalId);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (renderedIdx >= text.length) {
      clearInterval(renderIntervalId);
      setDoneRendering(true);
    }
  }, [renderedIdx]);

  return (
    <p className={`font-mono text-${color}-500 whitespace-pre text-2xl`}>
      {text.substring(0, renderedIdx)}
    </p>
  );
};

interface CodeRendererProps {
  codeBlocks: CodeBlock[];
}

const CodeRenderer = ({ codeBlocks }: CodeRendererProps) => {
  const [doneRendering, setDoneRendering] = useState(false);
  const [renderIdx, setRenderIdx] = useState(0);

  useEffect(() => {
    if (doneRendering) {
      setRenderIdx(renderIdx + 1);
      setDoneRendering(false);
    }
  }, [doneRendering]);

  return (
    <>
      {codeBlocks.map((codeBlock, i) => {
        if (i <= renderIdx) {
          return (
            <CodeBlock
              key={`codeBlock${i}`}
              {...codeBlock}
              setDoneRendering={setDoneRendering}
            />
          );
        } else {
          return <p key={`codeBlock${i}`}></p>;
        }
      })}
    </>
  );
};

export const CodePanel = () => {
  return (
    <div className="border-2 border-gray-700 p-4 rounded-xl">
      {<CodeRenderer codeBlocks={code} />}
    </div>
  );
};
