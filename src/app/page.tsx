import Marquee from "@/components/Marquee";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Marquee />
      <Header />
      <main>
        <Hero />
        <Marquee/>
        <About />
        <Marquee/>
        <Services />
        <Marquee/>
        <Portfolio />
        <Marquee/>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
