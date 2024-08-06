import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { context } from './context/context';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaHome, FaInfo, FaServicestack, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const { theme } = useContext(context);

  return (
    <motion.footer
      className={`w-full py-6 px-4 md:px-6 flex flex-col items-center justify-between transition-all duration-300 ${
        theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-900 text-gray-100'
      }`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center mb-4">
        <motion.div
          className="text-2xl md:text-3xl font-bold"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          AllNet
        </motion.div>

        <motion.div
          className="mt-4 text-xs sm:text-sm md:text-base flex flex-wrap justify-center space-x-2 sm:space-x-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#home" className="flex items-center mx-2 hover:underline hover:text-blue-500 transition-all duration-300">
            <FaHome className="mr-1 sm:mr-2" /> Home
          </a>
          <a href="#about" className="flex items-center mx-2 hover:underline hover:text-blue-500 transition-all duration-300">
            <FaInfo className="mr-1 sm:mr-2" /> About
          </a>
          <a href="#services" className="flex items-center mx-2 hover:underline hover:text-blue-500 transition-all duration-300">
            <FaServicestack className="mr-1 sm:mr-2" /> Services
          </a>
          <a href="#contact" className="flex items-center mx-2 hover:underline hover:text-blue-500 transition-all duration-300">
            <FaEnvelope className="mr-1 sm:mr-2" /> Contact
          </a>
        </motion.div>

        <motion.div
          className="flex mt-4 space-x-2 sm:space-x-4 text-lg sm:text-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-all duration-300">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all duration-300">
            <FaTwitter />
          </a>
          <a href="https://instagram.com/all_netcafe" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-all duration-300">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition-all duration-300">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition-all duration-300">
            <FaGithub />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="text-xs mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        &copy; {new Date().getFullYear()} AllNet. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
