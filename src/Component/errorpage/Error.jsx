import React from 'react';
import err from "../../assets/demo-app (5).webp"
import Footer from '../Footer/Footer';
import { Link } from 'react-router';

const Error = () => {
    return (
        <>
        <div className=' h-[515px] w-full text-center flex flex-col justify-center items-center mx-auto'>
            <img src={err} alt="" srcset="" />
            <div className='pt-4'>
                <h1 className='text-2xl font-semibold'>Oops, page not found!</h1>
                <p className='text-xs'>The page you are looking for is not available.</p>
               <Link to={"/"}> <button className='btn bg-fuchsia-400'>go back</button></Link>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Error;