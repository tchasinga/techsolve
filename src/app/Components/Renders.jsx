"use client"
import React from 'react'
import secondlydata from '../Data/Datasecond'
import Image from "next/image";
import { motion } from 'framer-motion';

export default function Renders() {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.3,
                duration: 2.5,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0,
            transition: {
                staggerChildren: 0.3,
                duration: 2.5,
            }
         }
    };

    return (
        <div className="max-w-5xl mx-auto mt-[5%]">
            <motion.div 
                initial="hidden"
                animate="visible"
                whileInView={containerVariants}
            >
                {secondlydata.map((data) => {
                    return (
                        <motion.div 
                            key={data.id} 
                            className="flex justify-between items-center align-middle reversingflex pb-[5%]"
                            whileInView={itemVariants}
                        >
                            <div className="w-[400px] border-2 border-red-400 m-3 backer rounded-lg relative" >
                                <Image src={data.ImagesSide} className='mb-[-10px] mt-2 ml-3 rounded-lg' />
                                <div className='absolute border-2 border-slate-900 top-[35%] bg-white p-9 rounded-full text-3xl left-[85%] '>
                                    {data.MoreIcons}
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 md:pl-4 myletter">
                                <h1 className="text-2xl font-semibold text-slate-900">{data.ProjectTitle}</h1>
                                <div className="flex items-center justify-start ">
                                    {data.MoreIcons}
                                    <p className="text-slate-500 text-sm font-medium ml-2">Verified</p>
                                </div>
                                <p className="text-slate-900 text-sm font-medium myletter">{data.myDescription}</p>
                            </div>

                        </motion.div>
                    )
                })}
            </motion.div>
        </div>
    )
}
