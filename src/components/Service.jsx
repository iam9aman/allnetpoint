import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { context } from './context/context';
import { Link } from 'react-router-dom';
import online from '../Photos/online.png';
import social from '../Photos/socialM.png';
import driving from '../Photos/driving.png';          
import passport from '../Photos/passport.png';          
import box from '../Photos/box.png';          
import train from '../Photos/train.png';          
import air from '../Photos/air.png';          
import health from '../Photos/health.png';          
import vehicle from '../Photos/vehicle.png';          
import pan from '../Photos/pan.png';           
import itr from '../Photos/itr.png';           
import plate from '../Photos/number.png';           
import print from '../Photos/print.png';           

// Dummy data for the cards
const cardData = [
  { id: 1, image: online, title: 'Apply Jobs' },
  { id: 2, image: driving, title: 'Apply driving licence' },
  { id: 3, image: passport, title: 'Apply Passport'},
  { id: 4, image: box, title: 'Courier Packaging'},
  { id: 5, image: train, title: 'Book train-tickets'},
  { id: 6, image: air, title: 'Book air-tickets'},
  { id: 7, image: health, title: 'Health Insurance'},
  { id: 8, image: vehicle, title: 'Vehicle Insurance' },
  { id: 9, image: pan, title: 'Apply Pan card' },
  { id: 10, image: itr, title: 'Online ITR Filing'},
  { id: 11, image: plate, title: 'Apply number plate' },
  { id: 12, image: print, title: 'Print/copy/scan documents' },
];

// Define different animation variants for different cards
const cardVariants = {
  hidden: { opacity: 0, x: -100, y: 50 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const cardVariantsTop = {
  hidden: { opacity: 0, x: 0, y: -100 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const cardVariantsRight = {
  hidden: { opacity: 0, x: 100, y: 0 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const cardVariantsBottom = {
  hidden: { opacity: 0, x: 0, y: 100 },
  visible: { opacity: 1, x: 0, y: 0 },
};

// Define animation variants for the heading
const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

function Service() {

  const ScrollToTop = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []); // The empty dependency array ensures this runs only once when the component mounts

    return null; // This component doesn't need to render anything
};

ScrollToTop()

  const { theme } = useContext(context);
  const { ref: cardContainerRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // State to handle theme transition
  const [themeTransition, setThemeTransition] = useState(false);

  useEffect(() => {
    // Trigger theme transition animation
    setThemeTransition(true);
    const timer = setTimeout(() => setThemeTransition(false), 300); // Adjust timing to match animation duration
    return () => clearTimeout(timer);
  }, [theme]);

  // Define text color and background color based on theme
  const textColor = theme === 'light' ? 'text-black' : 'text-white';
  const bgColor = theme === 'light' ? 'custom-home' : 'custom-home-dark';

  return (
    <div
      className={`${bgColor} ${textColor} h-auto flex flex-col items-center gap-6 p-6 transition-transform duration-500 ${themeTransition ? 'scale-95' : 'scale-100'}`}
      ref={cardContainerRef}
    >
      <motion.h1
        className={`text-4xl font-extrabold mb-1 ${textColor} text-center`}
        initial="hidden"
        animate="visible"
        variants={headingVariants}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Online Filing Services
      </motion.h1>
      <motion.p
        className={`text-xl mb-6 ${textColor} text-center max-w-4xl`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
      >
        Discover our comprehensive online filing services designed to streamline your administrative tasks and ensure compliance. From digital document management to secure online submissions, our solutions offer efficiency and ease of use, tailored to meet your specific needs.
      </motion.p>
      <div className="flex flex-wrap justify-center gap-4">
        {cardData.map((card, index) => {
          // Apply different animation variants based on the card index
          let variants = cardVariants;
          if (index % 4 === 0) variants = cardVariantsTop;
          else if (index % 4 === 1) variants = cardVariantsRight;
          else if (index % 4 === 2) variants = cardVariantsBottom;
          else variants = cardVariants;

          return (
            <motion.div
              key={card.id}
              className="w-full sm:w-1/2 md:w-[40vw] lg:w-[30vw] p-4 border rounded-lg shadow-lg flex flex-col items-center"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={variants}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: '0px 12px 20px rgba(0,0,0,0.2)' }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={card.image} className='w-24 h-24' alt={card.title} />
                <p className="text-lg font-semibold">{card.title}</p>
              </div>
              <Link 
              to='/contact'
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
              >
                Contact Us
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Service;
