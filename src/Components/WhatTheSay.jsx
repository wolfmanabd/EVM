import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function WhatTheySay() {
    return (
        <section className="bg-[#011929]">
            <div className="container space-y-6">
                <p className="text-sm text-[#EB8F02]">What They Say About Us</p>
                <div className="flex justify-between text-white">
                    <h2 className=" font-bold text-5xl w-[500px]">Discover more and dive into the details of Maxwell.</h2>
                    <div className="text-sm w-[500px] flex flex-col space-y-8">
                        <p className="text-sm mb-4">Here are testimonials from customers who are thrilled with the products and services we've delivered.
                            </p>
                            <div className=" flex justify-end space-x-8 mt-6 text-xl">
                                <span className="bg-[#FDFDFD33] w-10 h-10 p-1 flex items-center justify-center rounded-full">
                                    <FaArrowLeft />
                                </span>
                                <span className="bg-[#FDFDFD33] w-10 h-10 p-1 flex items-center justify-center rounded-full">
                                    <FaArrowRight />
                                </span>
                            </div>
                     </div>
                </div>
                <div className="flex justify-between my-12">
                    <div className="flex  w-[708px] space-x-4 text-white">
                        <div className="w-[230px]">
                            <Image 
                                src="/BG.png"
                                alt="bg"
                                width={300}
                                height={200}
                            />
                        </div>
                        <div className="flex flex-col justify-around">
                            <div>
                                <Image 
                                src='/Frame 1686561740.png'
                                alt="allstar"
                                width={200}
                                height={200}
                                />
                            </div>
                            <p className="text-[#98A2B3] text-sm w-[312px]">Here are testimonials from customers who are thrilled with the products and services we've delivered.</p>
                            <h5>David Lee</h5>
                        </div>
                    </div>
                    <div className="flex w-[708px] space-x-4 text-white">
                        <div className="w-[230px] h-[230px]">
                            <Image 
                                src="/BG (1).png"
                                alt="bg"
                                width={300}
                                height={200}
                            />
                        </div>
                        <div className="flex flex-col justify-around">
                        <div>
                                <Image 
                                src='/Frame 1686561740.png'
                                alt="allstar"
                                width={200}
                                height={200}
                                />
                            </div>
                            <p className="text-[#98A2B3] text-sm w-[312px]">Maxwell has changed how we manage our electric vehicle fleet. The app helps find charging stations, monitor times, and plan routes. Our drivers appreciate the user interface, reducing downtime.</p>
                            <h5>Emily Johnson</h5>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}