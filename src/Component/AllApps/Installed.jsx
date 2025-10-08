import React from 'react';
import down from "../../assets/icon-downloads.png"
import ratings from "../../assets/icon-ratings.png"

const Installed = ({apps}) => {
    const {companyName,image,downloads,ratingAvg,title}=apps
    return (
        <div>
           <div className="hero h-full md:h-[150px] w-full md:w-[1000px] rounded-2xl mx-auto gap-2 space-y-2 flex flex-row md:justify-between p-2  bg-white">
             <div className="hero-content flex-row md:flex-col lg:flex-row">
               <div className=' '>
                   <img
                 src={image}
                 className="max-w-sm rounded-lg h-20 bg-white shadow-2xl"
               />
               </div>
               <div className='w-3xl  gap-2 h-auto '>
                 <div className=' '>
                  
                 <p className=" flex flex-row md:justify-start font-semibold pb-3">
                   {companyName}({title})
                 </p>
                 
                 </div>
                 <div className='w-[200px] text-lime-400  gap-4  flex flex-row md:justify-between'>
                   <div className=' items-center pb-2'>
                       <img src={down} alt="" srcset="" className='h-4 mx-auto w-4' />
                       <h1 className='text-xs pb-2'>Downloads</h1>
                       <p className='text-2xl font-semibold'>{downloads}M</p>
           
           
                   </div>
                   <div>
                       <img src={ratings} alt="" srcset="" className=' w-4 h-4 mx-auto' />
                       <h1 className='text-xs pb-2'>Avarage rating</h1>
                       <p className='text-2xl font-semibold'>{ratingAvg}</p>
           
           
                   </div>
                  
                 </div>
        </div>
        
                   </div>
                   <div>
                    <button className='btn btn-neutral'>Unstall</button>
                   </div>
                 </div>
     </div>
    );
};

export default Installed;