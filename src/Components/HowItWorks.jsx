import Image from "next/image";
export default function HowItWorks() {
  return (
    <section id="howitworks" className="bg-[#011929] text-white w-[100vw] text-md">
      <div className="container md:text-md flex flex-col md:flex-row space-x-30 scroll-smooth">
        <div className="md:flex space-y-6  md:mt-12">
          <p className="text-[#EB8F02] font-semibold my-6">How It Works</p>
          <div className="hidden md:block mt-6">
            <Image src="/maxwell.png" alt="maxwell" width={200} height={400} />
          </div>
        </div>
        <div className=" md:w-[600px] md:mt-12 space-y-8">
          <h3 className="w-[100%] text-xl md:text-4xl font-bold ">
            Finding a Charging Station is Easy, Whether in the City or
            Countryside.
          </h3>
          <p className="text-sm  w-[100%]">
            Stop wasting time searching for charging stations! Our service
            guarantees an effortless experience, allowing you to find charging
            stations easily. With our app, you'll quickly discover nearby
            options, keeping you powered up for anything. Embrace worry-free
            travel and take charge of your journeys!{" "}
          </p>

          <div className="flex flex-col md:flex-row justify-between space-x-3 text-sm">
            <div className="flex flex-col space-y-3">
              <div className="bg-[#1D2939] rounded-3xl items-center flex flex-row
              justify-center w-[80vw] h-80 md:w-100 md:h-100 relative mx-auto md:mx-0">
                <Image src="/iPhone 17.png" alt="iPhone" fill />
              </div>
              <p className="text-[#344054] text-md">Tracking</p>
              <p className="font-bold text-xl md:text-2xl  mb-4">
                Monitor Your Charging Progress Instantly
              </p>
            </div>
            <div className="flex flex-col space-y-3 ">
              <div className="bg-[#1D2939] rounded-3xl items-center flex justify-center md:w-100 md:h-100 h-80 w-[80vw] relative mx-auto">
                <Image src="/iPhone 16.png" alt="iPhone" fill />
              </div>
              <p className="text-[#344054] text-md">OPEN MAPS</p>
              <p className="font-bold text-xl md:text-2xl ">
                Locate Charging Stations Anytime, Anywhere
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between space-x-3 text-sm">
            <div className="flex flex-col space-y-2 mb-2">
              <div className="bg-[#1D2939] rounded-3xl items-center flex justify-center md:w-100 md:h-100 h-80 w-[80vw] relative mx-auto">
                <Image src="/iPhone 15 Pro.png" alt="iPhone" fill />
              </div>
              <p className="text-[#344054] text-md">direction</p>
              <p className="font-bold text-xl md:text-2xl ">
                Effortless Route Planning with Charging Stops Included
              </p>
            </div>
            <div className="flex flex-col space-y-2 ">
              <div className="bg-[#1D2939] rounded-3xl items-center flex justify-center md:w-100 md:h-100 h-80 w-[80vw] relative mx-auto">
                <Image src="/iPhone 14.png" alt="iPhone" fill />
              </div>
              <p className="text-[#344054] text-md">community </p>
              <p className="font-bold text-xl md:text-2xl md:">
                Connect with Like-Minded Users, Vote, and Earn Rewards
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between space-x-3 text-sm">
            <div className="flex flex-col space-y-2">
            <div className="bg-[#1D2939] rounded-3xl items-center flex justify-center md:w-100 md:h-100 h-80 w-[80vw] relative mx-auto">
                <Image src="/iPhone 14 Pro.png" alt="iPhone" fill />
              </div>
              <p className="text-[#344054] text-md">REWARDS</p>
              <p className="font-bold text-xl md:text-2xl md:">
                Keep Track of All Your Activities and Rewards in One Place
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="bg-[#1D2939] rounded-3xl items-center flex justify-center md:w-100 md:h-100 h-80 w-[80vw] relative mx-auto">
                <Image src="/iPhone 12 Pro.png" alt="iPhone" fill />
              </div>
              <p className="text-[#344054] text-md">connectivity</p>
              <p className="font-bold text-xl w-[100%] md:text-2xl md:">
                Link Your Vehicle for Comprehensive Power Reports
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-col space-y-4">
        <h2 className="font-bold text-xl  md:text-3xl md:w-[428px]">
          Charging Your Vehicle
        </h2>
        <p className="text-sm w-[100%] text-[#D0D5DD] lg:w-[525px]">
          Follow these three easy steps to effortlessly connect your vehicle to
          our charging station for a smooth and efficient experience.
        </p>
      </div>
      <div className="container flex flex-col md:flex-row justify-between space-y-6 ">
        <div className="border-[#344054] border w-[80vw] h-80 p-6 md:w-90 lg:h-[370px] flex flex-col rounded-2xl md:mb-12 justify-center items-center mx-auto">
          <div className=" w-full h-full relative ">
            <Image src="/how-to-charge-01.png" alt="charge" fill />
          </div>
          <p className="font-semibold">connect your charger</p>
        </div>
        <div className="border-[#344054] border p-6 md:w-90 md:h-[370px] flex justify-center items-center flex-col rounded-2xl mb-12 w-[80vw] h-80 mx-auto">
          <div className="w-full h-full relative ">
            <Image src="/how-to-charge-02.png" alt="charge" fill />
          </div>

          <p className="font-semibold">Press to Begin Charging</p>
          <p className="text-sm text-[#D0D5DD]">
            Using the Maxwell app, RFID, or your credit card.
          </p>
        </div>
        <div className="border-[#344054] border p-6 md:w-90 md:h-[370px] flex justify-center items-center flex-col rounded-2xl mb-12 w-[80vw] h-80 mx-auto">
            <div className="w-full h-full relative ">
            <Image
            src="/how-to-charge-03.png"
            alt="charge"
            fill
          />
            </div>
         
          <p className="font-semibold">Power Up and Hit the Road</p>
          <p className="text-sm text-[#D0D5DD]">
            Your next adventure is just around the corner.
          </p>
        </div>
      </div>
    </section>
  );
}
