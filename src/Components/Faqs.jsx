import Image from "next/image";
import { GoDash } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
export default function Faqs() {
  return (
    <section id="faqs">
      <div className=" container">
        <p className="text-sm text-[#EB8F02] md:my-12 mt-6">FAQs</p>
        <div className="flex flex-col md:flex-row justify-between mt-4">
          <div className="md:w-[650px] space-y-12 text-[#344054] text-sm">
            <h2 className="text-xl lg:text-5xl font-bold">
              More Than 1500 Charging Stations & Growing Big
            </h2>
            <div className="lg:w-[520px] space-y-4 w-[95%] mx-auto">
              <div className="flex justify-between">
                <p className="font-semibold text-md">What is Maxwell </p>
                <GoDash className="text-2xl" />
              </div>
              <p>
                Maxwell is a social app designed for electric vehicle (EV)
                owners, providing them with information about nearby charging
                stations, real-time availability, and the ability to connect
                with other EV enthusiasts.
              </p>
            </div>
            <div className="lg:w-[520px] space-y- w-[95%] mx-auto">
              <div className="flex justify-between">
                <p className="font-semibold text-md">
                  How does Maxwell improve the EV charging experience?
                </p>
                <GoDash className="text-2xl" />
              </div>

              <p>
                Maxwell enhances the EV charging experience by offering users
                real-time updates on charging station availability, personalized
                recommendations, and a community platform for sharing tips and
                experiences.
              </p>
            </div>
            <div className="lg:w-[520px] space-y-4 w-[95%] mx-auto">
              <div className="flex justify-between">
                <p className="font-semibold text-md">
                  What features make Maxwell stand out from other social apps?
                </p>
                <FaPlus className="text-2xl" />
              </div>
            </div>
            <div className="lg:w-[520px] space-y-4 w-[95%] mx-auto">
              <div className="flex justify-between">
                <p className="font-semibold text-md">
                  Does Maxwell provide information on charging costs?{" "}
                </p>
                <FaPlus className="text-2xl" />
              </div>
            </div>
            <div className="lg:w-[520px] space-y-4 w-[95%] mx-auto">
              <div className="flex justify-between">
                <p className="font-semibold text-md">
                  Can I find other EV owners to connect with on the app?
                </p>
                <FaPlus className="text-2xl" />
              </div>
            </div>
            <div className="lg:w-[520px] space-y-4 w-[95%] mx-auto">
              <div className="flex justify-between">
                <p className="font-semibold text-md">
                  What types of payment methods does Maxwell support?
                </p>
                <FaPlus className="text-2xl" />
              </div>
            </div>
            <div className="lg:w-[520px] space-y-4 w-[95%] mx-auto">
              <div className="flex justify-between">
                <p className="font-semibold text-md">
                  Is my data secure while using Maxwell?
                </p>
                <FaPlus className="text-2xl" />
              </div>
            </div>
            <div className="lg:w-[520px] space-y-4 w-[95%] mx-auto">
              <div className="flex justify-between">
                <p className="font-semibold text-md">
                  How can I provide feedback or report an issue with the app?
                </p>
                <FaPlus className="text-2xl" />
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <Image
              src="/Frame 1686561723.png"
              alt="charges"
              width={500}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
