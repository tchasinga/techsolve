import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % spanChanger.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [spanChanger.length]);

  return (
    <div className="">
      <h1 className="first-letter:uppercase">
        we provide a trusted service in 
        <AnimatePresence>
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
          >
            {spanChanger[index]}
          </motion.span>
        </AnimatePresence>
      </h1>
    </div>
  );
}
