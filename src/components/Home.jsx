import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { context } from './context/context';
import bg from '../Photos/background.jpeg';
import social from '../Photos/social.png';
import HomeCard from './HomeCard';

function Home() {
  const { theme } = useContext(context);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    // Increment key to trigger animation
    setAnimationKey(prevKey => prevKey + 1);
  }, [theme]);
  
  const ScrollToTop = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []); // The empty dependency array ensures this runs only once when the component mounts

    return null; // This component doesn't need to render anything
};

ScrollToTop()

  // Define text color and background color based on theme
  const textColor = theme === 'light' ? 'text-black' : 'text-white';
  const bgColor = theme === 'light' ? 'custom-home' : 'custom-home-dark';

  // Define styles for the paragraph based on theme
  const paragraphStyles = theme === 'light'
    ? 'bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-gray-800 shadow-xl border border-gray-300'
    : 'bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-300 shadow-xl border border-gray-700';

  // Define the gradient text color based on theme
  const gradientText = theme === 'light'
    ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600'
    : 'bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500';

  return (
    <>
    <div className={`min-h-auto w-full ${bgColor} ${textColor} relative`}>
      <div className='text-white flex flex-col lg:flex-row justify-center items-center py-20 gap-x-0 gap-y-5 md:gap-x-48'>
       
        {/* Animated Heading */}
        <div className='flex flex-col gap-4'>
          <motion.h1
            key={`heading-${animationKey}`}  // Unique key for animation reset
            className={`text-[70px] md:text-[150px] text-center transform transition-transform duration-300 hover:scale-110 mb-2 ${textColor}`}
            initial={{ x: '-100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {theme === 'dark' ? (
              <>
                <span className='text-green-500 px-3 backdrop-blur-sm bg-black/70'>ALL</span> 
                <span className='text-blue-400'>net</span>
              </>
            ) : (
              <>
                <span className='text-red-500 px-3 backdrop-blur-sm bg-white/30'>ALL</span> 
                <span className='text-black'>net</span>
              </>
            )}
          </motion.h1>
          <motion.div
            key={`paragraph-${animationKey}`}  // Unique key for animation reset
            className={`transform transition-transform mx-3 lg:mx-0 rounded-lg duration-300  hover:scale-105 ${paragraphStyles}`}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className={`text-lg md:text-xl text-center lg:w-[30vw] p-4 font-medium ${gradientText} bg-clip-text text-transparent`}>
              We offer diverse online services, including job application forms, driving licenses, passports, rail & air ticket bookings, insurance, and more.
            </p>
          </motion.div>
        </div>
      
        {/* Animated Social Image with Hover Effect */}
        <div className='flex flex-col gap-4'>
          <motion.div
            key={`social-${animationKey}`}  // Unique key for animation reset
            className='flex justify-center items-center'
            initial={{ x: '100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img 
              src={social} 
              className='w-40 md:w-80 transform transition-transform duration-300 hover:scale-110 cursor-pointer' 
              alt="Social Media" 
            />
          </motion.div>
          <motion.div
            key={`paragraph-${animationKey}`}  // Unique key for animation reset
            className={`transform transition-transform mx-3 rounded-lg lg:mx-0 duration-300 hover:scale-105 ${paragraphStyles}`}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className={`text-lg md:text-xl text-center lg:w-[30vw] p-4 font-medium ${gradientText} bg-clip-text  text-transparent`}>
              Explore our digital marketing, graphic design, video editing, printing solutions and <span className='text-3xl font-bold'>VISA consultancy</span>  for a seamless experience.
            </p>
          </motion.div>
        </div>
      </div>   
      <div className={theme === 'light' ? 'bg-black h-4 w-4 lastball rounded-full absolute bottom-12' : 'bg-white h-4 w-4 lastball rounded-full absolute bottom-12'}></div>       
    </div>
    <HomeCard/>
    </>
  );
}

export default Home;
