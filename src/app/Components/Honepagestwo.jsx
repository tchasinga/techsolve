import React from 'react'
import myVideo from '../Video/PromotionOFthePages.mp4'

export default function HomepageTwo() {
  return (
    <div className="min-h-screen w-full max-w-full flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <video
          className="h-[300px] md:h-[500px]"
          src={myVideo}
          autoPlay
          muted
          loop
          controls
          poster="poster.jpg"
          preload="auto"
          playsInline
        />
      </div>

      {/* Second div */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-4">
        <h2 className="text-xl text-slate-900 font-bold mb-4">Advantages of Web Development Companies:</h2>
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
  )
}
