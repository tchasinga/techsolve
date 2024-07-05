"use client";
import React from 'react'
import Oneimg from '../Image/pexels-olly.jpg';

export default function Contactus() {
  return (
    <div className='min-h-[400px]'
    style={{
      background: `linear-gradient(to left, rgba(4, 5, 5, 0.801), rgba(0, 0, 0, 0.112)), url(${Oneimg.src}) center / cover no-repeat fixed`,}}
    >
      <div className='flex  justify-end items-center max-w-4xl mx-auto pt-10 min-h-[400px]'>
        <div class="flex flex-col justify-center">
          <h1 className='text-4xl text-white uppercase font-extrabold'>contact us <span className='font-thin'>today</span></h1>
          <hr className='w-[100px] py-2 mt-1'/>
          <div class="text-base text-slate-100 ">
             <p>Get in touch with us if you to optimize your controlling and</p>
             <p>Accounting processes with system supports we would be happy to</p>
             <p>Present our solution portfolio to you and support you as a partner in</p>
             <p>The design and implementation</p>
          </div>
        </div>
      </div>
    </div>
  )
}