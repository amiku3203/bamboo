import React from 'react';
import { FaArrowRight, FaPhoneAlt } from 'react-icons/fa';
 
// import backgroundImage from 'https://www.hotamchickmaker.com/images/bg.jpg'; // Replace with the correct path to your background image

const ContactForm = () => {
  return (
    <>
     <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${"https://www.hotamchickmaker.com/images/bg.jpg"})` }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-4xl w-full mx-4">
        <h2 className="text-3xl font-bold text-center mb-6">Get In Touch With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            placeholder="Name *"
            className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Email *"
            className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="Mobile No. *"
            className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="Subject *"
            className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <textarea
          placeholder="Write Your Message *"
          className="border p-3 rounded w-full h-32 focus:outline-none focus:ring-2 focus:ring-green-500 mb-6"
        />
        <div className="text-center">
          <button className="flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-700 transition duration-300 mx-auto">
            Send Message <FaArrowRight className="ml-2" />
          </button>
        </div>
        <div className="text-center mt-6">
          <p className="text-gray-700 mb-2">OR IF YOU NEED QUICK ASSISTANCE</p>
          <p className="text-xl font-bold">
            Call Us 24/7 For Customer Support At{' '}
            <a href="tel:+919675533168" className="text-green-500 flex items-center justify-center">
              <FaPhoneAlt className="mr-2" /> +91-9675533168
            </a>
          </p>
        </div>
      </div>
    </div> 
   
    </>
   
  );
};

export default ContactForm;
