import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { context } from './context/context';
import online from '../Photos/online.png';
import social from '../Photos/socialM.png';
import { Link } from 'react-router-dom';

function HomeCard() {
  const { theme } = useContext(context);
  const { ref: cardRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Define text color and background color based on theme
  const textColor = theme === 'light' ? 'text-black' : 'text-white';
  const bgColor = theme === 'light' ? 'custom-home' : 'custom-home-dark';

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={`${bgColor} ${textColor} h-auto flex flex-col items-center p-4`}>
      <motion.h2
        className={`text-4xl mb-8 font-semibold ${textColor}`}
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Our Services
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-4">
        <motion.div
          className="w-full md:w-1/2 lg:w-1/3 p-4 border rounded-lg shadow-lg mx-3 flex flex-col items-center"
          ref={cardRef}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={cardVariants}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05, boxShadow: '0px 12px 20px rgba(0,0,0,0.2)' }}
        >
          <div className="flex items-center gap-4">
            <img src={online} className='w-24 h-24' alt="Online Filing Services" />
            <div className="flex flex-col">
              <p className="text-lg font-semibold">Online Filing, Apply Jobs and<br />More...</p>
              <Link
                to="/service"
                className="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg text-center shadow hover:bg-blue-600 transition"
              >
                Services
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 lg:w-1/3 p-4 border rounded-lg mx-3 shadow-lg flex flex-col items-center"
          ref={cardRef}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={cardVariants}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05, boxShadow: '0px 12px 20px rgba(0,0,0,0.2)' }}
        >
          <div className="flex items-center gap-4">
            <img src={social} className='w-24 h-24' alt="Digital Marketing Services" />
            <div className="flex flex-col">
              <p className="text-lg font-semibold">Digital Marketing, <span className='text-2xl text-green-600 font-bold'>VISA Consultancy</span> and More...</p>
              <Link
                to="/services"
                className="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg text-center shadow hover:bg-blue-600 transition"
              >
                Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HomeCard;
