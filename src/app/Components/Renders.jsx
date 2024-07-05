import React from 'react'
import secondlydata from '../Data/Datasecond'
import Image from "next/image";

export default function Renders() {
    return (
        <div className="max-w-5xl mx-auto mt-[5%]">
            {secondlydata.map((data) => {
                return (
                    <div key={data.id} className="flex justify-between items-center align-middle reversingflex">

                        <div className="w-[400px] border-2 border-red-400 m-3 rounded-lg relative" >
                            <Image src={data.ImagesSide} className='mb-[-10px] mt-2 ml-3' />
                            <div className='absolute border-2 border-slate-900 top-[35%] bg-white p-9 rounded-full text-3xl left-[85%] '>
                                {data.MoreIcons}
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 md:pl-4">
                            <h1 className="text-2xl font-semibold text-slate-900">{data.ProjectTitle}</h1>
                            <div className="flex items-center justify-start">
                                {data.MoreIcons}
                                <p className="text-slate-500 text-sm font-medium ml-2">Verified</p>
                            </div>
                            <p className="text-slate-900 text-sm font-medium">{data.myDescription}</p>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}
