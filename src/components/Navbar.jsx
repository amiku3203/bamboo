import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';
import { FiPhoneCall, FiMail, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-white bg-cover bg-center bg-no-repeat bg-fixed p-10 ${isScrolled ? 'fixed top-0 left-0 right-0 z-50' : ''}`}>
      <div className="container mx-auto py-2 px-4 md:px-6 p-5">
        <div className="flex justify-between items-center">
          {/* Left side */}
          {/* <div className="text-black font-bold">
            Bamboo Chick Maker
          </div> */}

          {/* Right side */}
          <div className="flex flex-center space-x-4">
            {/* Social icons */}
            {!isScrolled && (
              <div className="hidden md:flex items-center space-x-2">
                <FaFacebook className="text-blue-500 hover:text-blue-700 cursor-pointer transition duration-300" />
                <FaInstagram className="text-pink-500 hover:text-pink-700 cursor-pointer transition duration-300" />
                <FaPinterest className="text-red-500 hover:text-red-700 cursor-pointer transition duration-300" />
              </div>
            )}

            {/* Contact buttons */}
            {!isScrolled && (
              <div className="hidden md:flex items-center space-x-2">
                <FiPhoneCall className="text-yellow-500" size={24} />
                <a href="tel:+91-19191991919" className="text-gray-800 hover:text-gray-600 transition duration-300">+91-19191991919</a>
              </div>
            )}
            {!isScrolled && (
              <div className="hidden md:flex items-center space-x-2">
                <FiMail className="text-blue-500" size={24} />
                <a href="mailto:info@chickmaker.com" className="text-gray-800 hover:text-gray-600 transition duration-300">info@chickmaker.com</a>
              </div>
            )}

            {/* Toggle button for small screens */}
            <div className="md:hidden">
              <button onClick={toggleSidebar}>
                {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar navigation */}
      <nav className="bg-purple-700 p-5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <img src="https://www.hotamchickmaker.com/header_files/6966WhatsApp%20Image%202023-03-28%20at%2012.43.51%20PM.jpeg" alt="Bamboo Chick Maker Logo" className="h-16" />

            {/* Navigation links for larger screens */}
            <ul className="hidden md:flex space-x-6 text-white">
              <li className="hover:text-yellow-300 transition duration-300 cursor-pointer">
                <Link to="home" smooth={true} duration={500}>HOME</Link>
              </li>
              <li className="hover:text-yellow-300 transition duration-300 cursor-pointer">
                <Link to="about" smooth={true} duration={500}>ABOUT US</Link>
              </li>
              <li className="hover:text-yellow-300 transition duration-300 cursor-pointer">
                <Link to="services" smooth={true} duration={500}>SERVICES</Link>
              </li>
              <li className="hover:text-yellow-300 transition duration-300 cursor-pointer">
                <Link to="contact" smooth={true} duration={500}>CONTACT US</Link>
              </li>
              <li className="hover:text-yellow-300 transition duration={500} cursor-pointer">
                <Link to="enquiry" smooth={true} duration={500}>ENQUIRY</Link>
              </li>
              <li className="hover:text-yellow-300 transition duration={500} cursor-pointer">
                <Link to="gallery" smooth={true} duration={500}>GALLERY</Link>
              </li>
            </ul>

            {/* <div className={`relative hidden md:block ${isScrolled ? 'hidden' : ''}`}>
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 rounded-md text-black focus:outline-none"
              />
              <button className="absolute right-0 top-0 px-4 py-2 bg-gray-200 rounded-r-md">
                🔍
              </button>
            </div> */}
          </div>
        </div>
      </nav>

      {/* Sidebar navigation for smaller screens */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 bg-purple-700 bg-opacity-95 md:hidden flex flex-col items-center justify-center space-y-6 text-white">
          <button onClick={toggleSidebar} className="absolute top-4 right-4">
            <FiX size={30} />
          </button>
          <ul className="space-y-6">
            <li className="hover:text-yellow-300 transition duration-300">
              <Link to="home" smooth={true} duration={500} onClick={toggleSidebar}>HOME</Link>
            </li>
            <li className="hover:text-yellow-300 transition duration-300">
              <Link to="about" smooth={true} duration={500} onClick={toggleSidebar}>ABOUT US</Link>
            </li>
            <li className="hover:text-yellow-300 transition duration-300">
              <Link to="services" smooth={true} duration={500} onClick={toggleSidebar}>SERVICES</Link>
            </li>
            <li className="hover:text-yellow-300 transition duration-300">
              <Link to="contact" smooth={true} duration={500} onClick={toggleSidebar}>CONTACT US</Link>
            </li>
            <li className="hover:text-yellow-300 transition duration-300">
              <Link to="enquiry" smooth={true} duration={500} onClick={toggleSidebar}>ENQUIRY</Link>
            </li>
            <li className="hover:text-yellow-300 transition duration-300">
              <Link to="gallery" smooth={true} duration={500} onClick={toggleSidebar}>GALLERY</Link>
            </li>
          </ul>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 rounded-md text-black focus:outline-none"
            />
             <button className="absolute right-0 top-0 px-4 py-2 bg-gray-200 rounded-r-md">
               🔍
             </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
