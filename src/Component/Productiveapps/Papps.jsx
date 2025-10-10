import React from 'react';
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';

const Papps = () => {
    return (
        <div className='text-center p-4 bg-gray-200'>
            <h1 className='text-4xl font-bold'>We Build<br></br>
<span className='text-indigo-500'>Productive</span> Apps</h1>
<p className='text-xs'>At HERO.IO we craft innovative apps designed to make everyday life simpler, smarter, 
    and more exciting <br></br>.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
     <div className='flex flex-col md:flex-row justify-center items-center text-center p-4 sm:space-y-2 md:space-x-4 '>
                {/* Google Play button */}
                <a
                    href='https://play.google.com/store/games?hl=en'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition'
                >
                    <FaGooglePlay size={20} />
                    <span>Google Play</span>
                </a>

                {/* App Store button */}
                <a
                    href='https://www.apple.com/app-store/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition'
                >
                    <FaAppStoreIos size={20} />
                    <span>App Store</span>
                </a>
            </div>
        </div>

       
    );
};

export default Papps;