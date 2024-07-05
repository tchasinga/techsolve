"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Oneimg from '../Image/pexels-pixabay-269077.jpg';
import myDataobject from '../Data/Dataone.js';

export default function Ourservice() {
    const [clientData, setClientData] = useState([]);

    useEffect(() => {
        setClientData(myDataobject.slice(0, 6));
    }, []);

    const [someClientData, someSetClientData] = useState([]);
    useEffect(() =>{
        someSetClientData(myDataobject.slice(6, 10));
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.3,
            }
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5 }
        },
    };

    return (
        <div className="min-h-screen w-full max-w-full bg-fixed object-fill"
            style={{
                background: `linear-gradient(rgba(4, 5, 5, 0.716), rgba(4, 5, 5, 0.716)), url(${Oneimg.src}) center / cover no-repeat fixed`,
            }}
        >
            <div className="backdrop-blur-sm min-h-screen flex-col flex justify-center items-center">
                <h1 className="text-4xl text-slate-100 font-bold py-5 uppercase ">Our Provided Services at tsk</h1>
                <div className="max-w-5xl mx-auto mb-2">
                    <motion.div 
                        className="gridGeneral"
                        initial="hidden"
                        whileInView="visible"
                        variants={containerVariants}
                    >
                        {clientData.map((item) => (
                            <motion.div 
                                key={item.id} 
                                className="bg-white bg-opacity-50 p-4 py-4 rounded-lg"
                                variants={itemVariants}
                            >
                                <div className="flex-col flex justify-center items-center">
                                    <div className="bg-blue-400 p-5 rounded-full text-2xl my-3">
                                        {item.MyIcons}
                                    </div>
                                    <div className="flex items-center justify-center mb-2">
                                        <h1 className="text-lg font-bold">{item.myTitle}</h1>
                                    </div>
                                </div>
                                <div className="line-clamp-4 text-slate-900">
                                    <p>{item.Description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Adding carousel code */}
              
                <div className="max-w-5xl mx-auto mb-5">
                    <motion.div 
                        className="gridGeneral"
                        initial="hidden"
                        whileInView="visible"
                        variants={containerVariants}
                    >
                        {someClientData.map((item) => (
                            <motion.div 
                                key={item.id} 
                                className="bg-white bg-opacity-50 p-4 py-4 rounded-lg"
                                variants={itemVariants}
                            >
                                <div className="flex-col flex justify-center items-center">
                                    <div className="bg-blue-400 p-5 rounded-full text-2xl my-3">
                                        {item.MyIcons}
                                    </div>
                                    <div className="flex items-center justify-center mb-2">
                                        <h1 className="text-lg font-bold">{item.myTitle}</h1>
                                    </div>
                                </div>
                                <div className="line-clamp-4 text-slate-900">
                                    <p>{item.Description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </div>
    )
}
