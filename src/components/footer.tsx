"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { trackCtaClick } from "../lib/gtm";

// TODO: Replace the placeholder values below with the real broker/developer
// details before deploying. RERA advertising rules require the advertiser
// identity and Trakheesi permit number to be displayed.
const advertiser = {
  company: "Lamar Development",
  address: "Dubai Water Canal, Jumeirah 2, Dubai, United Arab Emirates",
  phone: "+971 X XXX XXXX",
  email: "info@seamirrorresidence.com",
  orn: "ORN: XXXXX",
  permit: "Trakheesi Permit No: XXXXXXXXXXXX",
};

export function Footer() {
  return (
    <footer className="border-t border-border">
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8 py-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid gap-8 md:grid-cols-3 text-sm text-muted-foreground">
          <div>
            <h3 className="text-foreground text-base mb-3">
              Sea Mirror Residences
            </h3>
            <p>
              Waterfront penthouses on the Dubai Water Canal, Jumeirah 2, Dubai
              — a development by {advertiser.company}.
            </p>
          </div>

          <div>
            <h3 className="text-foreground text-base mb-3">Contact</h3>
            <p>{advertiser.address}</p>
            <p className="mt-2">
              <a
                href={`tel:${advertiser.phone.replace(/\s/g, "")}`}
                onClick={() => trackCtaClick("phone_call", "footer")}
              >
                {advertiser.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${advertiser.email}`}
                onClick={() => trackCtaClick("email", "footer")}
              >
                {advertiser.email}
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-foreground text-base mb-3">
              Regulatory Information
            </h3>
            <p>{advertiser.orn}</p>
            <p>{advertiser.permit}</p>
            <p className="mt-2">
              <Link
                href="#faq"
                className="underline"
                onClick={() => trackCtaClick("faq", "footer")}
              >
                FAQ
              </Link>{" "}
              ·{" "}
              <Link
                href="#contact-form"
                className="underline"
                onClick={() => trackCtaClick("register_interest", "footer")}
              >
                Register Your Interest
              </Link>
            </p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground text-center mt-10">
          &copy; {new Date().getFullYear()} Sea Mirror Residences. All rights
          reserved.
        </p>
      </motion.div>
    </footer>
  );
}
