'use client';
import React from 'react';
import { useState } from 'react'; // Removed unused useEffect import
import '../globals.css'

export default function Navbars() {
    const [open, setOpen] = useState(false);
    const menuLinks = [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "Skills", link: "#skills" },
        { name: "Portfolio", link: "#projects" },
        { name: "Contact", link: "#contact" },
    ];

    return (
        <nav className='fixed font-poppins font-sans w-full left-0 top-0 z-[999] mypad'>
            <div className="flex items-center justify-between">
                <div className="mx-7">
                    <h4 className="text-sm myheader uppercase font-bold text-slate-200">
                        Jet-codesign
                    </h4>
                </div>

                <div className='text-gray-900 md:block hidden px-7 py-2 font-medium'>
                    <ul className="flex items-center font-poppins font-sans py-2 text-sm">
                        {menuLinks.map((menu, i) => (
                            <li key={i} className="px-3 text-white font-poppins font-sans hover:text-cyan-600">
                                <a href={menu.link}>{menu.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div
                    onClick={() => setOpen(!open)}
                    className={`z-[999] ${open ? "text-gray-200" : "text-gray-100"} text-3xl md:hidden m-5`}
                >
                    <svg
                        className="w-8 h-8 text-slate-200 "
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {open ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            ></path>
                        )}
                    </svg>
                </div>
                <div
                    className={`md:hidden text-gray-900 absolute w-full h-screen px-7 py-2 font-medium bg-black top-0 duration-300 ${open ? "right-0" : "right-[-100%]"}`}
                >
                    <ul className="flex flex-col justify-center h-full text-white gap-10 py-2 text-lg">
                        {menuLinks.map((menu, i) => (
                            <li
                                onClick={() => setOpen(false)}
                                key={i}
                                className="px-6 hover:text-cyan-600"
                            >
                                <a href={menu.link}>{menu.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}