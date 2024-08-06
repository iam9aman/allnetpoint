import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { context } from './context/context';
import contactImage from '../Photos/mobile.png'; // Add your contact image path here
import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Import icons

function Contact() {
  const { theme } = useContext(context);
  const [prevTheme, setPrevTheme] = useState(theme);
  const [animateKey, setAnimateKey] = useState(0); // Key to trigger re-render for animation

  useEffect(() => {
    if (theme !== prevTheme) {
      // Trigger a new animation by changing the key
      setAnimateKey(prevKey => prevKey + 1);
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
      key={animateKey} // Use the key to trigger re-render
      className={`min-h-auto w-full ${bgColor} ${textColor} flex flex-col items-center py-16 relative`}
      initial={{ opacity: 0, backgroundColor: prevTheme === 'light' ? '#ffffff' : '#000000' }}
      animate={{ opacity: 1, backgroundColor: theme === 'light' ? '#ffffff' : '#000000' }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Header Section */}
      <motion.div
        className='text-center mb-12'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className={`text-4xl md:text-6xl font-bold ${textColor}`}>Get in Touch</h1>
        <p className={`mt-4 text-lg md:text-xl font-light ${textColor}`}>
          We would love to hear from you! Reach out through our social media channels or email us.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
        {/* Contact Image */}
        <motion.div
          className='flex justify-center'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={contactImage}
            className='w-64 md:w-96 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105'
            alt="Contact"
          />
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className={`flex flex-col items-center md:items-start text-center md:text-left ${textColor}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className='text-2xl md:text-3xl font-semibold mb-4'>Contact Details</h2>
          
          {/* Address */}
          <div className='flex items-center mb-4'>
            <FaMapMarkerAlt className={`text-xl ${accentColor} mr-3`} />
            <p className='text-lg'>Near Post-office, Dasuya,</p>
          </div>
          <div className='flex items-center mb-4'>
            <FaMapMarkerAlt className={`text-xl ${accentColor} mr-3`} />
            <p className='text-lg'> Hoshiarpur, Punjab.</p>
          </div>

          {/* Phone Number */}
          <div className='flex items-center mb-4'>
            <FaPhoneAlt className={`text-xl ${accentColor} mr-3`} />
            <p className='text-lg'>+91 62394-76323</p>
          </div>

          {/* Email */}
          <div className='flex items-center mb-4'>
            <FaEnvelope className={`text-xl ${accentColor} mr-3`} />
            <p className='text-lg'>allnetpoint9@gmail.com</p>
          </div>

          {/* Social Media Links */}
          <div className='flex gap-4'>
            <a href="https://facebook.com" target="_blank" className={`text-2xl ${accentColor} hover:text-opacity-80`} aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" className={`text-2xl ${accentColor} hover:text-opacity-80`} aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/all_netcafe" target="_blank" className={`text-2xl ${accentColor} hover:text-opacity-80`} aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer Indicator */}
      <div className={`absolute bottom-5 left-0 h-4 w-4 rounded-full lastball ${footerColor}`}></div>
    </motion.div>
  );
}

export default Contact;
