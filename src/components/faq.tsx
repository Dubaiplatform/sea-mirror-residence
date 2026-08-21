"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { motion } from "framer-motion";
import { FAQS as faqs } from "../lib/site-data";
import { trackEvent } from "../lib/gtm";

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
          <Accordion
            type="single"
            collapsible
            className="w-full"
            onValueChange={(value) => {
              if (value) {
                const index = Number(value.replace("item-", ""));
                trackEvent("faq_open", {
                  faq_question: faqs[index]?.question,
                });
              }
            }}
          >
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem
                  value={`item-${index}`}
                  className="border-border text-black"
                >
                  <AccordionTrigger className="text-left hover:cursor-pointer text-lg font-light  transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  {/* forceMount keeps answers in the server-rendered DOM so they are indexable */}
                  <AccordionContent
                    forceMount
                    className=" leading-relaxed pb-4"
                  >
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
