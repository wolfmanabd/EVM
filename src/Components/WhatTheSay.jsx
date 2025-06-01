import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function WhatTheySay() {
    return (
        <section className="bg-[#011929]">
            <div className="container space-y-6">
                <p className="text-sm text-[#EB8F02] mt-6">What They Say About Us</p>
                <div className="flex  flex-col md:flex-row space-y-4 justify-between text-white">
                    <h2 className=" font-bold md:text-5xl md:w-[500px]">Discover more and dive into the details of Maxwell.</h2>
                    <div className="text-sm md:w-[500px] flex flex-col space-y-8">
                        <p className="text-sm mb-4">Here are testimonials from customers who are thrilled with the products and services we've delivered.
                            </p>
                            <div className=" hidden md:flex justify-end space-x-8 mt-6 text-xl">
                                <span className="bg-[#FDFDFD33] w-10 h-10 p-1 flex items-center justify-center rounded-full">
                                    <FaArrowLeft />
                                </span>
                                <span className="bg-[#FDFDFD33] w-10 h-10 p-1 flex items-center justify-center rounded-full">
                                    <FaArrowRight />
                                </span>
                            </div>
                     </div>
                </div>
                <div className="flex flex-col md:flex-row justify-around space-y-6 mx-auto my-12">
                    <div className="flex flex-col space-y-6 text-white">
                        <div className="w-80 h-80 relative ml-10 md:m-0">
                            <Image 
                                src="/BG.png"
                                alt="bg"
                               fill
                            />
                        </div>
                        <div className="flex flex-col mt-4 space-y-3 ">
                        <div>
                                <Image 
                                src='/Frame 1686561740.png'
                                alt="allstar"
                                width={200}
                                height={200}
                                />
                            </div>
                            <p className="text-[#98A2B3] text-sm md:w-[312px]">Here are testimonials from customers who are thrilled with the products and services we've delivered.</p>
                            <h5>David Lee</h5>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4 text-white">
                        <div className="w-80 h-80 relative ml-10 md:m-0">
                            <Image 
                                src="/BG (1).png"
                                alt="bg"
                                fill
                            />
                        </div>
                        <div className="flex flex-col mt-4 space-y-3">
                        <div>
                                <Image 
                                src='/Frame 1686561740.png'
                                alt="allstar"
                                width={200}
                                height={200}
                                />
                            </div>
                            <p className="text-[#98A2B3] text-sm md:w-[312px]">Maxwell has changed how we manage our electric vehicle fleet. The app helps find charging stations, monitor times, and plan routes. Our drivers appreciate the user interface, reducing downtime.</p>
                            <h5>Emily Johnson</h5>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}