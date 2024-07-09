"use client"
import React from 'react'
import myVideo from '../Video/PromotionOFthePages.mp4'
import CountUp from 'react-countup';
import { motion } from "framer-motion"
import { containerVariant, textVariantReveals } from '../Animation/animation.js';

export default function HomepageTwo() {

  const myVideLinks =  'https://www.youtube.com/watch?v=2BTduFNxing'

  return (
    <div className="max-w-screen-xl mx-auto p-4" id='advantage'>
      <motion.div 
        className="mx-auto py-[50px] items-center justify-center flex gap-6 flex-wrap w-full"
        initial="offscreen"
        whileInView={"onscreen"}
        variants={containerVariant()}
      >
        <div className="text-black text-center">
          <h1 className='text-2xl font-bold'>
            <CountUp end={500} suffix="k+ More" duration={15} />
          </h1>
          <p className='text-sm text-slate-900'>Trusted Companies Partner</p>
        </div>

        <div className="text-black text-center">
          <h1 className='text-2xl font-bold'>
            <CountUp end={300} suffix="k+ View" duration={15} />
          </h1>
          <p className='text-sm text-slate-900'>Partner of training journey</p>
        </div>

        <div className="text-black text-center">
          <h1 className='text-2xl font-bold'>
            <CountUp end={400} suffix="k+ View" duration={15} />
          </h1>
          <p className='text-sm text-slate-900'>Partner project designer</p>
        </div>

        <div className="text-black text-center">
          <h1 className='text-2xl font-bold'>
            <CountUp end={100} suffix="k+ View" duration={15} />
          </h1>
          <p className='text-sm text-slate-900'>Data structure</p>
        </div>
      </motion.div>

      <motion.div 
        className="min-h-screen w-full flex flex-col md:flex-row justify-between items-center gap-6"
        initial="offscreen"
        whileInView={"onscreen"}
        variants={textVariantReveals()}
      >
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <video
            className="rounded-xl"
            src={myVideo}
            autoPlay
            muted
            loop
            poster="poster.jpg"
            preload="auto"
            playsInline
            controls
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center p-4">
          <h2 className="text-xl Advantages text-slate-900 font-bold mb-4 uppercase text-center md:text-left">Advantages of working with us</h2>
          <div className="pl-4 text">
            <div className="text-slate-900 text-base py-3 font-medium space-y-2">
              <p>Expertise and Experience: They bring extensive knowledge and skills.</p>
              <p>Customization and Scalability: Tailored solutions that grow with your business.</p>
              <p>Time Efficiency: Projects are completed faster with a dedicated team.</p>
              <p>Technical Support: Ongoing maintenance and support for your website.</p>
              <p>Access to Latest Technologies: Integration of modern technologies.</p>
            </div>
            <div className="text-base font-medium text-slate-950 space-y-2">
              <p>SEO and Marketing Integration: Enhance visibility and performance.</p>
              <p>Security: Implementation of robust security measures.</p>
              <p>Cost-Effectiveness: Save on hiring and infrastructure costs.</p>
              <p>Focus on Core Business: Allows focus on primary business activities.</p>
              <p>Quality Assurance: Rigorous testing ensures a seamless user experience.</p>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Adding an Infinite carousel */}
    </div>
  )
}
