import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
      <header>
        <div className="className=bg-gray-600  absolute w-full items-center justify-center px-2 md:bg-opacity-0">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <div className="inline-block mr-4 py-2 whitespace-no-wrap object-contain w-20 pt-4 cursor-pointer"></div>
            </div>
          </div>
          <Navbar />
        </div>
      </header>
    );
  };

  export default Header;