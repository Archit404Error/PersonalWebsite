"use client";

import { code, CodeLine, CodeStruct } from "@/code";
import { useEffect, useState } from "react";

interface CodeBlockProps {
  codeStructs: CodeStruct[];
  setDoneRendering: any;
}

const getRenderedTexts = (renderedIdx: number, codeStructs: CodeStruct[]) => {
  let renderedTexts = [];
  let i = 0;
  let remainingChars = renderedIdx;
  while (remainingChars > 0) {
    const structText = codeStructs[i].text;
    renderedTexts.push(
      structText.substring(0, Math.min(structText.length, remainingChars))
    );

    i++;
    remainingChars -= structText.length;
  }

  return renderedTexts;
};

const CodeBlock = ({ codeStructs, setDoneRendering }: CodeBlockProps) => {
  const [renderedIdx, setRenderedIdx] = useState(0);
  const [renderIntervalId, setRenderIntervalId] = useState<NodeJS.Timeout>();
  const totalTextLength = codeStructs
    .map((code) => code.text.length)
    .reduce((acc, cur) => acc + cur);

  const renderNextChar = () => {
    if (renderedIdx < totalTextLength) {
      setRenderedIdx((renderedIdx) => renderedIdx + 1);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(renderNextChar, 50);
    setRenderIntervalId(intervalId);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (renderedIdx >= totalTextLength) {
      clearInterval(renderIntervalId);
      setDoneRendering(true);
    }
  }, [renderedIdx]);

  const renderedTexts = getRenderedTexts(renderedIdx, codeStructs);
  const isFinalChar = renderedIdx >= totalTextLength;

  return (
    <p>
      {renderedTexts.map((renderedText, index) => {
        const showCursor = index == renderedTexts.length - 1 && !isFinalChar;
        const cursorStyle = showCursor ? "after:content-['|']" : "";
        const codeStyle = `font-mono text-${codeStructs[index].color} whitespace-pre text-sm md:text-lg lg:text-2xl macpro:text-3xl ${cursorStyle}`;

        return (
          <span key={renderedText} className={codeStyle}>
            {renderedText}
          </span>
        );
      })}
    </p>
  );
};

interface CodeRendererProps {
  codeBlocks: CodeLine[];
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
