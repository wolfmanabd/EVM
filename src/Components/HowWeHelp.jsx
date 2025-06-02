import Image from "next/image"
import { FaCheck } from "react-icons/fa";

export default function HowWeHelp() {
    return (
        <section id="howwehelp">
            <div className="container space-y-18">
                <p className="my-8 text-md font-semibold text-[#EB8F02]">How We Help</p>
                <div className="flex flex-col">
                    <h2 className="font-bold text-xl md:w-[580px]">We Simplify the Transition to Electric Vehicles for Fleets.</h2>
                    <p className="text-sm md:w-[484px]">Since 2019, we've led the way in creating EV charging solutions that work with all electric vehicle brands and models. Our software platform is designed to empower a wide array of organizations—from car manufacturers to workplaces and diverse fleet types—helping them streamline their EV charging operations and elevate the driver experience.</p>
                </div>
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="md:w-[570px] rounded-lg w-90 h-60 md:h-80 relative">
                        <Image 
                        className="rounded-2xl"
                        src="/image 128.png"
                        alt="charge"
                       fill
                        />
                    </div>
                    <div className="md:w-[552px] text-sm space-y-4">
                        <h1 className="font-bold text-xl md:text-4xl">Versatile Solutions for Every Need.</h1>
                        <p className="font-bold text-lg">Customize your EV charging experience.</p>
                        <div className="space-y-4">
                            <div className="flex justify-between space-x-4"><span className="bg-[#FEF7ED] p-2 rounded-full flex items-center justify-center"><FaCheck className="text-[#EB8F02]" /></span><li className="list-none">Seamlessly establish, oversee, and track your charging operations with our cutting-edge, open software platform.</li>
                            </div>
                            <div className="flex  space-x-4"><span className="bg-[#FEF7ED] p-2 rounded-full flex items-center justify-center"><FaCheck className="text-[#EB8F02]" /></span><li className="list-none">Power your preferred hardware or opt for our adaptable charging stations.</li>
                            </div>
                            <div className="flex justify-between space-x-4">
                            <span className="bg-[#FEF7ED] p-2 rounded-full flex items-center justify-center"><FaCheck className="text-[#EB8F02]" /></span><li className="list-none">Draw in drivers to your charging stations while ensuring a dependable and consistent experience.</li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row  justify-between">
                <div className="md:w-[552px] text-sm space-y-4">
                        <h1 className="font-bold text-xl md:text-4xl">Fostering Customer Success.</h1>
                        <p className="font-bold text-lg">We collaborate with you and adapt as you expand.</p>
                        <div className="space-y-4">
                            <div className="flex justify-between space-x-4"><span className="bg-[#FEF7ED] p-2 rounded-full flex items-center justify-center"><FaCheck className="text-[#EB8F02]" /></span><li className="list-none">Lower operational costs while maximizing station availability and keeping your vehicles on the road.</li>
                            </div>
                            <div className="flex  space-x-4"><span className="bg-[#FEF7ED] p-2 rounded-full flex items-center justify-center"><FaCheck className="text-[#EB8F02]" /></span><li className="list-none">Boost efficiency with our proactive management tools and dedicated support.</li>
                            </div>
                            <div className="flex justify-between space-x-4">
                            <span className="bg-[#FEF7ED] p-2 rounded-full flex items-center justify-center"><FaCheck className="text-[#EB8F02]" /></span><li className="list-none">Meet your current and future operational demands with tailored software, hardware, and services.</li>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4 w-90 h-60 md:h-80 md:w-150 relative rounded-lg mt-6 order-first md:order-last">
                        <Image 
                        className="rounded-2xl"
                        src="/unsplash_rLTjEVGXNBA.png"
                        alt="charge"
                        fill
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row  justify-between mb-10">
                    <div className="w-90 h-60 md:h-80 md:w-150 relative rounded-lg">
                            <Image 
                            className="rounded-2xl"
                            src="/unsplash_ImGWxDWDGP4.png"
                            alt="charge"
                            width={500}
                            height={300}
                            />
                        </div>
                        <div className="md:w-[552px] text-sm space-y-4">
                            <h1 className="font-bold text-xl md:text-4xl">Elevated Driver Experience.</h1>
                            <p className="font-bold text-lg">Charge wherever your journey takes you.</p>
                            <div className="space-y-4">
                                <div className="flex space-x-4"><span className="bg-[#FEF7ED] p-2 rounded-full flex items-center justify-center"><FaCheck className="text-[#EB8F02]" /></span><li className="list-none">Easily find, initiate, and pay for charging using the highly-rated Maxwell app.</li>
                                </div>
                                <div className="flex  space-x-4"><span className="bg-[#FEF7ED] p-2 rounded-full flex items-center justify-center"><FaCheck className="text-[#EB8F02]" /></span><li className="list-none">Connect to our network through your preferred partner experience, including Apple CarPlay, Android Auto, or your vehicle's built-in infotainment system.</li>
                                </div>
                                <div className="flex justify-between space-x-4">
                                <span className="bg-[#FEF7ED] p-2 rounded-full flex items-center justify-center"><FaCheck className="text-[#EB8F02]" /></span><li className="list-none">Charge at countless locations across our network and with our roaming partners.</li>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}