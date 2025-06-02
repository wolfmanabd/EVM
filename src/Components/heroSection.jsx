import Image from "next/image";
import Navbar from "./Navbar/Navbar";
export default function heroSection() {
  return (
    <section className="relative bg-[url(/hero.png)] w-[100vw] bg-cover bg-center h-[98vh]">
      <div className="absolute inset-0 bg-black opacity-50 "></div>
      {/* Content */}-
      <div className="relative z-10 container flex md:items-center justify-between h-full text-white text-center">
        <div className="container absolute top-0 left-0 mx-auto w-full">
          <Navbar />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between mt-20">
          <div className=" text-start flex flex-col md:justify-around md:h-[328px] text-sm mb-6 space-y-4">
            <p className="text-[#EB8F02] font-bold">
              For Everyone, Every Business, and Every Electric Vehicle
            </p>
            <h1 className="text-3xl md:text-6xl font-bold md:w-[500px]">
              Solutions for EV Charging Stations
            </h1>
            <p className="mt-1 md:w-[500px]">
              Our residential, commercial, and fast charging stations are highly
              compatible, built on open standards, and designed for
              accessibility for all.
            </p>
            <div className=" text-start w-[220px] mt-4 text-[#fcfcfd81]">
              <p>
                Help us minimize your carbon footprint, one charge at a time!
              </p>
              <button className="mt-8 border-b ">
                Explore More <span className="ml-2">&darr;</span>
              </button>
            </div>
          </div>
          <div className="flex-1 md:-mt-6">
            <div className="w-80 h-60 md:w-150 md:h-[to-100%] relative">
              <Image src="/iPhone 15 Pro.png" alt="My Next.js App Logo" fill />
            </div>

            <div className="absolute bottom-[40px] left-30 md:bottom-8 md:ml-39 text-sm bg-[#FCFCFD33] text-white backdrop-blur-lg w-[270px] md:h-[152px] p-3 z-10 rounded-4xl text-start">
              <p>
                Boost efficiency with the cutting-edge Charging Station App for
                Electric Vehicle Owners
              </p>
              <button className="border-b md:mt-4 m-0 p-0 ">
                Download App <span className="md:ml-2">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
