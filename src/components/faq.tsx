"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is Sea Mirror Residences?",
    answer:
      "Sea Mirror Residences is an ultra-luxury waterfront development featuring 18 exclusive penthouses, designed for ultra-high-net-worth individuals seeking refined coastal living in Dubai",
  },
  {
    question: "Where is Sea Mirror Residences located?",
    answer:
      "The project is nestled along the Dubai Water Canal, offering panoramic views of the canal, the sea, and Dubai’s skyline, with seamless connectivity to key landmarks",
  },
  {
    question: "What makes the design of Sea Mirror unique?",
    answer:
      "Yes. With its prime canal-front location, limited number of residences, and world-class architectural pedigree, Sea Mirror represents a highly exclusive real estate investment opportunity",
  },
  {
    question: "Is Sea Mirror suitable for investment?",
    answer:
      "Today, access is from the right side next to Eden House, the Canal, keeping arrival straightforward for residents and visitors. An RTA-approved access point is planned below the bridge after the U-turn, enhancing circulation. Views are considered, since units from the second floor onward sit above the bridge",
  },
  {
    question: "What lifestyle does Sea Mirror offer?",
    answer:
      "Sea Mirror offers a calm, private, and refined coastal lifestyle, combining urban accessibility with the tranquility of waterfront living",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-lg  text-primary  mb-4">FAQ's</p>
          {/* <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight  mb-6 text-balance text-black">
            Your questions, <span className="">answered.</span>
          </h2> */}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem
                  value={`item-${index}`}
                  className="border-border text-black"
                >
                  <AccordionTrigger className="text-left hover:cursor-pointer text-lg font-light  transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className=" leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
