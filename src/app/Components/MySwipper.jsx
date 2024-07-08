'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Oneimg from '../Image/pexels-mart-production-7550581.jpg';
import Twoimg from '../Image/pexels-pixabay-269077.jpg';
import Threeimg from '../Image/pexels-thisisengineering-3861967.jpg';
import Image from "next/image";

// Image data
const mygoals = [
  {
    id: 1,
    imgsrc: Oneimg,
    title: "First Image",
  },
  {
    id: 2,
    imgsrc: Twoimg,
    title: "Second Image",
  },
  {
    id: 3,
    imgsrc: Threeimg,
    title: "Third Image",
  },
];

const MySwipper = () => {
  return (
    <div className="h-[500px] w-full flex justify-center p-4 bg-gray-100">
      <Swiper 
        pagination={{ dynamicBullets: true }} 
        modules={[Pagination]} 
        className="mySwiper h-full w-full rounded-lg shadow-lg"
      >
        {mygoals.map((val) => (
          <SwiperSlide key={val.id}>
            <div className="flex justify-center items-center h-full">
              <Image
                className="object-cover h-full w-full rounded-lg"
                src={val.imgsrc}
                alt={val.title}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MySwipper;
