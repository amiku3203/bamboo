import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';
import { IoMdChatbubbles } from 'react-icons/io';
import { SiGoogletranslate } from 'react-icons/si';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <footer className="bg-purple-800 text-white py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* About Us */}
          <div>
            <h2 className="font-bold text-lg mb-4">About Us</h2>
            <p>
              Our Company provides a complete solution for all Chick maker services like Roller Blinds,
              Vanseyan Chick, Fancy Chick Maker, Window Curtain, Bird Net, ... Read More
            </p>
            <div className="mt-4">
              <h3 className="font-semibold">Visit The Office</h3>
              <p>Near Gautam Budh Nagar, Sector 78, Noida, Uttar Pradesh, India - 201305</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-bold text-lg mb-4">Quick Links</h2>
            <ul>
              {['Home', 'About Us', 'Services', 'Contact Us', 'Enquiry', 'Gallery', 'Site Map'].map(link => (
                <li key={link} className="mb-2">
                  <a href="#" className="hover:underline">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="font-bold text-lg mb-4">Services</h2>
            <ul>
              {['Roller Blinds', 'Fancy Bamboo Chick Maker', 'Vanseyan Chick', 'Window Curtain', 'Bird Net', 'PVC Blind', 'Outdoor Chick Maker', 'Zebra Blind'].map(service => (
                <li key={service} className="mb-2">
                  <a href="#" className="hover:underline">{service}</a>
                </li>
              ))}
            </ul>
            <a href="#" className="text-orange-400 hover:underline">View All</a>
          </div>

          {/* Follow Us */}
          <div>
            <h2 className="font-bold text-lg mb-4">Follow Us</h2>
            <div className="flex items-center justify-center md:justify-start mb-2">
              <FaPhoneAlt className="mr-2 text-yellow-400" />
              <span>+91-19191911919 / +91-1919191919</span>
            </div>
            <div className="flex items-center justify-center md:justify-start mb-2">
              <FaEnvelope className="mr-2 text-red-500" />
              <span>info@chickmaker.com</span>
            </div>
            <div className="flex justify-center md:justify-start space-x-4 mb-2">
              <FaFacebook className="text-blue-600" />
              <FaInstagram className="text-pink-500" />
              <FaPinterest className="text-red-600" />
            </div>
            <div className="mt-4 flex justify-center md:justify-start">
              <SiGoogletranslate className="mr-2 inline" />
              <select className="bg-purple-700 text-white p-2 rounded">
                <option>English</option>
                <option>Hindi</option>
              </select>
            </div>
            <div className="mt-4 flex justify-center md:justify-start">
              <a href="#" className="flex items-center text-blue-400 hover:underline">
                <img src="/webmail-icon.png" alt="Webmail Login" className="w-5 h-5 mr-2" />
                Webmail Login
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed Position Icons */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 space-y-3 z-50">
  <a href="tel:+91919191991" className="block bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300">
    <FaPhoneAlt className="w-10 h-10 text-blue-500" />
  </a>
  <a href="https://wa.me/9191919191" className="block bg-green-500 p-2 rounded-full shadow-md hover:bg-green-600 transition duration-300">
    <AiOutlineWhatsApp className="w-10 h-10 text-white" />
  </a>
  {/* <a href="#" className="block bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300">
    <IoMdChatbubbles className="w-10 h-10 text-blue-400" />
  </a> */}
</div>

    </>
  );
};

export default Footer;
