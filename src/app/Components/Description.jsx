import React from 'react'
import Image from 'next/image';
// Image import side 
import Oneimg from '../Image/pexels-mart-production-7550581.jpg';
import Twoimg from '../Image/pexels-pixabay-269077.jpg';
import Threeimg from '../Image/pexels-thisisengineering-3861967.jpg';
import { MdNavigateNext } from 'react-icons/md';
import 'animate.css';

export default function Description() {
    return (
        <div className="min-h-screen w-full max-w-full bg-fixed object-fill flex-col flex justify-center"
            style={{
                background: `linear-gradient(rgba(238, 238, 238, 0.7), rgba(238, 238, 238, 0.7)), url(${Oneimg.src}) center / cover no-repeat fixed`,
            }}
        >
            <div className="max-w-5xl mx-auto flex items-center justify-between">
                {/* This is my first div */}

                {/* New first part of the game */}
                <div className="h-[400px] w-[250px] bg-transparent border-2 border-red-500 relative">
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

                <div className="w-1/2">
                    <div className="uppercase text-2xl text-slate-900 font-semibold">
                        <h1>about Techsol Software kenya <span className='font-thin text-slate-500'>tsk</span></h1>
                    </div>
                    <div className="py-2 text-slate-900 text-sm font-medium items-stretch align-middle">
                        <p>We are a premier digital solutions provider, dedicated to transforming businesses through innovative technology and strategic marketing.</p>
                        <p>Our services include website and app development, delivering responsive, user-friendly, and high-performing digital products tailored to your unique needs.</p>
                        <p>Our digital marketing and branding experts craft comprehensive strategies to enhance your online presence, including social media management, email marketing, and content creation.</p>
                    </div>

                    <div className="py-2 text-slate-900 text-sm font-medium">
                        <p>We specialize in creating strong<br /> brand identities with services like logo design and visual branding</p>
                        <p>Our professional training programs empower your team with essential skills in digital marketing and web development.</p>
                    </div>

                    <div className="py-2 text-slate-900 text-sm font-medium">
                        <p>Additionally, our advanced POS systems integrate both software and hardware solutions to streamline your business operations.</p>
                        <p>Lastly, our SEO services leverage cutting-edge techniques to boost your website's search engine ranking, ensuring increased online visibility and engagement.</p>
                    </div>

                    <div className="bg-cyan-900 p-3 mt-2 rounded-full gap-4 w-[50%] flex items-center justify-center cursor-pointer animate__animated animate__shakeX">
                        <h1 className='text-slate-200 text-sm'>Learn more now</h1>
                        <div className="bg-blue-400 rounded-full">
                            <MdNavigateNext className="text-3xl" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
