import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaLeaf } from 'react-icons/fa';

const Statistics = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.6 });

  const stats = [
    { icon: FaLeaf, value: 11, label: 'Years Of Experience & Record', suffix: '+' },
    { icon: FaLeaf, value: 22, label: 'Experts Team' },
    { icon: FaLeaf, value: 1450, label: 'Happy Customers', suffix: '+' },
    { icon: FaLeaf, value: 1900, label: 'Projects Done', suffix: '+' }
  ];

  return (
    <div ref={ref} className="min-h-screen flex flex-col justify-center items-center bg-gray-100 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
            <stat.icon className="text-5xl text-orange-500 mb-4" />
            <div className="text-4xl font-bold text-orange-500">
              {inView && (
                <CountUp end={stat.value} suffix={stat.suffix} duration={2} />
              )}
            </div>
            <p className="text-gray-700 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
