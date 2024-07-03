import React from 'react'
import Image from 'next/image'
import ComponentWhatsApp from '../Log/WhatsApp.jpeg'

export default function Navbars() {
  return (
    <div className="mx-auto max-w-5xl  border-2 py-3 flex justify-between items-center">
        <div className="w-[150px]">
            <Image src={ComponentWhatsApp} />
        </div>
        <div className="">
            <ul className="flex items-center justify-center gap-3">
                <li>Introduction</li>
                <li>About TSK</li>
                <li>Our services</li>
                <li>Teams</li>
                <li>Developments</li>
            </ul>
        </div>
    </div>
  )
}
