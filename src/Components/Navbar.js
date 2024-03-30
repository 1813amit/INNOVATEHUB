import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 mr-4" />
          <span className="text-white text-lg font-semibold">Your Logo</span>
        </div>

        {/* Toggler for Mobile */}
        {isMobile && (
          <button
            onClick={toggleDropdown}
            className="block md:hidden text-white focus:outline-none"
          >
            &#8801; {/* Unicode character for hamburger menu */}
          </button>
        )}

        {/* Dropdowns */}
        <div
          className={`${
            isMobile ? (dropdownVisible ? 'block' : 'hidden') : 'flex'
          } md:flex-grow md:items-center md:space-x-6`}
        >
          {/* Dropdown 1 */}
          <div className="relative group">
            <button className="text-white hover:text-gray-300 focus:outline-none">
              Dropdown 1
            </button>
            <div className="absolute left-0 top-full bg-gray-800 text-white rounded-md p-2 hidden group-hover:block">
              <ul>
                <li>
                  <a href="#">Option 1</a>
                </li>
                <li>
                  <a href="#">Option 2</a>
                </li>
                <li>
                  <a href="#">Option 3</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Dropdown 2 */}
          <div className="relative group">
            <button className="text-white hover:text-gray-300 focus:outline-none">
              Dropdown 2
            </button>
            <div className="absolute left-0 top-full bg-gray-800 text-white rounded-md p-2 hidden group-hover:block">
              <ul>
                <li>
                  <a href="#">Option 1</a>
                </li>
                <li>
                  <a href="#">Option 2</a>
                </li>
                <li>
                  <a href="#">Option 3</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Dropdown 3 */}
          <div className="relative group">
            <button className="text-white hover:text-gray-300 focus:outline-none">
              Dropdown 3
            </button>
            <div className="absolute left-0 top-full bg-gray-800 text-white rounded-md p-2 hidden group-hover:block">
              <ul>
                <li>
                  <a href="#">Option 1</a>
                </li>
                <li>
                  <a href="#">Option 2</a>
                </li>
                <li>
                  <a href="#">Option 3</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Buttons */}
        {!isMobile && (
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4 hover:bg-blue-600 focus:outline-none">
              Login
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
