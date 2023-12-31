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
    const intervalId = setInterval(renderNextChar, 50);
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
    <p
      className={`font-mono text-${color} whitespace-pre text-sm md:text-lg lg:text-2xl macpro:text-3xl ${
        renderedIdx < text.length ? "after:content-['|']" : ""
      }`}
    >
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
    <div className="border-2 border-gray-700 bg-black p-4 rounded-xl w-full min-h-[60%] m-auto hidden md:block">
      {<CodeRenderer codeBlocks={code} />}
    </div>
  );
};
