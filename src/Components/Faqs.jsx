"use client"

import Image from "next/image";
import { GoDash } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";


import { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="">
    <button
      onClick={onClick}
      className="w-full text-left p-4  hover:bg-gray-200 flex items-center justify-between focus:outline-none"
    >
      <h2 className="text-lg font-medium">{title}</h2>
      {isOpen ? <GoDash className="w-5 h-5" /> : <FaPlus className="w-5 h-5" />}
    </button>
    {isOpen && <div className="p-4 bg-white text-gray-700">{content}</div>}
  </div>
);

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      title: 'What is Maxwell',
      content: `Maxwell is a social app designed for electric vehicle (EV)
              owners, providing them with information about nearby charging
              stations, real-time availability, and the ability to connect
              with other EV enthusiasts.',`
    },
    {
      title: 'How does Maxwell improve the EV charging experience?',
      content: `Maxwell enhances the EV charging experience by offering users
              real-time updates on charging station availability, personalized
              recommendations, and a community platform for sharing tips and
              experiences.',`
    },
    {
      title: 'What features make Maxwell stand out from other social apps?',
      content: '',
    },
    {
      title: 'Does Maxwell provide information on charging costs?',
      content: '',
    },
    {
      title: 'Can I find other EV owners to connect with on the app?',
      content: '',
    },
    {
      title: 'What types of payment methods does Maxwell support?',
      content: '',
    },
    {
      title: 'Is my data secure while using Maxwell?',
      content: '',
    },
    {
      title: 'How can I provide feedback or report an issue with the app?',
      content: '',
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs">
    <div className=" container">
      <p className="text-sm text-[#EB8F02] md:my-12 mt-6">FAQs</p>
      <div className="flex flex-col md:flex-row justify-between mt-4">
        <div className="md:w-[650px] space-y-12 text-[#344054] text-md">
          <h2 className="text-xl lg:text-5xl font-bold">
            More Than 1500 Charging Stations & Growing Big
          </h2>
            <div className="max-w-3xl mt-6 space-y-6">
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  title={item.title}
                  content={item.content}
                  isOpen={openIndex === index}
                  onClick={() => toggle(index)}
                />
              ))}
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
