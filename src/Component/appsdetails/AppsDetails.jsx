
import { useLoaderData, useParams } from 'react-router';
import downl from "../../assets/icon-downloads.png"
import rating from "../../assets/icon-ratings.png"
import reviwe from "../../assets/icon-review.png"
import { Bar, BarChart, ResponsiveContainer } from 'recharts';
import {
  
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';
import Footer from '../Footer/Footer';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';


const AppsDetails = () => {
    const {id}=useParams()
    const appid=parseInt(id)

    const appsdata=useLoaderData()

     const newdata=appsdata.find(app=>app.id===appid)
     console.log(newdata);

     const {image,title,companyName,ratingAvg,downloads,reviews,ratings,description}=newdata;

     const [isInstalled, setIsInstalled] = useState(false);


     const handelinstall=()=>{

        const getdata=JSON.parse(localStorage.getItem("installlist"));
        let updateddata=[];
        if(getdata){
        
        updateddata = [...getdata,newdata]
        }
        else{
            updateddata.push(newdata)
        }
        localStorage.setItem('installlist',JSON.stringify(updateddata))
        setIsInstalled(true)
        toast.success(`${title} Installed Successfully! 🎉`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    theme: "colored",})

     }
     
     
     return (

       <div className='h-auto bg-gray-200'>
         
        <div className="hero pt-8 h-[300px]  bg-gray-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className='w-30% '>
        <img
      src={image}
      className="max-w-sm rounded-lg h-60 bg-white shadow-2xl"
    />
    </div>
    <div className='w-[900px] pl-12 gap-2 h-auto '>
      <div className='border-b-1 pb-4'>
        <h1 className="text-5xl pb-2 font-bold">{title}</h1>
      <p className="">
        {companyName}
      </p>
      
      </div>
      <div className='w-[300px] pt-4  gap-4 h-[100px] flex justify-between'>
        <div>
            <img src={downl} alt="" srcset="" className='h-8 w-8' />
            <h1 className='text-xs'>Downloads</h1>
            <p className='text-2xl font-semibold'>{downloads}M</p>


        </div>
        <div>
            <img src={rating} alt="" srcset="" className='h-8 w-8' />
            <h1 className='text-xs'>Avarage rating</h1>
            <p className='text-2xl font-semibold'>{ratingAvg}</p>


        </div>
        <div>
            <img src={reviwe} alt="" srcset="" className='h-8 w-8' />
            <h1 className='text-xs'>Total Reviews</h1>
            <p className='text-2xl font-semibold'>{reviews}K</p>


        </div>
      </div>
      <div className='pt-4'>
        <button
          onClick={handelinstall}
          disabled={isInstalled} // ✅ disable condition
          className={`w-[200px] btn ${
            isInstalled ? "bg-gray-400 cursor-not-allowed" : "bg-lime-500"
          }`}
        >
          {isInstalled ? "Installed ✅" : "Install Now (291 MB)"}
        </button>
      </div>
    </div>
   
  </div>
  
</div>
 <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4 text-center">User Ratings Distribution</h1>

        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ratings}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className='text-xls pt-4 p-6'>
        <h1 className='text-2xl font-semibold'>Description</h1>
        <p>{description}</p>
      </div>
      <Footer/>
     <ToastContainer/>
       </div>
    );
};

export default AppsDetails;