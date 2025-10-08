import React from 'react';
import { useLoaderData } from 'react-router';
import Apps from './Apps';
import Navber from '../Navber/Navber';
import Footer from '../Footer/Footer';

const AllApps = () => {

    const alldata=useLoaderData()
   
    
    return (
        <div className='bg-gray-200 p-4 text-center'>
            <h1 className='text-2xl font-semibold'>Our All Applications</h1>
            <p className='text-xs'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='flex justify-between'>
                <h1>0 apps fount</h1>

                <label>
                    <input type="search" name="search" placeholder='search apps' />
                </label>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 p-4 gap-2'>
                {
                    alldata.map((app)=>(<Apps key={app.id} app={app}></Apps>))
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllApps;