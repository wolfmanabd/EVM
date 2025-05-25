import Image from "next/image";
import Navbar from "./Navbar/Navbar";
export default function heroSection() {
    return (
      <section className="relative bg-[url(/hero.png)] w-[100vw] bg-cover bg-center h-[80vh]" >
      <div className="absolute inset-0 bg-black opacity-50 "></div>
  
        {/* Content */}-
        <div className="relative z-10 container flex md:items-center justify-between h-full text-white text-center">
          <div className="absolute top-0">
            <Navbar/>
          </div>
          <div className="flex flex-col md:flex-row mt-15">
            
            <div className=" text-start flex flex-col md:justify-around md:h-[328px] text-sm mb-6">
              <p className="text-[#EB8F02] font-bold">For Everyone, Every Business, and Every Electric Vehicle</p>
              <h1 className="text-2xl md:text-6xl font-bold md:w-[500px]">Solutions for EV Charging Stations</h1>
              <p className="mt-1 ">Our residential, commercial, and fast charging stations are highly compatible, built on open standards, and designed for accessibility for all.</p>
                <div className=" text-start w-[220px]">    
                    <p>Help us minimize your carbon footprint, one charge at a time!</p>
                    <button className="mt-8 border-b ">Explore More <span className="ml-2">&darr;</span></button>
                </div>
            </div>
            <div className="md:w-1/2 items-center mx-auto relative md:left-48 w-[90%] h-[80%] md:-mt-6">
              <Image
                src="/iPhone 15 Pro.png"
                alt="My Next.js App Logo"
                fill
              />
              <div className="absolute -bottom-1 left-10 text-sm md:-bottom-6 md:ml-38 bg-[#FCFCFD33] text-white backdrop-blur-lg  w-[220px] h-[120px] md:w-[270px] md:h-[152px] p-2 z-10 rounded-4xl text-start  md:block">    
                <p>Boost efficiency with the cutting-edge Charging Station App for Electric Vehicle Owners</p>
                <button className="border-b md:mt-4 m-0 p-0 ">Download App <span className="md:ml-2">&rarr;</span></button>
              </div>
            </div>
            
          </div>
          
        </div>
      </section>
    );
  }
  