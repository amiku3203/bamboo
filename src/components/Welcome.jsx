import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
 
 
const BambooChickMaker = () => {
  return (
    <>
    <div data-aos="fade-up"   className="container mx-auto p-6 shake">
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:w-1/2">
          <img
            className="object-cover w-full h-full"
            src="https://www.hotamchickmaker.com/static_files/about-us.jpg"
            alt="Bamboo Chick Maker"
          />
        </div>
        <div className="md:w-1/2 p-6">
          <h2 className="text-2xl font-bold mb-4">Welcome To Bamboo Chick Maker</h2>
          <p className="text-gray-700 mb-4">
            Our Company provides a complete solution for all Chick marker services like Roller Blinds, Vanseyan Chick, Fancy Chick Maker, Window Curtain, Brid Net, PVC Blind, Zebra Blinds all over Delhi NCR and Noida. We are the leading company of Chick maker in Noida to provide you the best services at a reasonable price. These window blinds are ideal protection from ultraviolet rays and ensures the security. These window blinds are designed with diverse dimensions and perfect finish. Owing to attributes like enhanced service life and optimized design, these fabrics are widely accepted by our customers.
          </p>
          <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition duration-300">
            Read More <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
    {/* <ContactForm /> */}
    </>
  );
};

export default BambooChickMaker;
