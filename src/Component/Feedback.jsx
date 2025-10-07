import React from 'react';

const Feedback = () => {
    return (
        
        <div className='p-4 bg-[rgba(45,13,185,0.9)]'>
            <div className='text-4xl'>
                <h1 className='text-center font-semibold text-white'>Trusted by Millions, Built for You</h1>
            </div>
            <footer className=" flex justify-center space-x-6 sm:footer-horizontal  text-center p-4">
  <nav className='  pl-20'>
    <h6 className="footer-title text-white">Total Downloads</h6>
    <h1 className="link text-white text-4xl link-hover">29.6M</h1>
    <p className="link text-white text-xs link-hover">21% more than last month</p>
    
  </nav>
  <nav className=''>
    <h6 className="text-white text-xls footer-title">Total Reviews</h6>
    <h1 className="link text-white font-semibold text-4xl link-hover">906K</h1>
    <p className="link text-white text-xs link-hover">46% more than last month</p>
   
  </nav>
  <nav className=''>
    <h6 className="footer-title text-white">Active Apps</h6>
    <h1 className="link link-hover text-4xl text-white">132+</h1>
    <p className="link link-hover text-xs text-white">31 more will Launch</p>
   
  </nav>
</footer>
        </div>
    );
};

export default Feedback;