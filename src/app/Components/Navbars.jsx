import React from 'react'
import Image from 'next/image'
import ComponentWhatsApp from '../Log/WhatsApp.jpeg'

export default function Navbars() {
  return (
    <div className="mx-auto max-w-5xl py-3 flex justify-between items-center">
        <div className="w-[150px]">
            <Image src={ComponentWhatsApp} />
        </div>
        <div className="">
            <ul className="flex items-center flex-wrap text-sm font-medium justify-center gap-6">
                <li className="hover:cursor-pointer hover:text-green-800 duration-500">Introduction</li>
                <li className="hover:cursor-pointer hover:text-green-800 duration-500">About TSK</li>
                <li className="hover:cursor-pointer hover:text-green-800 duration-500">Our services</li>
                <li className="hover:cursor-pointer hover:text-green-800 duration-500">Teams</li>
                <li className="hover:cursor-pointer hover:text-green-800 duration-500">Developments</li>
            </ul>
        </div>
    </div>
  )
}
