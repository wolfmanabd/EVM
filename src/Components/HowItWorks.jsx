import Image from "next/image"
export default function HowItWorks() {
    return (
        <section className=" bg-[#011929] text-white">
            <div className="container flex justify-between p-24">
                <div className="flex flex-col space-y-6  w-[420px] mt-12">
                    <p className="text-[#EB8F02] text-sm block justify-between">How It Works</p>
                    <div>
                        <Image 
                            src="/maxwell.png"
                            alt="maxwell"
                            width={200}
                            height={400}
                        />
                    </div>
                </div>
                <div className="w-[600px] mt-12 space-y-8">
                    <h3 className="text-4xl font-bold w-[550]">Finding a Charging Station is Easy, Whether in the City or Countryside.</h3>
                    <p className="text-sm">Stop wasting time searching for charging stations! Our service guarantees an effortless experience, allowing you to find charging stations easily. With our app, you'll quickly discover nearby options, keeping you powered up for anything. Embrace worry-free travel and take charge of your journeys! </p>

                    <div className="flex w-[600px] justify-between space-x-3 text-sm">
                        <div className="flex flex-col space-y-3 w-[370px]">
                            <div className="bg-[#1D2939] rounded-3xl items-center flex justify-center h-[280px] overflow-hidden">
                                <Image
                                    src="/iPhone 17.png"
                                    alt="iPhone"
                                    width={300}
                                    height={300}
                                 />
                            </div>
                            <p className="text-[#344054] text-md">Tracking</p>
                            <p className="font-bold text-2xl w-[280px]">Monitor Your Charging Progress Instantly</p>

                        </div>
                        <div className="flex flex-col space-y-1 w-[370px]">
                            <div className="bg-[#1D2939] rounded-3xl items-center flex justify-center h-[280px] overflow-hidden">
                                <Image
                                    src="/iPhone 16.png"
                                    alt="iPhone"
                                    width={300}
                                    height={300}
                                 />
                            </div>
                            <p className="text-[#344054] text-md">OPEN MAPS</p>
                            <p className="font-bold text-2xl w-[280px]">Locate Charging Stations Anytime, Anywhere</p>

                        </div>
                    </div>
                    <div className="flex w-[600px] justify-between space-x-3 text-sm">
                        <div className="flex flex-col space-y-3 w-[370px]">
                            <div className="bg-[#1D2939] rounded-3xl items-center flex justify-center h-[280px] overflow-hidden">
                                <Image
                                    src="/iPhone 15 Pro.png"
                                    alt="iPhone"
                                    width={300}
                                    height={300}
                                 />
                            </div>
                            <p className="text-[#344054] text-md">direction</p>
                            <p className="font-bold text-2xl w-[280px]">Effortless Route Planning with Charging Stops Included</p>

                        </div>
                        <div className="flex flex-col space-y-3 w-[370px]">
                            <div className="bg-[#1D2939] rounded-3xl items-center flex justify-center h-[280px] overflow-hidden">
                                <Image
                                    src="/iPhone 14.png"
                                    alt="iPhone"
                                    width={300}
                                    height={300}
                                 />
                            </div>
                            <p className="text-[#344054] text-md">community </p>
                            <p className="font-bold text-2xl w-[280px]">Connect with Like-Minded Users, Vote, and Earn Rewards</p>

                        </div>
                    </div>
                    <div className="flex w-[600px] justify-between space-x-3 text-sm">
                        <div className="flex flex-col space-y-3 w-[370px]">
                            <div className="bg-[#1D2939] rounded-3xl items-center flex justify-center h-[280px] overflow-hidden">
                                <Image
                                    src="/iPhone 14 Pro.png"
                                    alt="iPhone"
                                    width={300}
                                    height={300}
                                 />
                            </div>
                            <p className="text-[#344054] text-md">rewards</p>
                            <p className="font-bold text-2xl w-[280px]">Keep Track of All Your Activities and Rewards in One Place</p>

                        </div>
                        <div className="flex flex-col space-y-3 w-[370px]">
                            <div className="bg-[#1D2939] rounded-3xl items-center flex justify-center h-[280px] overflow-hidden">
                                <Image
                                    src="/iPhone 12 Pro.png"
                                    alt="iPhone"
                                    width={300}
                                    height={300}
                                 />
                            </div>
                            <p className="text-[#344054] text-md">connectivity</p>
                            <p className="font-bold text-2xl w-[280px]">Link Your Vehicle for Comprehensive Power Reports</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className=" container flex justify-between">
                <h2 className="font-bold text-3xl w-[428px]">Charging Your Vehicle</h2>
                <p className="text-sm text-[#D0D5DD] w-[525px]">Follow these three easy steps to effortlessly connect your vehicle to our charging station for a smooth and efficient experience.</p>
            </div>
            <div className="container flex space-x-6 items-center ">
                <div className="border-[#344054] border p-6 w-[412px] h-[370px] flex justify-center items-center flex-col rounded-2xl mb-12">
                    <Image 
                    src="/how-to-charge-01.png"
                    alt="charge"
                    width={220}
                    height={150}
                    />
                    <p className="font-semibold">Connect the charger.</p>
                </div>
                <div className="border-[#344054] border p-6 w-[412px] h-[370px] flex justify-center items-center flex-col rounded-2xl mb-12">
                <Image 
                    src="/how-to-charge-02.png"
                    alt="charge"
                    width={220}
                    height={150}
                    />
                    <p className="font-semibold">Press to Begin Charging</p>
                    <p className="text-sm text-[#D0D5DD]">Using the Maxwell app, RFID, or your credit card.</p>
                </div>
                <div className="border-[#344054] border p-6 w-[412px] h-[370px] flex justify-center items-center flex-col rounded-2xl mb-12">
                <Image 
                    src="/how-to-charge-03.png"
                    alt="charge"
                    width={220}
                    height={150}
                    />
                    <p className="font-semibold">Power Up and Hit the Road</p>
                    <p className="text-sm text-[#D0D5DD]">Your next adventure is just around the corner.</p>
                </div>
            </div>
        </section>
    )
}