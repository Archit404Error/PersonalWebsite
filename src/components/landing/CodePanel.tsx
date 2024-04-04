"use client";

import { code, CodeLine, CodeStruct } from "@/code";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
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
        const codeStyle = `font-mono text-${codeStructs[index].color} whitespace-pre align-middle
          text-sm md:text-lg lg:text-2xl macpro:text-3xl 2xl:text-[34px] 2xl:leading-[38px] 3xl:text-5xl ${cursorStyle}`;

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
    <Card
      isBlurred
      className="bg-black rounded-xl w-full min-h-[425px] 3xl:min-[60%] m-auto hidden md:block"
      shadow="md"
    >
      <CardHeader className="bg-default-100 p-1.5 justify-center">
        <div className="bg-red-600 rounded-full h-3 w-3 absolute left-3" />
        <div className="bg-yellow-600 rounded-full h-3 w-3 absolute left-9" />
        <div className="bg-green-600 rounded-full h-3 w-3 absolute left-[60px]" />
        <p className="font-semibold">Introduction to Archit</p>
      </CardHeader>
      <Divider />
      <CardBody>{<CodeRenderer codeBlocks={code} />}</CardBody>
    </Card>
  );
};
