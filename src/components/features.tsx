"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { Carousel } from "./ui/about-carousel";
import { trackCtaClick } from "../lib/gtm";

const fadeInLeft: any = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: "easeOut" },
};

const fadeInRight: any = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: "easeOut" },
};

export function Features() {
  const slideData = [
    {
      src: "/residence/1.jpg",
      title:
        "Sea Mirror Residences living room with floor-to-ceiling canal views",
    },
    {
      src: "/residence/2.jpg",
      title:
        "Entertaining space at Sea Mirror Residences penthouse, Dubai Water Canal",
    },
    {
      src: "/residence/3.jpg",
      title:
        "Sea Mirror Residences exterior on the Dubai Water Canal, Jumeirah 2",
    },
    {
      src: "/residence/4.jpg",
      title:
        "Penthouse interior in wood, glass and concrete at Sea Mirror Residences",
    },
    {
      src: "/residence/5.jpg",
      title:
        "Sea Mirror Residences bedroom with 3.2m ceilings and waterfront outlook",
    },
    {
      src: "/residence/6.jpg",
      title: "Open-plan kitchen and dining area at Sea Mirror Residences",
    },
    {
      src: "/residence/7.jpg",
      title: "Sea Mirror Residences terrace overlooking the Dubai skyline",
    },
    {
      src: "/residence/8.jpg",
      title: "Bathroom finished in natural stone at Sea Mirror Residences",
    },
    {
      src: "/residence/9.jpg",
      title: "Sea Mirror Residences waterfront facade at dusk, Jumeirah 2",
    },
    {
      src: "/residence/10.jpg",
      title: "Panoramic canal views from a Sea Mirror Residences penthouse",
    },
    {
      src: "/residence/11.jpg",
      title: "Double-height lobby entrance at Sea Mirror Residences",
    },
    {
      src: "/residence/12.jpg",
      title: "Infinity pool and wellness amenities at Sea Mirror Residences",
    },
  ];

  return (
    <section id="about" className="py-18 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center overflow-hidden">
          {/* Image – FIRST on mobile */}
          <motion.div
            {...fadeInRight}
            className="relative md:aspect-[4/5] sm:aspect-[3/2] aspect-[3/2] overflow-hidden order-1 lg:order-2"
          >
            <Image
              src="/residence/10.jpg"
              alt="Sea Mirror Residences penthouse interior with panoramic canal views"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Text – SECOND on mobile */}
          <motion.div {...fadeInLeft} className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-foreground mb-4 text-balance">
              Designed to frame Dubai’s iconic canal and skyline
            </h2>
            <p className="md:text-lg sm:text-md text-sm text-muted-foreground leading-relaxed mb-10 text-pretty">
              {" "}
              Jumeirah 2 canal front luxury apartments are built as a modern
              oasis with modest and serene coastal rhythm and movie-like frontal
              light. The 12-metre double-height lobby creates a glamorous entry
              point, and the 3.2m floor-to-ceiling height makes each room
              spacious and serene.
            </p>

            <Button
              asChild
              className="bg-white text-primary-foreground hover:bg-primary/90 hover:text-white"
            >
              <Link
                href="#contact-form"
                onClick={() => trackCtaClick("register_interest", "about")}
              >
                Register Your Interest
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className=" mt-20 overflow-hidden">
        <Carousel slides={slideData} />
      </div>
    </section>
  );
}
