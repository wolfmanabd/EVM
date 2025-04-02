import Image from "next/image"
import { FaCheck } from "react-icons/fa";
import { FiDownloadCloud } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { GoCpu } from "react-icons/go";
import { TbBatteryCharging } from "react-icons/tb";
import { TbChargingPile } from "react-icons/tb";
export default function whoWeAre(){
    return (
        <section className="container max-h-[2500px] ">
            <div className="flex flex-row justify-between text-start text-sm mt-8">
                <div className="w-[520px] space-y-4">
                    <p className="text-[#EB8F02]">Who We Are</p>
                    <h1 className="text-4xl font-bold">We Provide a Variety of Charging Solutions Customized to Fit your Unique Business Model.</h1>
                    <p className="text-[#344054]">We are dedicated to providing the necessary infrastructure and expertise to support the transition to electric mobility, ensuring our customers are satisfied and their vehicles remain fully operational.</p>
                    <div className="text-sm w-[678px] space-y-3">
                        <div className="flex p-1 items-center">
                        <span className="bg-[#FEF7ED] p-2 rounded-full"><FaCheck className="text-[#EB8F02]" /></span>
                        <p className="ml-6"> Enjoy a warranty of 2 to 3 years, with the option to extend it up to 5 years.</p>
                        </div>
                        <div className="flex p-1 items-center">
                            <span className="bg-[#FEF7ED] p-2 rounded-full"><FaCheck className="text-[#EB8F02]" /></span>
                            <p className="ml-6">Track your charging activity and earn rewards while you charge.</p>
                        </div>
                        <div className="flex p-1 items-center">
                            <span className="bg-[#FEF7ED] p-2 rounded-full"><FaCheck className="text-[#EB8F02]" /></span>
                            <p className="ml-6">Access to hundreds of thousands of charging locations.</p>
                        </div>
                        <div className="flex p-1 items-center">
                            <span className="bg-[#FEF7ED] p-2 rounded-full"><FaCheck className="text-[#EB8F02]" /></span>
                            <p className="ml-6">Participate, engage, and stand a chance to win gift cards in our community video contests!</p>
                        </div>
                    </div>
                </div>
                <div className="w-[440px]">
                    <div className="flex text-sm justify-between">
                        <div className="w-[144px] spa">
                            <h3 className="font-bold text-3xl">7.5M+</h3>
                            <p>Charging sessions have been successfully initiated.</p>
                        </div>
                        <div className="w-[120px]">
                            <h3 className="font-bold text-3xl">13K+</h3>
                            <p>Charging sessions currently active in the network.</p>
                        </div>
                        <div className="w-[140px]">
                            <h3 className="font-bold text-3xl">82%</h3>
                            <p>Sustainable Charging Stations for a Greener Future</p>
                        </div>
                    </div>
                    <div className="w-[183px] mt-12 flex items-center text-white text-center p-3 rounded-4xl font-semibold justify-around text-lg bg-linear-to-r from-[#18ACFE] to-[#0163E0]">
                        <FiDownloadCloud />
                        <button>Download Now</button>
                    </div>
                </div>

            </div>
            <div className="container flex flex-col my-12 items-center justify-center">
                <Image 
                    src="/Image Holder.png"
                    alt="phone"
                    width={1000}
                    height={700}

                />
            </div>
            <div className="flex justify-between">
            <div className="w-[520px]">
                    <h2 className="font-bold text-4xl">Electric Vehicle Charging Options Tailored for Every Business and Driver</h2>
                    
                </div>
                <div className="w-[440px]">
                    <div className="flex text-sm">
                        <p>For over ten years, we’ve been pioneering the fueling network of the future. We’ve established more charging locations than any other provider, and our customers rely on us for their charging needs throughout the day.</p>
                    </div>
                    <div className="w-[133px] mt-6 flex items-center text-white text-center p-3 rounded-4xl  justify-around text-md bg-linear-to-r from-[#18ACFE] to-[#0163E0]">
                        <CiMail className="text-xl" />
                        <button>Contact Us</button>
                    </div>
                </div>
            </div>
            <div className="  h-[441px]">
                <Image 
                    src="/streets-map.png"
                    alt="map"
                    width={1400}
                    height={440}

                />
            </div>
            <div className="flex justify-between space-x-4 ">
                <div className="flex flex-col w-[350px] items-start text-sm bg-[#F2F4F7] space-y-4 p-6 rounded-2xl h-[256px] ">
                    <div className="bg-[#EB8F024D] rounded-full w-10 h-10 p-3 flex items-center justify-center">
                        <span className="bg-[#EB8F02] rounded-full p-1 w-5 h-5 flex items-center justify-center text-lg text-white">
                            <GoCpu />
                        </span>
                    </div>
                    <h4 className="text-2xl font-semibold">Commercial and Business Solutions</h4>
                    <p>We provide a comprehensive array of deployment options, including single and dual-port configurations for all vehicles, as well as dual-port setups with e-bike charging and rapid dual-port solutions tailored for every user.</p>
                </div>
                <div className="flex flex-col w-[350px] items-start text-sm bg-[#F2F4F7] space-y-4 p-6 rounded-2xl h-[256px] ">
                    <div className="bg-[#EB8F024D] rounded-full w-10 h-10 p-3 flex items-center justify-center">
                        <span className="bg-[#EB8F02] rounded-full p-1 w-5 h-5 flex items-center justify-center text-lg text-white">
                            <TbBatteryCharging />
                        </span>
                    </div>
                    <h4 className="text-2xl font-semibold">Automakers and Fleet Solutions</h4>
                    <p>As the leading provider in fleet electrification, we deliver charging solutions for the largest rideshare services, food delivery companies, and electric vehicle fleet managers across the nation.</p>
                </div>
                <div className="flex flex-col w-[350px] items-start text-sm bg-[#F2F4F7] space-y-4 p-6 rounded-2xl h-[256px] ">
                    <div className="bg-[#EB8F024D] rounded-full w-10 h-10 flex items-center justify-center">
                        <span className="bg-[#EB8F02] rounded-full p-1 w-5 h-5 flex items-center justify-center text-lg text-white">
                            <TbChargingPile />
                        </span>
                    </div>
                    <h4 className="text-2xl font-semibold">Personal and Driver Use</h4>
                    <p>By creating an account, you gain access to a wider selection of charging options, enjoy zero roaming fees, and experience less hassle while using our app on the go.</p>
                </div>
                </div>
                <div className="flex flex-wrap justify-between align-middle space-x-12 items-center h-[170px] w-full mt-24 mb-12">
                    <div>
                        <Image
                        src="/image 139.png"
                        alt="partners"
                        width={150}
                        height={100}
                         />
                    </div>
                    <div>
                        <Image
                        src="/image 131.png"
                        alt="partners"
                        width={150}
                        height={70}
                         />
                    </div>
                    <div>
                        <Image
                        src="/logo.png"
                        alt="partners"
                        width={150}
                        height={100}
                         />
                    </div>
                    <div>
                        <Image
                        src="/image 137.png"
                        alt="partners"
                        width={150}
                        height={100}
                         />
                    </div>
                    <div>
                        <Image
                        src="/image 140.png"
                        alt="partners"
                        width={150}
                        height={100}
                         />
                    </div>
                    <div>
                        <Image
                        src="/image 135.png"
                        alt="partners"
                        width={150}
                        height={100}
                         />
                    </div>
                    <div>
                        <Image
                        src="/image 138.png"
                        alt="partners"
                        width={150}
                        height={100}
                         />
                    </div>
                    <div>
                        <Image
                        src="/image 136.png"
                        alt="partners"
                        width={150}
                        height={100}
                         />
                    </div>
                    <div>
                        <Image
                        src="/image 132.png"
                        alt="partners"
                        width={150}
                        height={100}
                         />
                    </div>
                    <div>
                        <Image
                        src="/image 133.png"
                        alt="partners"
                        width={150}
                        height={100}
                         />
                    </div>
            </div>
        </section>
    )
}