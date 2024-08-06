import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // Use useLocation to handle active state
import { TfiMenuAlt } from 'react-icons/tfi';
import { GiTireIronCross } from 'react-icons/gi';
import { FaHome, FaCog, FaUser, FaPhone, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

function Navbar(prop) {
  const [menu, setMenu] = useState(false);
  const [menuHeight, setMenuHeight] = useState('0px');
  const [menuClick, setMenuClick] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [theme, setTheme] = useState('light'); // Default theme
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);
  const navbarControls = useAnimation();
  const location = useLocation();

  // Function to handle window resize and adjust menu state
  function handleResize() {
    const width = window.innerWidth;
    if (width >= 768) {
      setMenu(false);
      setMenuClick(false);
    }
  }

  // Animate navbar coming from the top
  useEffect(() => {
    navbarControls.start({
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    });
  }, [navbarControls]);

  // Add event listener on component mount
  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update menu height when menu state changes
  useEffect(() => {
    if (menu) {
      setMenuHeight(`${menuRef.current.scrollHeight}px`);
    } else {
      setMenuHeight('0px');
    }
  }, [menu]);

  // Handle click outside to close the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !menuRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Load theme from local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Save theme to local storage
  useEffect(() => {
    localStorage.setItem('theme', theme);
    prop.get(theme);
    document.body.className = theme; // Apply theme to the body element
  }, [theme]);

  const handleMenu = () => {
    setMenu(true);
    setMenuClick(true);
  };

  const handleCross = () => {
    setMenu(false);
    setMenuClick(false);
  };

  const handleDropdownClick = () => {
    setDropdownOpen((prev) => !prev);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Check if the current path matches any of the service links
  const isServiceActive = location.pathname === '/service' || location.pathname === '/services';

  return (
    <>
      <motion.div
        className={`h-auto py-2 px-10 flex-wrap sticky top-0 z-10 flex justify-between items-center md:px-20 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
        initial={{ opacity: 0, y: -100 }}
        animate={navbarControls}
      >
        <div className='w-screen md:w-auto'>
          <div className='logo text-2xl'>ALL Net</div> {/* NOT a NavLink */}
        </div>
        <ul
          className={`menu ${menu ? `menu-open` : 'lg:text-lg'} ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
          style={{ height: menuHeight }}
          ref={menuRef}
        >
          <NavLink to='/' exact className={({ isActive }) => `flex items-center ${isActive ? 'text-blue-500' : ''}`}>
            <FaHome className='mr-2' /> <li>Home</li>
          </NavLink>
          <div className='relative md:block hidden group'>
            <li
              className={`relative cursor-pointer flex items-center ${isServiceActive ? 'text-blue-500' : ''}`}
              onClick={handleDropdownClick}
              ref={dropdownRef}
            >
              <FaCog className='mr-2' /> Services {dropdownOpen ? <FaCaretUp className='ml-1' /> : <FaCaretDown className='ml-1' />}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: dropdownOpen ? 1 : 0, y: dropdownOpen ? 0 : -10 }}
                transition={{ duration: 0.3 }}
                className={`absolute left-0 top-full mt-2 w-48 rounded-lg z-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
                style={{ display: dropdownOpen ? 'block' : 'none' }}
              >
                <ul className='py-2'>
                  <NavLink to='/service' className={({ isActive }) => `block px-4 py-2 hover:bg-gray-500 ${isActive ? 'text-blue-500' : ''}`}>
                    <li>Online Filing Services</li>
                  </NavLink>
                  <NavLink to='/services' className={({ isActive }) => `block px-4 py-2 hover:bg-gray-500 ${isActive ? 'text-blue-500' : ''}`}>
                    <li>Digital Marketing Services</li>
                  </NavLink>
                </ul>
              </motion.div>
            </li>
          </div>
          <NavLink to='/multiple-services' className={({ isActive }) => `md:hidden flex items-center ${isActive ? 'text-blue-500' : ''}`}>
            <FaCog className='mr-2' /> <li>Services</li>
          </NavLink>
          <NavLink to='/about' className={({ isActive }) => `flex items-center ${isActive ? 'text-blue-500' : ''}`}>
            <FaUser className='mr-2' /> <li>About us</li>
          </NavLink>
          <NavLink to='/contact' className={({ isActive }) => `flex items-center ${isActive ? 'text-blue-500' : ''}`}>
            <FaPhone className='mr-2' /> <li>Contact</li>
          </NavLink>
        </ul>
        <button
          onClick={toggleTheme}
          className={`absolute top-3 right-20 md:right-8 p-1 rounded-full ${theme === 'dark' ? 'bg-gray-700 rotate-icon text-yellow-500' : 'bg-gray-300 rotate-icon text-black'}`}
          style={{ fontSize: '1.2rem' }} // Adjust the icon size
        >
          {theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
        </button>
        {menuClick
          ? <GiTireIronCross onClick={handleCross} className='md:hidden absolute top-4 right-8 rotate-icon' />
          : <TfiMenuAlt onClick={handleMenu} size={20} className='md:hidden absolute top-4 right-8 rotate-iconMenu' />
        }
      </motion.div>
    </>
  );
}

export default Navbar;
