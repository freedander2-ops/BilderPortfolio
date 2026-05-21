import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Process from "@/components/sections/Process";
import Quality from "@/components/sections/Quality";
import FAQ from "@/components/sections/FAQ";
import Benefits from '@/components/sections/Benefits';
import Reviews from '@/components/sections/Reviews';
import Contacts from '@/components/sections/Contacts';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <BeforeAfter />
      <Process />
      <Quality />
      <Benefits />
      <Reviews />
      <FAQ />
      <Contacts />
    </>
  );
}
