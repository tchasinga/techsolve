import React from 'react'
import myIgm from '../Image/pexelsdivinetechygirl.jpg'
import Image from 'next/image'
import ComponentWhatsApp from '../Log/WhatsApp.jpeg'
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";


export default function Footer() {
    return (
        <div className="min-h-[500px]"
            style={{
                background: `linear-gradient(rgba(238, 238, 238, 0.7), rgba(238, 238, 238, 0.7)), url(${myIgm.src}) center / cover no-repeat fixed`,
            }}
        >

            <div className="max-w-screen-xl mx-auto flex justify-evenly items-center flex-wrap w-full min-h-[500px] ">

                <div className="flex flex-col">
                    <div className="w-24">
                        <Image src={ComponentWhatsApp} />
                    </div>

                    <div className="flex flex-col text-slate-900 text-sm py-2">
                        <p>We implement the corporation performance</p>
                        <p>Software TSk for consideration planning</p>
                        <p>And reporting purposes</p>
                    </div>
                    <div className="">
                        <h1 className='text-lg font-bold text-slate-900'>Follow us :</h1>

                        <div className="flex gap-3 items-center py-3">
                            <div className="bg-blue-600 p-3 rounded-full text-white text-lg font-bold">
                                <IoLogoInstagram className="" />
                            </div>
                            <div className="bg-blue-600 p-3 rounded-full text-white text-lg font-bold">
                                <FaFacebookF className="" />
                            </div>
                            <div className="bg-blue-600 p-3 rounded-full text-white text-lg font-bold">
                                <FaTwitter className="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second box */}
                <div className="flex flex-col py-2">
                    <h1>Home</h1>
                    <div className="">
                        <p>Services</p>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Testimonials</p>
                        <p>Contact</p>
                    </div>
                </div>

                {/* 3e box */}
                <div className="">
                    <h1>Services</h1>
                    <div className="">
                        <p>Building website</p>
                        <p>Building Apk & IOS</p>
                        <p>Web application</p>
                        <p>Digital product</p>
                        <p>Etc...</p>
                    </div>
                </div>

                {/* 4e box */}
                <div className="">
                    <h1>Quick Links</h1>
                    <div className="">
                        <p>Terms & Condition</p>
                        <p>Privacy Policy</p>
                        <p>Help center</p>
                        <p>Career</p> 
                        <p>Contact us</p>
                    </div>
                </div>

                {/* 5e box */}
                <div className="flex-col flex justify-center">
                    <h1>Contact us</h1>
                    <div className="flex-col flex justify-center items-center">

                        <div className='flex items-center justify-center gap-4'>
                            <div>
                                <FiPhoneCall />
                            </div>
                            <div>
                                <h1>Call us : </h1>
                                <p>(250) 78 72 890 28</p>
                            </div>
                        </div>

                        <div className='flex items-center justify-center gap-4'>
                            <div>
                                <MdOutlineEmail />
                            </div>
                            <div>
                                <h1>Email us : </h1>
                                <p>tchasingajacques@gmail.com</p>
                            </div>
                        </div>

                        <div className='flex items-center justify-center gap-4'>
                            <div>
                                <IoLocationOutline />
                            </div>
                            <div>
                                <h1>Location : </h1>
                                <p>KG 11 Ave 15, Kigali, Rwanda</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
