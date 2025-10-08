import React from 'react';
import download from "../../assets/icon-downloads.png"

import rating from "../../assets/icon-ratings.png"

const Hdatas = ({datas}) => {
    console.log(datas);
    const {image,companyName,downloads,ratingAvg}=datas
    
    return (
       <>
        <div>
            <div className="card bg-base-100 w-full md:w-70 bg-white p-2 h-[300px] shadow-sm">
  <div className='h-[400px] w-[250px] mx-auto bg-gray-200 '>
    <figure className='w-[170px] h-[150px] mx-auto'>
    <img
      src={image}
      alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
  </figure>
  </div>
  <div className="card-body">
    
    <p>{companyName}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline"><img src={download} alt="" className='h-4 w-4' />{downloads}M</div>
      <div className="badge badge-outline"><img src={rating} alt=""  className='h-4 w-4'/>{ratingAvg}</div>
    </div>
  </div>
</div>

        </div>
        
       </>
    
    );
};

export default Hdatas;