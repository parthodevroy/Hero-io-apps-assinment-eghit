
import React from 'react';
import down from "../../assets/icon-downloads.png";
import ratings from "../../assets/icon-ratings.png";
import { toast, ToastContainer } from 'react-toastify';

const Installed = ({ apps, onRemove }) => {
  const { companyName, image, downloads, ratingAvg, title, id } = apps;

  const handelremuve = (id) => {
    const getdata = JSON.parse(localStorage.getItem("installlist")) || [];
    const updateddata = getdata.filter(p => p.id !== id);
    localStorage.setItem("installlist", JSON.stringify(updateddata));

    toast.success(`${title} Uninstalled Successfully!`, {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
    });

    if (onRemove) onRemove(id);
  };

  return (
    <div className="p-2">
      <div
        className="
          hero h-auto md:h-[150px] w-full md:w-[1000px]
          rounded-2xl mx-auto gap-2 p-3 
          flex flex-col md:flex-row justify-between 
          bg-white shadow-sm
        "
      >
        <div className="hero-content flex-col md:flex-row items-center gap-4">
          {/* <div className="flex-shrink-0">
            <img
              src={image}
              alt={title}
              className="rounded-lg w-24 h-24 md:w-20 md:h-20 object-cover shadow-md"
            />
          </div> */}
          <div className="w-full sm:w-[200px] md:w-[200px] h-28 lg:w-[300px] aspect-[4/3] bg-white rounded-xl shadow-md overflow-hidden flex items-center justify-center">
  <img
    src={image}
    alt={title}
    className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
  />
</div>


          <div className="flex flex-col justify-center text-center md:text-left">
            <p className="font-semibold text-base md:text-lg">
              {companyName} <span className="text-gray-500">({title})</span>
            </p>

            <div className="flex flex-row justify-center md:justify-start gap-8 text-lime-500 mt-2">
              <div className="flex flex-col items-center md:items-start">
                <img src={down} alt="" className="h-4 w-4 mx-auto md:mx-0" />
                <h1 className="text-xs pb-1 text-gray-600">Downloads</h1>
                <p className="text-lg font-semibold">{downloads}M</p>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <img src={ratings} alt="" className="h-4 w-4 mx-auto md:mx-0" />
                <h1 className="text-xs pb-1 text-gray-600">Avg. Rating</h1>
                <p className="text-lg font-semibold">{ratingAvg}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end mt-4 md:mt-0">
          <button
            onClick={() => handelremuve(id)}
            className="btn btn-neutral w-[120px] text-sm md:text-base"
          >
            Uninstall
          </button>
        </div>
      </div>
    </div>
  );
};

export default Installed;
