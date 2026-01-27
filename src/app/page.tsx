import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { Features } from "../components/features";
import { Amenities } from "../components/amenities";
import { Area } from "../components/area";
import { SilimarProject } from "../components/silimar-project";
import { Type } from "../components/type";
import { FAQ } from "../components/faq";
import { Footer } from "../components/footer";
import ContactForm from "../components/ui/contact-form";
import { Consultation } from "../components/consultation";
import FloatingButton from "../components/ui/floating-button";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <Features />

        <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] w-full overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-fixed bg-center bg-cover"
            style={{ backgroundImage: "url('/residence/3.jpg')" }}
            role="img"
            aria-label="Iconic Burj Al Arab hotel in Dubai"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Text content */}
          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <div className="max-w-3xl">
              <h2 className="text-lg sm:text-3xl lg:text-4xl font-light text-white mb-4">
                Nestled along the Dubai Water Canal with impressive views of the
                canal, sea, and Dubai Skyline
              </h2>
            </div>
          </div>
        </section>

        <Amenities />

        <Area />

        <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] w-full overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-fixed bg-center bg-cover"
            style={{ backgroundImage: "url('/residence/2.jpg')" }}
            role="img"
            aria-label="Iconic Burj Al Arab hotel in Dubai"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Text content */}
          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <div className="max-w-3xl">
              <h2 className="text-lg sm:text-3xl lg:text-4xl font-light text-white mb-4">
                The entertaining spaces of Sea Mirror Residences beckon with
                sprawling elegance, inviting moments of shared indulgence and
                cherished memories
              </h2>
            </div>
          </div>
        </section>

        <Type />

        <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] w-full overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-fixed bg-center bg-cover"
            style={{ backgroundImage: "url('/residence/11.jpg')" }}
            role="img"
            aria-label="Iconic Burj Al Arab hotel in Dubai"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Text content */}
          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <div className="max-w-3xl">
              <h2 className="text-lg sm:text-3xl lg:text-4xl font-light text-white mb-4">
                A design masterpiece blending natural elements with the richest
                of earth’s materials - wood, glass, and concrete unite to create
                a harmonious sanctuary
              </h2>
            </div>
          </div>
        </section>

        <FAQ />
        {/* <Consultation /> */}

        <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] w-full overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-fixed bg-center bg-cover"
            style={{ backgroundImage: "url('/residence/1.jpg')" }}
            role="img"
            aria-label="Iconic Burj Al Arab hotel in Dubai"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Text content */}
          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <div className="max-w-3xl">
              <h2 className="text-lg sm:text-3xl lg:text-4xl font-light text-white mb-4">
                Attention to detail is at the core of this development where
                sustainable, modern design meets ultra high-end finishes.
              </h2>
            </div>
          </div>
        </section>

        <ContactForm />

        <SilimarProject />
      </main>
      <Footer />

      <FloatingButton />
    </>
  );
}
