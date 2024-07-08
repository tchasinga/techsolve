"use client"
import React from 'react';
import Image from 'next/image';
import Oneimg from '../Image/pexels-mart-production-7550581.jpg';
import Twoimg from '../Image/pexels-pixabay-269077.jpg';
import Threeimg from '../Image/pexels-thisisengineering-3861967.jpg';
import { MdNavigateNext } from 'react-icons/md';
import 'animate.css';
import { motion } from "framer-motion";
import { ImageOne, ImageTwo, ImageThree , textVariantReveals} from '../Animation/animation.js';

export default function Description() {
    return (
        <div className="min-h-screen w-full max-w-full bg-fixed object-fill flex flex-col justify-center"
            style={{
                background: `linear-gradient(rgba(238, 238, 238, 0.7), rgba(238, 238, 238, 0.7)), url(${Oneimg.src}) center / cover no-repeat fixed`,
            }}
        >
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 p-4 mypad  ">
                {/* First Div with Images */}
                <div className="h-[400px]  w-[250px] bg-transparent border-2 border-red-500 relative sm:my-[100px] mynode">
                    {/* New side of is added now...*/}
                    <motion.div className="w-[350px] absolute top-[-10%] right-10 border-2"
                     initial="offscreen"
                     whileInView={"onscreen"}
                     variants={ImageOne()}
                    >
                        <Image src={Oneimg} alt="Image" />
                    </motion.div>

                    <motion.div className="w-[350px] absolute top-[20%] left-[10%] border-2"
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={ImageTwo()}
                    >
                        <Image src={Twoimg} alt="Image" />
                    </motion.div>

                    <motion.div className="w-[350px] absolute top-[60%] left-[-50%] border-2"
                     initial="offscreen"
                     whileInView={"onscreen"}
                     variants={ImageThree()}
                    >
                        <Image src={Threeimg} alt="Image" />
                    </motion.div>
                </div>

                {/* Text Content */}
                <motion.div className="w-full md:w-1/2"
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={textVariantReveals()}
                >
                    <div className="uppercase text-2xl text-slate-900 font-semibold text-center md:text-left">
                        <h1>about Techsol Software kenya <span className='font-thin text-slate-500'>tsk</span></h1>
                    </div>
                    <div className="py-2 text-slate-900 text-sm font-medium items-stretch align-middle space-y-2">
                        <p>We are a premier digital solutions provider, dedicated to transforming businesses through innovative technology and strategic marketing.</p>
                        <p>Our services include website and app development, delivering responsive, user-friendly, and high-performing digital products tailored to your unique needs.</p>
                        <p>Our digital marketing and branding experts craft comprehensive strategies to enhance your online presence, including social media management, email marketing, and content creation.</p>
                    </div>

                    <div className="py-2 text-slate-900 text-sm font-medium space-y-2">
                        <p>We specialize in creating strong<br /> brand identities with services like logo design and visual branding.</p>
                        <p>Our professional training programs empower your team with essential skills in digital marketing and web development.</p>
                    </div>

                    <div className="py-2 text-slate-900 text-sm font-medium space-y-2">
                        <p>Additionally, our advanced POS systems integrate both software and hardware solutions to streamline your business operations.</p>
                        <p>Lastly, our SEO services leverage cutting-edge techniques to boost your website&apos;s search engine ranking, ensuring increased online visibility and engagement.</p>
                    </div>

                    <div className="bg-cyan-900 p-3 mt-2 rounded-full gap-4 w-full md:w-[50%] flex items-center justify-center cursor-pointer animate__animated animate__shakeX">
                        <h1 className='text-slate-200 text-sm'>Learn more now</h1>
                        <div className="bg-blue-400 rounded-full">
                            <MdNavigateNext className="text-3xl" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
