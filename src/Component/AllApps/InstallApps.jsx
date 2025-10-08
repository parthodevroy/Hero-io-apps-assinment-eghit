import React, { useEffect, useState } from 'react';
import Installed from './Installed';

const InstallApps = () => {

    const [installed, setInstalled]=useState([])
    console.log(installed);
    

    useEffect(()=>{
        const datas=JSON.parse(localStorage.getItem("installlist"));
        if(datas)setInstalled(datas)
    },[])
// const {image,title,ratingAvg,downloads}=installed;

    return (
        <div className='text-center bg-gray-200'>
            <h1 className=' text-3xl font-semibold p-2 md:pt-8'> Your Installed Apps</h1>
            <p>Explore All Trending Apps on the Market developed by us</p>
            <div className='flex flex-row  md:justify-between pt-2 md:pt-20 p-2 md:p-12'>
                <h1 className='pl-2 md:pl-20'>({installed.length}) Apps Found</h1>
                <p className='pr-2 md:pr-20'>Sort By Size</p>
            </div>
            <div className='space-y-2'>
                {
                    installed.map((apps)=><Installed apps={apps}></Installed>)
                }
            </div>
        </div>
    );
};

export default InstallApps;