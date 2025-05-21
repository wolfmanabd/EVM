import Image from "next/image";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { TbPhoneRinging } from "react-icons/tb";
export default function Footer() {
  return (
    <footer className="bg-[#101828]">
      <div className="container text-white">
        <div className="flex flex-col justify-between mt-12 space-y-6">
          <div className="w-[234px] flex flex-col justify-between">
            <div>
              <Image
                src="/Maxwell Logo.png"
                alt="maxwel"
                width={300}
                height={300}
              />
            </div>
            <div className="flex space-x-3 mt-4 text-white">
              <span className="bg-[#FDFDFD33] w-10 h-10 p-1 flex items-center justify-center rounded-full">
                <FiFacebook />
              </span>
              <span className="bg-[#FDFDFD33] w-10 h-10 p-1 flex items-center justify-center rounded-full">
                <FiTwitter />
              </span>
              <span className="bg-[#FDFDFD33] w-10 h-10 p-1 flex items-center justify-center rounded-full">
                <FiInstagram />
              </span>
              <span className="bg-[#FDFDFD33] w-10 h-10 p-1 flex items-center justify-center rounded-full">
                <SlSocialLinkedin />
              </span>
            </div>
          </div>
          <div className="flex flex-wrap space-x-8 w-[643px] text-sm">
            <div className="flex flex-col w-[111px] space-y-3">
              <p className="text-xl">Company</p>
              <p>contact</p>
              <p>Blog</p>
              <p>FAQs</p>
            </div>
            <div className="flex flex-col w-[111px] space-y-3">
              <p className="text-xl">Features</p>
              <p>How it Works</p>
              <p>Who We Are</p>
              <p>How We Help</p>
            </div>
            <div className="flex flex-col lg:w-[285px] text-[#98A2B3] space-y-6">
              <div className="flex space-x-3">
                <CiLocationOn className="text-xl" />
                <p>Learning park 366 jerry Underpass 08966 Virgina, US</p>
              </div>
              <div className="flex space-x-3">
                <CiMail className="text-xl" />
                <p>hello@maxwell.com</p>
              </div>
              <div className="flex space-x-3">
                <TbPhoneRinging className="text-xl" />
                <p>+1 (903) 326 7104</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-8 mx-auto container w-full">
          <Image src="/MAXWELL H.png" alt="maxwelh" width={500} height={250} />
        </div>
        <div className="border-[#667085] border mb-6"></div>
        <div className="flex flex-col text-center justify-between text-sm text-[#667085]">
          <p>Copyright Maxwell Co. © 2024</p>
          <p>Privacy & Policy</p>
        </div>
      </div>
    </footer>
  );
}
