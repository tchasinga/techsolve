"use client"
import React from 'react'
import Oneimg from '../Image/pexels-pixabay-269077.jpg'
import myDataobject from '../Data/Dataone.js'

export default function Ourservice() {
    return (
        <div className="min-h-screen w-full max-w-full bg-fixed object-fill"
            style={{
                background: `linear-gradient(rgba(4, 5, 5, 0.716), rgba(4, 5, 5, 0.716)), url(${Oneimg.src}) center / cover no-repeat fixed`,
            }}
        >
            <div className="backdrop-blur-sm min-h-screen flex-col flex justify-center items-center">
                <h1 className="text-4xl text-white font-bold">Our Services</h1>
                <div className="max-w-5xl mx-auto">
                    <div className="gridGeneral">
                        {myDataobject.slice(0, 6).map((item) => (
                            <div key={item.id} className="bg-white bg-opacity-50 p-4 py-4 rounded-lg">
                                <div className="flex-col flex justify-center items-center">
                                    <div className="bg-blue-400 p-5 rounded-full text-2xl my-3">
                                        {item.MyIcons}
                                    </div>
                                    <div className="flex items-center justify-center mb-2">
                                        <h1 className="text-lg font-bold">{item.myTitle}</h1>
                                    </div>
                                </div>
                                <div className="line-clamp-4 text-slate-900 ">
                                    <p>{item.Description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
