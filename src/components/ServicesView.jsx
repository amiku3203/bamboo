import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const ServiceView = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Roller Blinds</h1>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="relative w-full md:w-1/2 h-64">
            <img
              src="your-image-url.jpg"
              alt="Roller Blinds"
              className="w-full h-full object-cover rounded-md shadow-lg transform transition duration-500 hover:scale-105"
            />
            <div className="absolute left-4 bottom-4 space-y-2">
              <a href="tel:+1234567890" className="text-3xl text-blue-500 transform transition duration-300 hover:scale-110">
                <FaPhoneAlt />
              </a>
              <a href="https://wa.me/1234567890" className="text-3xl text-green-500 transform transition duration-300 hover:scale-110">
                <FaWhatsapp />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
            <p className="text-lg leading-relaxed">
              A <span className="font-bold">Roller blind</span> is a single piece of fabric which wraps around a casing and fits into the top of your window frame, either within or outside of your window recess. The <span className="font-bold">Roller blind</span> is operated by a pull cord attached to the bottom of the blind or by a side-winding chain mechanism attached to the blind casing. Our Company provides a complete solution for all Chick marker services like Roller Blinds, Vanseyan Chick, Fancy Chick Maker, Window Curtain, Brid Net, PVC Blind, Zebra Blinds all over Delhi NCR and Noida. We are the leading company of Chick maker in Noida to provide you the best services at a reasonable price.
            </p>
            <a href="your-enquiry-link" className="inline-block px-8 py-4 bg-green-500 text-white font-semibold rounded-md shadow-lg transform transition duration-300 hover:bg-green-600 hover:scale-105">
              Enquiry Now →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default  ServiceView;
