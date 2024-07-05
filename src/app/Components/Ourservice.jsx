"use client"
import React from 'react'
import Oneimg from '../Image/pexels-pixabay-269077.jpg'

export default function Ourservice() {
    return (
        <div className="min-h-screen w-full max-w-full bg-fixed object-fill flex-col flex justify-center"
            style={{
                background: `linear-gradient(rgba(4, 5, 5, 0.716), rgba(4, 5, 5, 0.716)), url(${Oneimg.src}) center / cover no-repeat fixed`,
            }}
        >
            <div className=""></div>
        </div>
    )
}
