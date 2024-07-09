"use client";
import React from "react";
import myIgm from "../Image/pexelsdivinetechygirl.jpg";
import Image from "next/image";
import ComponentWhatsApp from "../Log/WhatsApp.jpeg";
import { IoLogoInstagram, IoLocationOutline } from "react-icons/io5";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { motion } from "framer-motion";
import { textVariantRevealser } from "../Animation/animation";

export default function Footer() {
  return (
    <div
      className="min-h-[500px] bg-cover bg-fixed"
      id="contact"
      style={{
        background: `linear-gradient(rgba(238, 238, 238, 0.7), rgba(238, 238, 238, 0.7)), url(${myIgm.src}) center / cover no-repeat fixed`,
      }}
    >
      <motion.div
        className="max-w-screen-xl mx-auto flex justify-center justify-evenly items-center flex-wrap w-full min-h-[500px] py-12"
        initial="offscreen"
        whileInView={"onscreen"}
        variants={textVariantRevealser()}
      >
        <div className="flex flex-col items-center">
          <div className="w-24">
            <Image src={ComponentWhatsApp} />
          </div>
          <div className="flex flex-col text-slate-900 text-sm py-2 text-center">
            <p>We implement the corporation performance</p>
            <p>Software TSk for consideration planning</p>
            <p>And reporting purposes</p>
          </div>
          <div className="">
            <h1 className="text-lg font-bold text-slate-900">Follow us:</h1>
            <div className="flex gap-3 items-center py-3">
              <div className="bg-blue-600 p-3 rounded-full text-white text-lg">
                <IoLogoInstagram />
              </div>
              <div className="bg-blue-600 p-3 rounded-full text-white text-lg">
                <FaFacebookF />
              </div>
              <div className="bg-blue-600 p-3 rounded-full text-white text-lg">
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col py-2">
          <h1 className="text-lg font-bold text-slate-900">Home</h1>
          <div className="flex flex-col text-slate-900 text-sm py-2">
            <p>Services</p>
            <p>About</p>
            <p>Blog</p>
            <p>Testimonials</p>
            <p>Contact</p>
          </div>
        </div>

        <div className="flex flex-col py-2">
          <h1 className="text-lg font-bold text-slate-900">Services</h1>
          <div className="flex flex-col text-slate-900 text-sm py-2">
            <p>Building website</p>
            <p>Building Apk & IOS</p>
            <p>Web application</p>
            <p>Digital product</p>
            <p>Etc...</p>
          </div>
        </div>

        <div className="flex flex-col py-2">
          <h1 className="text-lg font-bold text-slate-900">Quick Links</h1>
          <div className="flex flex-col text-slate-900 text-sm py-2">
            <p>Terms & Condition</p>
            <p>Privacy Policy</p>
            <p>Help center</p>
            <p>Career</p>
            <p>Contact us</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1 className="text-lg font-bold text-slate-900">Contact us</h1>
          <div className="">
            <div className="flex items-center gap-4 py-1">
              <div className="bg-blue-600 p-3 rounded-full text-white text-lg">
                <FiPhoneCall />
              </div>
              <div>
                <h1>Call us:</h1>
                <div className="text-slate-700 text-sm font-medium">
                  <p>+254 710-420-745</p>
                  <p>(250) 787-289-028</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 py-1">
              <div className="bg-blue-600 p-3 rounded-full text-white text-lg">
                <MdOutlineEmail />
              </div>
              <div>
                <h1>Email us:</h1>
                <div className="text-slate-700 text-sm font-medium">
                  <p>tchasingajacques@gmail.com</p>
                  <p>Kiokoj81@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 py-1">
              <div className="bg-blue-600 p-3 rounded-full text-white text-lg">
                <IoLocationOutline />
              </div>
              <div>
                <h1>Location:</h1>
                <p>KG 11 Ave 15, Kigali, Rwanda</p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-2">
              <div className="bg-green-500 p-3 rounded-full text-white text-lg">
                <SiWhatsapp />
              </div>
              <div>
                <h1>WhatsApp:</h1>
                <p>+254 710-420-745</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
