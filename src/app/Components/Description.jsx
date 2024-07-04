import React from 'react'
import Image from 'next/image';
// Image import side 
import Oneimg from '../Image/pexels-mart-production-7550581.jpg';
import Twoimg from '../Image/pexels-pixabay-269077.jpg';
import Threeimg from '../Image/pexels-thisisengineering-3861967.jpg';

export default function Description() {
    return (
        <div className="min-h-screen w-full max-w-full bg-fixed object-fill flex-col flex justify-center"
            style={{
                background: `linear-gradient(rgba(238, 238, 238, 0.7), rgba(238, 238, 238, 0.7)), url(${Oneimg.src}) center / cover no-repeat fixed`,
            }}
        >
            <div className="max-w-screen-xl mx-auto relative">
                {/* This is my first div */}
                <div className="">
                    {/* New first part of the game */}
                    <div className="h-[400px] w-[250px] bg-transparent border-2 border-red-900 "></div>
                    {/* New side of is added now...*/}
                    <div className="w-[350px] absolute top-[-10%] right-10 border-2">
                        <Image src={Oneimg} alt="Image" />
                    </div>
                    <div className="w-[350px] absolute top-[20%] left-[10%] border-2">
                        <Image src={Twoimg} alt="Image" />
                    </div>
                    <div className="w-[350px] absolute top-[60%] left-[-50%] border-2">
                        <Image src={Threeimg} alt="Image" />
                    </div>
                </div>

                {/* The upcoming part is added now...*/}
                
                <div className="">
                </div>

            </div>
        </div>
    )
}
