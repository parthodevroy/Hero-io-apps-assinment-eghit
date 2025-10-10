
import { useLoaderData, useParams } from 'react-router';
import downl from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import reviwe from "../../assets/icon-review.png";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import Footer from '../Footer/Footer';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Emptyapps from '../Emptyapps';

const AppsDetails = () => {
  const { id } = useParams();
  const appid = parseInt(id);
  const appsdata = useLoaderData();

  const installedApps = JSON.parse(localStorage.getItem("installlist")) || [];
  const [isInstalled, setIsInstalled] = useState(installedApps.some(app => app.id === appid));

  const handleInstall = () => {
    const getdata = JSON.parse(localStorage.getItem("installlist")) || [];
    if (!getdata.find(app => app.id === appid)) {
      const updated = [...getdata, newdata];
      localStorage.setItem("installlist", JSON.stringify(updated));
      setIsInstalled(true);
      toast.success(`${title} Installed Successfully! 🎉`, { position: "top-center", autoClose: 2000, theme: "colored" });
    }
  };

  const newdata = appsdata.find(app => app.id === appid);

  if (!newdata) return <Emptyapps />;

  const { image, title, companyName, ratingAvg, downloads, reviews, ratings, description } = newdata;


  const handleUninstall = () => {
    const getdata = JSON.parse(localStorage.getItem("installlist")) || [];
    const updated = getdata.filter(app => app.id !== appid);
    localStorage.setItem("installlist", JSON.stringify(updated));
    setIsInstalled(false);
    toast.info(`${title} Uninstalled ✅`, { position: "top-center", autoClose: 2000, theme: "colored" });
  };

  return (
    <div className="h-auto bg-gray-100">
      <div className="hero pt-8 px-4 md:px-10 lg:px-20">
        <div className="hero-content flex flex-col lg:flex-row items-center lg:items-start gap-6 bg-gray-200 p-4 rounded-xl shadow-md w-full">
          
  
          <div className="w-full sm:w-[200px] md:w-[250px] lg:w-[300px] aspect-[4/3] bg-white rounded-xl shadow-md overflow-hidden flex items-center justify-center">
            <img
              src={image}
              alt={title}
              className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="w-full lg:w-[700px] flex flex-col gap-4">
            <div className="border-b pb-2">
              <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
              <p className="text-gray-600 text-sm md:text-base">{companyName}</p>
            </div>

          
            <div className="flex flex-col sm:flex-row justify-between gap-6 pt-2">
              <div className="flex flex-col items-center sm:items-start">
                <img src={downl} alt="" className="h-6 w-6 mb-1" />
                <h1 className="text-xs text-gray-500">Downloads</h1>
                <p className="text-xl font-semibold">{downloads}M</p>
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <img src={rating} alt="" className="h-6 w-6 mb-1" />
                <h1 className="text-xs text-gray-500">Average Rating</h1>
                <p className="text-xl font-semibold">{ratingAvg}</p>
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <img src={reviwe} alt="" className="h-6 w-6 mb-1" />
                <h1 className="text-xs text-gray-500">Total Reviews</h1>
                <p className="text-xl font-semibold">{reviews}K</p>
              </div>
            </div>

            <div className="pt-4 flex justify-center lg:justify-start gap-4">
              <button
                onClick={isInstalled ? handleUninstall : handleInstall}
                disabled={isInstalled}
                className={`w-[200px] btn text-white font-semibold ${
                  isInstalled ? "bg-gray-400 cursor-not-allowed" : "bg-lime-500 hover:bg-lime-600"
                }`}
              >
                {isInstalled ? "Installed ✅" : "Install Now (291 MB)"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-10">
        <h1 className="text-2xl font-semibold mb-4 text-center">User Ratings Distribution</h1>
        <div className="h-60 bg-white rounded-xl shadow-sm p-2 md:p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ratings}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#4ade80" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Description */}
      <div className="p-4 md:p-10">
        <h1 className="text-2xl font-semibold mb-2">Description</h1>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export default AppsDetails;
