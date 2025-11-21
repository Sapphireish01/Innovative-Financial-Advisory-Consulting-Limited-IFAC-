// "use client";


import TopHeader from "../components/TopHeader";
import Footer from "../components/Footer";
import HomeHero from "../components/HomeHero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import SuccessStories from "../components/SuccessStories";
import ContactForm from "../components/ContactSection";
import Partners from "../components/PartnerSection";
import Vision from "../components/VisionSection";
import WhoWeServe from "../components/WhoWeServe";

export default function HomePage() {
  return (
    <>
      <TopHeader />

      <main>
        <section id="home">
          <HomeHero />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="vision">
          <Vision />
        </section>

        <section id="partners">
          <Partners />
        </section>

        <section id="services">
          <ServicesSection />
        </section>

        <section id="who">
          <WhoWeServe />
        </section>

        <section id="success">
          <SuccessStories />
        </section>

        <section id="contact">
          <ContactForm />
        </section>
      </main>

      <Footer />
    </>
  );
}
