import React from "react";
import { Vortex } from "./ui/vortex";

export function VortexDemoSecond() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Why Wait? Light Up Your Brand Today
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Elevate your presence with our certified Indoor & Outdoor LED screens—built for brilliance, trusted worldwide. Quality, performance, and compliance—guaranteed.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Shop Now
          </button>
          <button className="px-4 py-2 text-white hover:underline transition">See it in Action</button>
        </div>
      </Vortex>
    </div>
  );
}
