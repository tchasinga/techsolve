"use client";
import React, { useEffect, useState } from 'react';

export default function Providerservice() {
    const spanChanger = [
        "Website Development",
        "App Development Android & IOS",
        "Web applications",
        "UI design",
        "Digital Marketing and Branding",
        "Brand Design",
        "Professional Training",
        "POS System - Software and Hardware",
        "SEO Services",
        "Digital Marketing and Branding",
        "Photo editing",
    ];


    return (
        <div className="h-[100px] bg-slate-200 flex justify-center items-center gap-5">
            <div className="">
                <h1 className="first-letter:uppercase">
                    we provide a trusted service in
                </h1>
            </div>

            <div className="">
                 <h1>{spanChanger}</h1>
            </div>

        </div>
    );
}
