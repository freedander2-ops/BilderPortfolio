import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
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
      <Benefits />
      <Reviews />
      <Contacts />
    </>
  );
}
