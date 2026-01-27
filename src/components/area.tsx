"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Quote, MapPin, X } from "lucide-react";
import { motion } from "framer-motion";

const nearbyLocations = [
  {
    title: "Jumeirah Beach",
    distance: "5 mints",
  },
  {
    title: "Burj Khalifa",
    distance: "12 mints",
  },
  {
    title: "Dubai International Airport",
    distance: "20 mints",
  },

  {
    title: "Burj Al Arab",
    distance: "26 mints",
  },
  {
    title: "Palm Jumeirah",
    distance: "32 mints",
  },
  {
    title: "Dubai Marina",
    distance: "35 mints",
  },
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
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Area() {
  const [isMapOpen, setIsMapOpen] = useState(false);

  useEffect(() => {
    if (isMapOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMapOpen]);

  return (
    <section className="py-24 lg:py-32 bg-black overflow-hidden">
      {/* ===== Quote Section ===== */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center overflow-hidden">
          {/* Quote */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-primary uppercase mb-10">Location</p>
            </motion.div>

            <blockquote>
              <motion.p
                className="text-2xl md:text-3xl lg:text-4xl font-light  text-foreground mb-8 text-pretty"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Sea Mirror Dubai is located on Jumeirah Bay Island, offering
                residents a rare blend of exclusivity and accessibility.
              </motion.p>
            </blockquote>

            <motion.div
              className="mt-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <button
                onClick={() => setIsMapOpen(true)}
                className="inline-flex items-center justify-center px-10 py-4 border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300"
              >
                View Map
              </button>
            </motion.div>
          </motion.div>

          {/* Image Gallery */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Mobile: Single column stack */}
            <div className="flex flex-col gap-4 ">
              <motion.div
                className="relative w-full aspect-[4/3] overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Image
                  src="/cummunity/2.webp"
                  alt="Sea Mirror aerial view"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </motion.div>

              <motion.div
                className="relative w-full aspect-[4/3] overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Image
                  src="/cummunity/3.jpg"
                  alt="Sea Mirror luxury residence"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </motion.div>
            </div>

            {/* Desktop: Original 2-column grid */}
          </motion.div>
        </div>
      </div>

      {/* ===== Nearby Locations ===== */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-primary uppercase mb-10">
            Nearby Locations
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {nearbyLocations.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              // whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="border border-primary/40 p-6   hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.distance}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ===== Map Modal ===== */}
      {isMapOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMapOpen(false)}
        >
          <motion.div
            className="relative w-[95%]  h-[80vh] bg-black "
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="w-full flex justify-between items-center mb-6">
              <div>Map View</div>
              <button
                onClick={() => setIsMapOpen(false)}
                className=" z-10 text-white hover:opacity-70"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Google Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.203058536395!2d55.234311176215655!3d25.196373777711543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43003e204219%3A0x96d72763a2590d82!2sSea%20Mirror!5e0!3m2!1sen!2sae!4v1769515977685!5m2!1sen!2sae"
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
