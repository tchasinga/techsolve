"use client"
import React from 'react'
import { MdNavigateNext } from "react-icons/md";
import { motion } from "framer-motion"
import { containerVariant } from '../Animation/animation.js';

export default function CorporateSoftware() {
    return (
        <motion.div className="mx-auto max-w-5xl w-full flex flex-col justify-center min-h-screen"
            initial="offscreen"
            whileInView={"onscreen"}
            variants={containerVariant()}
        >
            <h1 className="uppercase text-white text-9xl font-bold">we</h1>
            <h1 className="uppercase text-white text-8xl font-bold">implement</h1>
            <h2 className="text-white uppercase text-5xl font-bold first-letter:uppercase">corporate sowftware</h2>

            <div className="flex flex-col justify-center text-sm text-slate-100 first-letter:uppercase p-3 mb-5">
                <h1>We implement the corporate performance</h1>
                <h1>Software at <span className="font-bold"> Techsol Software kenya </span> for consolidation planning</h1>
                <h1>And reporting porspuses</h1>

                <div className="bg-green-800 p-3 mt-2 rounded-full gap-4 w-[20%] flex items-center justify-center cursor-pointer">
                    <h1>Get Stared Now</h1>
                    <div className="bg-green-400 rounded-full">
                        <MdNavigateNext className="text-3xl" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

