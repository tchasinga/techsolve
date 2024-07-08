"use client";
import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { motion } from "framer-motion";
import { containerVariant } from "../Animation/animation.js";
import "../general.css";

export default function CorporateSoftware() {
  return (
    <motion.div
      className="mx-auto max-w-5xl w-full flex flex-col justify-center min-h-screen p-4 sm:p-6 lg:p-8"
      initial="offscreen"
      whileInView={"onscreen"}
      variants={containerVariant()}
    >
      <div className="">
        <h1 className="uppercase text-white text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold">we</h1>
        <h1 className="uppercase text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold">implement</h1>
        <h2 className="text-white uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold first-letter:uppercase">
          corporate software
        </h2>
      </div>
      <div className="flex flex-col justify-center text-sm text-slate-100 first-letter:uppercase p-3 mb-5 space-y-2 sm:space-y-3 md:space-y-4">
        <h1>We implement the corporate performance</h1>
        <h1>
          Software at{" "}
          <span className="font-bold">Techsol Software Kenya</span> for
          consolidation planning
        </h1>
        <h1>And reporting purposes</h1>

        <div className="bg-green-800 p-2 sm:p-3 md:p-4 lg:p-3 mt-2 rounded-full gap-4 w-full sm:w-[60%] md:w-[40%] lg:w-[30%] flex items-center justify-center cursor-pointer">
          <h1 className="text-xs sm:text-sm md:text-base lg:text-lg">Get Started Now</h1>
          <div className="bg-green-400 rounded-full">
            <MdNavigateNext className="text-2xl sm:text-3xl" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
