import Image from "next/image";
import Navbar from "./Navbar/Navbar";
export default function heroSection() {
    return (
      <section className="relative bg-[url(/hero.png)] bg-cover bg-center h-[100vh]" >
      <div className="absolute inset-0 bg-black opacity-50 "></div>
  
        {/* Content */}
        <div className="relative z-10 container flex  items-center justify-between h-full text-white text-center">
          <Navbar />
          <div className="flex mt-12">
            <div className="w-1/2 text-start flex flex-col justify-around h-[328px] text-sm">
              <p className="text-[#EB8F02] font-bold">For Everyone, Every Business, and Every Electric Vehicle</p>
              <h1 className="text-8xl md:text-6xl font-bold w-[500px]">Solutions for EV Charging Stations</h1>
              <p className="mt-1 ">Our residential, commercial, and fast charging stations are highly compatible, built on open standards, and designed for accessibility for all.</p>
                <div className="mt-24 text-start w-[220px]">    
                    <p>Help us minimize your carbon footprint, one charge at a time!</p>
                    <button className="mt-8 border-b ">Explore More <span className="ml-2">&darr;</span></button>
                </div>
            </div>
            <div className="w-1/2 text-sm relative">
              <Image
                src="/iPhone 15 Pro.png"
                alt="My Next.js App Logo"
                width={820}
                height={720}
                className=""
              />
              <div className="absolute -bottom-6 ml-38 bg-[#FCFCFD33] text-white backdrop-blur-2xl w-[270px] h-[152px] p-4 z-10 rounded-4xl text-start">    
                <p>Boost efficiency with the cutting-edge Charging Station App for Electric Vehicle Owners</p>
                <button className="border-b mt-4 ">Download App <span className="ml-2">&rarr;</span></button>
              </div>
            </div>
            
          </div>
          
        </div>
      </section>
    );
  }
  