import React from 'react'
import myIgm from '../Image/pexelsdivinetechygirl.jpg'
import Image from 'next/image'
import ComponentWhatsApp from '../Log/WhatsApp.jpeg'


export default function Footer() {
    return (
        <div className="min-h-[500px]"
            style={{
                background: `linear-gradient(rgba(238, 238, 238, 0.7), rgba(238, 238, 238, 0.7)), url(${myIgm.src}) center / cover no-repeat fixed`,
            }}
        >

            <div className="max-w-screen-xl mx-auto">

                <div className="flex flex-col justify-center items-center">
                    <div className="w-24">
                        <Image src={ComponentWhatsApp} />
                    </div>

                    <div className="flex flex-col">
                        <p>We implement the corporation performance</p>
                        <p>Software TSk for consideration planning</p>
                        <p>And reporting purposes</p>
                    </div>
                </div>

                {/* Second box */}
                <div className=""></div>

                {/* 3e box */}
                <div className=""></div>
                
                {/* 4e box */}
                <div className=""></div>

                {/* 5e box */}
                <div className=""></div>

            </div>

        </div>
    )
}
