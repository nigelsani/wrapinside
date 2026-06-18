"use client";
import { useScrollReveal } from "@/components/ScrollReveal";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Benefits from "@/components/Benefits";
import Gallery from "@/components/Gallery";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

export default function Home() {
  useScrollReveal();

  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <Gallery />
      <HowItWorks />
      <Pricing />
      <Reviews />
      <FAQ />
      <QuoteForm />
      <Footer />
    </main>
  );
}
