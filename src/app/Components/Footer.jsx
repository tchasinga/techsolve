import React from 'react'
import myIgm from '../Image/pexelsdivinetechygirl.jpg'
import Image from 'next/image'
import ComponentWhatsApp from '../Log/WhatsApp.jpeg'
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


export default function Footer() {
    return (
        <div className="min-h-[500px]"
            style={{
                background: `linear-gradient(rgba(238, 238, 238, 0.7), rgba(238, 238, 238, 0.7)), url(${myIgm.src}) center / cover no-repeat fixed`,
            }}
        >

            <div className="max-w-screen-xl mx-auto">

                <div className="flex flex-col">
                    <div className="w-24">
                        <Image src={ComponentWhatsApp} />
                    </div>

                    <div className="flex flex-col text-slate-900 text-sm">
                        <p>We implement the corporation performance</p>
                        <p>Software TSk for consideration planning</p>
                        <p>And reporting purposes</p>
                    </div>
                    <div className="">
                        <h1 className='text-xl font-bold text-slate-900'>Follow us :</h1>
                        
                        <div className="flex gap-3 items-center">
                           <div className="bg-blue-600 p-3 rounded-full text-white text-xl font-bold">
                           <IoLogoInstagram className="" />
                           </div>
                           <div className="bg-blue-600 p-3 rounded-full text-white text-xl font-bold">
                          <FaFacebookF className="" />
                          </div>
                          <div className="bg-blue-600 p-3 rounded-full text-white text-xl font-bold">
                           <FaTwitter className="" />
                           </div>
                        </div>
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
