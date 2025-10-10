import React from 'react';
import download from "../../assets/icon-downloads.png"

import rating from "../../assets/icon-ratings.png"
import { Link } from 'react-router';

const Hdatas = ({datas}) => {
    console.log(datas);
    const {image,title,downloads,ratingAvg,id}=datas
    
    return (
       <>
        <Link to={`/appdetails/${id}`}>

        <div>
            <div className="card bg-base-100 w-full md:w-70 bg-white p-2 h-[300px] shadow-sm">
  <div className='h-[400px] w-[250px] mx-auto bg-gray-200 '>
    <figure className='w-[170px] h-[150px] mx-auto'>
    <img
      src={image}
      alt=""  className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"/>
  </figure>
  </div>
  <div className="card-body">
    
    <p>{title}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline"><img src={download} alt="" className='h-4 w-4' />{downloads}M</div>
      <div className="badge badge-outline"><img src={rating} alt=""  className='h-4 w-4'/>{ratingAvg}</div>
    </div>
  </div>
</div>

        </div>
        </Link>
        
       </>
    
    );
};

export default Hdatas;