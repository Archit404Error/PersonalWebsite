"use client";

import { useEffect, useRef } from "react";

export const MatrixCanvas = () => {
  const canvasRef = useRef<any>();
  const dropArrs: number[][] = [[10, 0]];

  const randInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const randomChar = () => {
    return String.fromCharCode(randInt(50, 120));
  };

  const draw = (
    ctx: CanvasRenderingContext2D,
    canvWidth: number,
    canvHeight: number
  ) => {
    ctx.fillStyle = "rgba(14, 17, 22, 0.4)";
    ctx.fillRect(0, 0, canvWidth, canvHeight);

    if (dropArrs.length < canvWidth / 4 && randInt(1, 2) == 1) {
      const newCol = randInt(0, canvWidth);
      dropArrs.push([newCol, 0]);
    }

    for (const dropArr of dropArrs) {
      ctx.font = "8px san-serif";
      ctx.fillStyle = "#00ff00";
      ctx.fillText(randomChar(), dropArr[0], dropArr[1]);
      dropArr[1] += 10;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas!.getContext("2d");
    const intervalId = setInterval(
      () => draw(context, canvas.width, canvas.height),
      100
    );

    return () => clearInterval(intervalId);
  }, []);

  return (
    <canvas className="absolute z-0 w-full h-screen top-16" ref={canvasRef} />
  );
};
