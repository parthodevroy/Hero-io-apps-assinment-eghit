import React from 'react';
import empty from "../assets/App-Error.png"

const Emptyapps = () => {
    return (
        <div className="h-[415px] w-full text-center flex flex-col justify-center items-center mx-auto">
           <img src={empty} alt="" srcset="" className='h-[200px]' />
            <div className='pt-4'>
                <h1 className='text-2xl font-semibold'>Oops, apps not found!</h1>
                <p className='text-xs'>The apps you are looking for is not available.</p>
              
            </div>
        </div>
    );
};

export default Emptyapps;