"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { trackCtaClick } from "../lib/gtm";

const section1 = [
  {
    title: "Beach access",
    icon: "",
  },
  {
    title: "Cigar lounge",
    icon: "",
  },
  {
    title: "Garden",
    icon: "",
  },
  {
    title: "Gymnasium",
    icon: "",
  },

  {
    title: "High-speed internet",
    icon: "",
  },
  {
    title: "Infinity Pool",
    icon: "",
  },
  {
    title: "Kids club",
    icon: "",
  },
  {
    title: "Movie theater",
    icon: "",
  },
  {
    title: "Near hospital",
    icon: "",
  },
  {
    title: "Near park",
    icon: "",
  },
  {
    title: "Near school",
    icon: "",
  },
  {
    title: "Near shopping mall",
    icon: "",
  },
  {
    title: "Parking",
    icon: "",
  },
  {
    title: "Residents lounge area",
    icon: "",
  },
  {
    title: "Restaurant",
    icon: "",
  },
  {
    title: "Retail area",
    icon: "",
  },
  {
    title: "Spa",
    icon: "",
  },
  {
    title: "Standard pool",
    icon: "",
  },
  {
    title: "Video security",
    icon: "",
  },
  {
    title: "Wellness centre",
    icon: "",
  },
  // {
  //   title: "",
  //   icon: "",
  // },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function Amenities() {
  return (
    <section id="amenities" className="relative py-20 lg:py-32 bg-white">
      {/* <GemParticles /> */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-lg  text-primary uppercase mb-4 ">
            World-Class Amenities
          </p>
        </motion.div>
      </div>

      <div className="md:mt-20 flex justify-center items-center">
        <div className="md:w-[50%]">
          <div className="flex justify-center items-center md:px-20 px-5 md:mt-0 sm:mt-10 mt-10">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 
             text-black max-w-xl mx-auto place-items-start"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {section1.map((amenity: any, index: number) => (
                <motion.article
                  key={index}
                  variants={itemVariants}
                  className={`flex gap-2 `}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  • <div>{amenity?.title}</div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-12">
        <>
          <Link
            className="bg-black text-white hover:bg-primary/90  hover:text-white text-lg px-4 py-4"
            href="#contact-form"
            onClick={() => trackCtaClick("download_brochure", "amenities")}
          >
            Download Brochure
          </Link>
        </>
      </div>
    </section>
  );
}
