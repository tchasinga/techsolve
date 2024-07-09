"use client"
import React from 'react'
import secondlydata from '../Data/Datasecond.js'
import Oneimg from '../Image/pexelsWorks.jpg';
import Image from "next/image";
import Renders from './Renders.jsx';


export default function Ourrecentworks() {
    return (
        <div className="min-h-screen  w-full max-w-full bg-fixed object-fill "
             id='theworks'
            style={{
                background: `linear-gradient(rgba(238, 238, 238, 0.7), rgba(238, 238, 238, 0.7)), url(${Oneimg.src}) center / cover no-repeat fixed`,
            }}
        >
            <div class="flex-col flex justify-center items-center h-[100px] pt-20 mx-auto max-w-4xl">
                <div className="">
                    <h1 className='uppercase text-2xl font-bold text-slate-900'>our recent works at tsk with <span className='font-thin'>web development department</span></h1>
                </div>
                <div className="flex justify-end items-end float-end">
                    <p className='text-xs font-medium'>Our service are made under client requirement</p>
                </div>
            </div>

            {/* the object part is coming now */}
            <Renders/>
        </div>
    )
}
