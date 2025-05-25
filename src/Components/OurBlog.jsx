import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function OurBlog() {
  return (
    <section className="bg-[#011929]  text-white text-sm">
      <div className="container">
        <p className="text-[#EB8F02] text-sm my-12">Our Blog</p>
        <div className="flex flex-col items-center space-y-3  md:my-12">
          <h1 className="md:text-5xl font-bold">
            Stay Informed on the Cutting-Edge of Technology
          </h1>
          <div className="flex justify-end space-x-8 mb-4 md:mt-6 text-md">
            <span className="bg-[#FDFDFD33] w-10 h-10 p-1 flex items-center justify-center rounded-full">
              <FaArrowLeft />
            </span>
            <span className="bg-[#FDFDFD33] w-10 h-10 p-1 flex items-center justify-center rounded-full">
              <FaArrowRight />
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between space-y-6">
          <div className="md:w-[300px] md:h-[572px] md:my-12 ml:10 space-y-4 ">
            <div className="w-100 h-90 relative">
              <Image
                src="/Frame 1686561722.png"
                alt="blog"
                fill
                className="rounded-lg"
              />
            </div>
            <p className="text-md">
              Which EV charging station is best for my business?
            </p>
            <p className="text-[#98A2B3] text-sm">
              Installing electric vehicle charging stations is becoming a
              strategic necessity for businesses. According to the report
              “ Technology and Innovation Pathways for Zero Carbon Buildings 
            </p>
          </div>
          <div className="md:w-[300px] md:my-12 space-y-6 text-sm">
            <div className="w-100 h-90 relative">
              <Image
                src="/Frame 1686561722 (1).png"
                alt="blog"
                fill
                className="rounded-lg"
              />
            </div>
            <p className="text-md">100 reasons to drive an electric vehicle</p>
            <p className="text-[#98A2B3] text-sm">
              In Latin America, we are joining Blink Charging’s global
              celebration campaign: “100 Reasons to Drive an Electric Vehicle” ,
              an initiative that highlights the countless advantages of making
              the transition to electric mobility.
            </p>
          </div>
          <div className="md:w-[300px] md:my-12 space-y-6 text-sm">
            <div className="w-100 h-90 relative">
              <Image
                src="/Frame 1686561722 (2).png"
                alt="blog"
                fill
                className="rounded-lg"
              />
            </div>
            <p className="text-md">
              Charging Ahead: Navigating tthe Electric Car Station Landscape
            </p>
            <p className="text-[#98A2B3] text-sm mb-6">
              Maxwell is a social app designed for electric vehicle (EV) owners,
              providing them with information about nearby charging stations,
              real-time availability, and the ability to connect with other EV
              enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
