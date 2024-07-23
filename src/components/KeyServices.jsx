import React from 'react';
import { FaLeaf } from 'react-icons/fa';
import Slider from 'react-slick';
import { useSpring, animated } from 'react-spring';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'tailwindcss/tailwind.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
// ServiceCard Component
const ServiceCard = ({ image, title, description }) => {
  const props = useSpring({
    transform: 'perspective(600px) rotateY(0deg)',
    from: { transform: 'perspective(600px) rotateY(90deg)' },
    config: { mass: 1, tension: 170, friction: 26 }
  });

  return (
    <animated.div style={props} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
      <div className="relative overflow-hidden h-64">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <a href="#" className="text-indigo-500 hover:underline flex items-center">
          Read More <FaLeaf className="ml-2" />
        </a>
      </div>
    </animated.div>
  );
};

// KeyServices Component
const KeyServices = () => {
  const services = [
    {
      image: 'https://www.hotamchickmaker.com/uploaded_files/a4f41d24e07e59.jpg',
      title: 'Roller Blinds',
      description: 'A Roller blind is a single piece of fabric which wraps around a casing and fits into the top of your window frame, either within or out...'
    },
    {
      image: 'https://www.hotamchickmaker.com/uploaded_files/33941480ad3b18.jpg',
      title: 'Fancy Bamboo Chick Maker',
      description: 'Fancy Bamboo Chick Maker are manufactured with high grade materials which beautifies the interiors of the room. These window blinds are...'
    },
    {
      image: 'https://www.hotamchickmaker.com/uploaded_files/a28f450d37b85d.jpg',
      title: 'Another Service',
      description: 'Description for another service...'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0'
  };

  return (
    <div id="services" data-aos="fade-up" className="shake relative min-h-screen bg-cover bg-center p-8">
      {/* <h2 className="text-3xl font-bold text-center mb-6">Key Services</h2> */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
       Key Services
       </h2>
      <Slider {...settings} className="mx-auto max-w-screen-lg">
        {services.map((service, index) => (
          <div key={index} className="px-4">
            <ServiceCard
              image={service.image}
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default KeyServices;
