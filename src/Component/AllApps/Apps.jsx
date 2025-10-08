import React from 'react';
import downld from "../../assets/icon-downloads.png"
import ratig from "../../assets/icon-ratings.png"
import Navber from '../Navber/Navber';
import { Link } from 'react-router';

const Apps = ({app}) => {
    console.log(app);
    const {id,image,companyName,ratingAvg,downloads}=app;
    
    return (
       <>
              <Link to={`/appdetails/${id}`}>



               <div>
                   <div className="card bg-base-100 w-full text-blue-500 md:w-70 bg-white p-2 h-[350px] shadow-sm">
         <div className='h-[200px] w-[250px] mx-auto bg-gray-200 '>
           <figure className='w-[170px] h-[200px] mx-auto'>
           <img
             src={image}
             alt="" className="w-full object-cover transition-transform duration-300 hover:scale-105" />
         </figure>
         </div>
         <div className="card-body">
           
           <p className='text-xl text-red-500 font-semibold'>{companyName}</p>
           <div className="card-actions flex justify-between">
             <div className="badge badge-outline"><img src={downld} alt="" className='h-4 w-4' />{downloads}M</div>
             <div className="badge badge-outline"><img src={ratig} alt=""  className='h-4 w-4'/>{ratingAvg}</div>
           </div>
         </div>
       </div>
       
               </div>
              </Link>
              
               
              </>
           
    );
};

export default Apps;