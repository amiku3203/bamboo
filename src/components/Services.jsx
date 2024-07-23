import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdOutlineArrowRightAlt } from "react-icons/md";

const ServiceCard = ({ image, title, description }) => {
  console.log("image", image)
  return (
    <div   className="shake group relative overflow-hidden bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
      <img src= {`https://frontbis.onrender.com/${image}`} alt={title} className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-75" />
      <div className="p-4 bg-purple-800 text-white relative">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm">{description}</p>
        <button className="absolute bottom-4 right-4 px-2 py-1 bg-transparent text-yellow-500 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View More <MdOutlineArrowRightAlt className='ml-1 mb-4' />
        </button>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchServices = async () => {
      try {
        const response = await fetch('https://frontbis.onrender.com/allhotamproduct');
        const data = await response.json();
        console.log("data",data);
        setServices(data);
      } catch (error) {
        console.error('Error fetching the services:', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
          Latest Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services?.project?.map((service, index) => (
              
            <ServiceCard
              key={index}
              image={service.photo}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
