"use client"
import React from 'react'
import myVideo from '../Video/PromotionOFthePages.mp4'
import CountUp from 'react-countup';


export default function HomepageTwo() {
  return (
    <div class="max-w-screen-xl mx-auto">
      <div className="mx-auto pt-[100px] items-center justify-center flex gap-10 flex-wrap  w-full">
        <div className="text-black">
          <h1 className='text-2xl font-bold'>
            <CountUp end={500} suffix="k+ More" duration={10} />
          </h1>
          <p className='text-sm text-slate-900'>Trusted Companies Partner</p>
        </div>

        <div className="text-black">
          <h1 className='text-2xl font-bold'>
            <CountUp end={300} suffix="k+ View" duration={10} />
          </h1>
          <p className='text-sm text-slate-900'>Partner of training journey</p>
        </div>

        <div className="text-black">
          <h1 className='text-2xl font-bold'>
            <CountUp end={400} suffix="k+ View" duration={10} />
          </h1>
          <p className='text-sm text-slate-900'>Partner project designer</p>
        </div>


        <div className="text-black">
          <h1 className='text-2xl font-bold'>
            <CountUp end={100} suffix="k+ View" duration={10} />
          </h1>
          <p className='text-sm text-slate-900'>Data structure</p>
        </div>
      </div>

      <div className="min-h-screen w-full flex flex-col md:flex-row justify-between">
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
          />
        </div>

        {/* Second div */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-4">
          <h2 className="text-xl text-slate-900 font-bold mb-4 uppercase">Advantages of working with us</h2>
          <div className="list-disc pl-4 text">
            <div className="text-slate-900 text-base py-3 font-medium">
              <p>Expertise and Experience: They bring extensive knowledge and skills.</p>
              <p>Customization and Scalability: Tailored solutions that grow with your business.</p>
              <p>Time Efficiency: Projects are completed faster with a dedicated team.</p>
              <p>Technical Support: Ongoing maintenance and support for your website.</p>
              <p>Access to Latest Technologies: Integration of modern technologies.</p>
            </div>
            <div className="text-base font-medium text-slate-950">
              <p>SEO and Marketing Integration: Enhance visibility and performance.</p>
              <p>Security: Implementation of robust security measures.</p>
              <p>Cost-Effectiveness: Save on hiring and infrastructure costs.</p>
              <p>Focus on Core Business: Allows focus on primary business activities.</p>
              <p>Quality Assurance: Rigorous testing ensures a seamless user experience.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Adding an Infinitie carousel */}
    </div>
  )
}
