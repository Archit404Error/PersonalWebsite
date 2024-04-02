"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ReactNode, useRef } from "react";

const useParallax = (yPosition: MotionValue<number>, maxMovement: number) =>
  useTransform(yPosition, [0, 1], [maxMovement, -maxMovement]);

interface ParallaxProps {
  parallaxAmount: number;
  children: ReactNode;
}

export const Parallax = ({ parallaxAmount, children }: ParallaxProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const parallaxY = useParallax(scrollYProgress, parallaxAmount);

  return (
    <motion.div ref={ref} style={{ y: parallaxY }}>
      {children}
    </motion.div>
  );
};

export interface ParallaxBubbleProps {
  imagePath: string;
  parallaxAmount: number;
  radius: number;
  leftOffset: number;
  topOffset: number;
}

export const ParallaxBubble = ({
  imagePath,
  parallaxAmount,
  radius,
  leftOffset,
  topOffset,
}: ParallaxBubbleProps) => {
  return (
    <Parallax parallaxAmount={parallaxAmount}>
      <Image
        src={imagePath}
        alt=""
        width={radius}
        height={radius}
        className={`absolute rounded-full left-[${leftOffset}px] top-[${topOffset}px]`}
      />
    </Parallax>
  );
};
