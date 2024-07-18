import React, { useEffect, useState } from 'react';


function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`navbar fixed z-60 left-0 w-full p-5 border-b border-white border-opacity-20 transition-colors duration-300 ${scrolled ? 'bg-primary bg-opacity-70 backdrop-blur-lg' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto flex justify-between items-center">


        <img src="img/logo.svg" alt="Logo" className="h-8" />

        <div className="hidden md:flex items-center">
          <ul className="flex ml-5 text-white uppercase">
            <li className="mx-5">
              <a href="" className="hover:text-gray-300">О компании</a>
            </li>
            <li className="mx-5">
              <a href="" className="hover:text-gray-300">услуги</a>
            </li>
            <li className="mx-5">
              <a href="" className="hover:text-gray-300">каталог</a>
            </li>
          </ul>
          <div className="flex items-center text-white ml-5">
            <div className="flex items-center">
              <img className="w-5 mr-5" src="img/phone_icon.svg" alt="Phone" />
              <a href="" className="number mr-5 hover:text-gray-300">+7 777 - 777 - 77 - 77</a>
            </div>
            <div className="flex items-center">
              <img className="w-5 mr-5" src="img/arrow_r.svg" alt="Arrow" />
              <a className="uppercase hover:text-gray-300" href="">заказать звонок</a>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-5  p-5">
          <ul className="text-white uppercase">
            <li className="my-2 py-2 border-b border-white border-opacity-20">
              <a href="" className="hover:text-gray-300 block">О компании</a>
            </li>
            <li className="my-2 py-2 border-b border-white border-opacity-20">
              <a href="" className="hover:text-gray-300 block">услуги</a>
            </li>
            <li className="my-2 py-2 border-b border-white border-opacity-20">
              <a href="" className="hover:text-gray-300 block">каталог</a>
            </li>
          </ul>
          <div className="text-white mt-5">
            <div className="flex items-center mb-4">
              <img className="w-5 mr-5" src="img/phone_icon.svg" alt="Phone" />
              <a href="" className="number hover:text-gray-300">+7 777 - 777 - 77 - 77</a>
            </div>
            <div className="flex items-center">
              <img className="w-5 mr-5" src="img/arrow_r.svg" alt="Arrow" />
              <a className="uppercase hover:text-gray-300" href="">заказать звонок</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;
