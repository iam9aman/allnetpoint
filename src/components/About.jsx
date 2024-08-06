import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { context } from './context/context';
import aboutImage from '../Photos/multiple.png'; // Add your About Us image path here
import { FaUsers, FaRegHandshake, FaBusinessTime } from 'react-icons/fa'; // Import icons

function AboutUs() {
  const { theme } = useContext(context);
  const [prevTheme, setPrevTheme] = useState(theme);
  const [animationKey, setAnimationKey] = useState(0); // Key to trigger re-render for animation

  useEffect(() => {
    if (theme !== prevTheme) {
      setAnimationKey(prevKey => prevKey + 1); // Increment key to trigger animation
      setPrevTheme(theme);
    }
  }, [theme, prevTheme]);

  const ScrollToTop = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []); // The empty dependency array ensures this runs only once when the component mounts

    return null; // This component doesn't need to render anything
};

ScrollToTop()


  // Define text color and background color based on theme
  const textColor = theme === 'light' ? 'text-gray-900' : 'text-gray-100';
  const bgColor = theme === 'light' ? 'custom-home' : 'custom-home-dark';
  const accentColor = theme === 'light' ? 'text-blue-500' : 'text-yellow-500';
  const footerColor = theme === 'light' ? 'bg-black' : 'bg-white';

  return (
    <motion.div
      key={animationKey} // Use the key to trigger re-render
      className={`min-h-auto w-full ${bgColor} ${textColor} flex flex-col items-center py-16 relative`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Header Section */}
      <motion.div
        className='text-center mb-16'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className={`text-4xl md:text-6xl font-extrabold ${textColor}`}>
          About Us
        </h1>
        <p className={`mt-4 text-lg md:text-xl font-light ${textColor}`}>
          Discover our story, mission, and the talented individuals behind our success.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className='flex flex-col md:flex-row items-center justify-center gap-8 mb-16 px-4'>
        {/* About Image */}
        <motion.div
          className='flex justify-center md:w-1/2'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={aboutImage}
            className='w-[70%] h-auto rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105'
            alt="About Us"
          />
        </motion.div>

        {/* Content */}
        <div className='flex flex-col items-center md:items-start text-center md:text-left md:w-1/2'>
          <motion.div
            className='flex flex-col items-center mb-12'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <FaBusinessTime className={`text-4xl md:text-6xl ${accentColor} mb-4`} />
            <h2 className='text-2xl md:text-3xl font-semibold mb-4'>
              Our Journey
            </h2>
            <p className='text-lg md:text-xl'>
              Since our establishment in 2021, we have been committed to providing a wide range of online services. Our goal is to simplify and enhance your digital experience with our comprehensive solutions.
            </p>
          </motion.div>

          <motion.div
            className='flex flex-col items-center mb-12'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <FaRegHandshake className={`text-4xl md:text-6xl ${accentColor} mb-4`} />
            <h2 className='text-2xl md:text-3xl font-semibold mb-4'>
              Our Founders
            </h2>
            <p className='text-lg md:text-xl'>
              Founded by Aman Arora and Amandeep Singh, our team is driven by a passion for excellence and a dedication to providing top-quality online services.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer Indicator */}
      <motion.div
        className={`absolute bottom-5 left-0 h-4 w-4 rounded-full ${accentColor}`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      ></motion.div>
      <div className={`absolute bottom-5 left-0 h-4 w-4 rounded-full lastball ${footerColor}`}></div>
    </motion.div>
  );
}

export default AboutUs;
