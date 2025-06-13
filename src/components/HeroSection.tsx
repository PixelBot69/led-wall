"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          LED Walls That Dazzle.
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 text-center">
          Transform your space with ultra-bright, high-definition LED displays—perfect for events, stages, and experiences.
        </div>
        <button className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full w-fit text-white dark:text-black px-4 py-2">
          Explore LED Walls
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
