import React from 'react'
import { ArrowRightIcon } from "@heroicons/react/24/solid"

export default function Navbar() {

  //function to adjust anchor tags position by the height of the navbar and scroll smooth
  const handleJump = (e) => {
    e.preventDefault();

    const element = document.querySelector(e.target.hash);
    const offset = parseInt(e.target.dataset.offset, 10) || 0;
    const elementPosition = element.offsetTop - offset;

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  };

  return (
    <header className="bg-gray-800 md:sticky top-0 z-20">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* <a className="title-font font-medium text-white mb-4 md:mb-0"> */}
          <a
            href="#about" 
            role='button'
            onClick={handleJump} 
            data-offset="50" 
            className="text-2xl font-bold text-white mb-4 md:mb-0 ml-3">
              Stavros Singoudis
          </a>
        {/* </a> */}
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          
          
          {/*<button href="#skills" onClick={handleJump} data-offset="50" className='mr-5 hover:text-white'>
            Past Work
          </button>*/}


           <a 
            href="#projects" 
            role='button'
            onClick={handleJump} 
            data-offset="50" 
            className="mr-5 hover:text-white">
              Past Work
          </a>
          <a 
            href="#skills" 
            role='button'
            onClick={handleJump} 
            data-offset="50" 
            className="mr-5 hover:text-white">
              Skills
          </a>
          <a 
            href="#testimonials" 
            role='button'
            onClick={handleJump} 
            data-offset="50" 
            className="mr-5 hover:text-white">
              Testimonials
          </a>
        </nav>
        <a
          href="#contact"
          role='button'
          onClick={handleJump} 
          data-offset="50"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  )};