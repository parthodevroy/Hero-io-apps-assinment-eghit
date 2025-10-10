

import React from "react";
import download from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import { Link } from "react-router";


const Hdatas = ({ datas}) => {
    const { image, title, downloads, ratingAvg, id } = datas;

    

    return (
        <div className="card p-2 shadow-sm bg-white">
            <Link to={`/appdetails/${id}`}>
                <img
                    src={image}
                    alt={title}
                    className="h-40 mx-auto object-contain transition-transform duration-300 hover:scale-105"
                />
                <h2 className="mt-2 font-semibold">{title}</h2>
                <div className="flex justify-between mt-1">
                    <div className="flex items-center gap-1">
                        <img src={download} alt="" className="h-4 w-4" />
                        {downloads}M
                    </div>
                    <div className="flex items-center gap-1">
                        <img src={rating} alt="" className="h-4 w-4" />
                        {ratingAvg}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Hdatas;
