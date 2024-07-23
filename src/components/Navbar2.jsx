 
 
import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { ImCross } from "react-icons/im";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`bg-gray-800 text-white py-2 z-20 relative ${scrollY > 100 ? 'hidden' : ''}`}>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="flex items-center mb-4 md:mb-0">
            <MdEmail size={24} className="mr-2" />
            <span>ssrnoidagroup@gmail.com</span>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
      <nav className={`w-full bg-white  ${scrollY > 100 ? 'top-0' : 'top-100'} ${scrollY > 100 ? 'fixed' : ''} left-0 right-0 z-50 font-sans transition-all duration-300`}>
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-cyan-600 font-bold">
                  <Image src="https://ssrnoidagroup.com/assets/img/logo.png" width={110} height={110} alt="logo" />
                </h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <ImCross size={30} />
                  ) : (
                    <FaBars size={30} />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                <li className="pb-6 text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-900 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#home" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About Us
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact Us
                  </Link>
                </li>
                 
                <li className="relative pb-6 text-xl text-black py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <button onClick={() => toggleDropdown('propertyPlot')} className="flex items-center justify-center w-full">
                    Projects
                    <IoIosArrowDropdown size={20} className={`ml-2 transform transition-transform ${openDropdown === 'propertyPlot' ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === 'propertyPlot' && (
                    <ul className="absolute z-50 left-0 mt-2 w-48 bg-white shadow-lg border border-gray-200">
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link href="/plots/residential">Phase 1</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link href="/plots/commercial">Phase 2</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link href="/plots/industrial">Phase 3</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link href="/plots/industrial">Vrindavan Township</Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
