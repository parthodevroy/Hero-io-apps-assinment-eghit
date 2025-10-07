import React from 'react';

import img from '../../assets/logo.png'
import { FaFacebookF } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
       <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className="fill-current">
      </svg>
      <img src={img} alt="" srcset="" className='h-6 w-6' />
    <p>HERO.IO</p>
  </aside>
  
  <nav className=" gap-4 pr-8 md:place-self-center md:justify-self-end">
    <h1>Social links</h1>
    <div className='flex space-x-2'>
      <h1><FaFacebookF/></h1>
      <h1><CiLinkedin/></h1>
      <h1><FaXTwitter/></h1>
    </div>
  </nav>
</footer>
    );
};

export default Footer;