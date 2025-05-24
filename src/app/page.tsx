import Hero from "@/Components/heroSection";
import WhoWeAre from "@/Components/WhoWeAre"
import HowItWorks from "@/Components/HowItWorks";
import HowWeHelp from "@/Components/HowWeHelp";
import WhatTheSay from "@/Components/WhatTheSay";
import Faqs from "@/Components/Faqs";
import OurBlog from "@/Components/OurBlog";
import MobileApp from "@/Components/MobileApp";
import Footer from "@/Components/Footer"

export default function Home() {
  return (
    <main className="main">
      <Hero />
         <WhoWeAre />
        <HowItWorks />
        <HowWeHelp />
        <WhatTheSay />
        <Faqs />
        <OurBlog />
        <MobileApp />
        <Footer /> 
    </main>
        
  );
}
