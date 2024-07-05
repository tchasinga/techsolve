"use client"
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Providerservice() {
    const spanChanger = [
        "Website Development",
        "App Android & IOS",
        "Web applications",
        "UI design",
        "Digital Marketing & Branding",
        "Brand Design",
        "Professional Training",
        "POS System - Software & Hardware",
        "SEO Services",
        "Digital Marketing & Branding",
        "Photo editing",
    ];

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % spanChanger.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [spanChanger.length]);

    return (
       <div className="bg-slate-200">
            <div className="h-[100px] uppercase flex justify-center items-center gap-5">
            <div>
                <h1 className="text-4xl font-bold text-slate-900 ">
                    we provide a trusted service in
                </h1>
            </div>

            <div>
            <AnimatePresence mode="wait">
                    <motion.h1
                        className=" text-4xl text-gray-800 font-medium"
                        key={index}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                    >
                        {spanChanger[index]}
                    </motion.h1>
                </AnimatePresence>
            </div>
        </div>
       </div>
    );
}