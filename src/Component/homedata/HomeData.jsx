// import { Link } from "react-router";
// import Hdatas from "./Hdatas";


// const HomeData = ({homedatas}) => {
//     console.log(homedatas);

    
//     return (
//         <div  className="text-center bg-gray-200 p-2">
//             <h1 className="text-2xl font-semibold">Trending Apps</h1>
//             <p className="text-xs">Explore All Trending Apps on the Market developed by us</p>
//            <div className="grid grid-cols-1 md:grid-cols-4 p-6 gap-2">
//              {
//                 homedatas.map((datas)=><Hdatas key={datas.id} datas={datas}></Hdatas>)
//             }
//            </div>
//            <div className=" flex items-center bg-gray-200  justify-center text-center">
//             <Link to={"allapps"}><button className="  text-xl bg-fuchsia-400 rounded-xl btn">Show All</button></Link>
//            </div>
//         </div>
//     );
// };

// export default HomeData;

import React from 'react';
import Hdatas from '../homedata/Hdatas'

const HomeData = ({ homedatas, installedApps, setInstalledApps }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {homedatas.map((app) => (
                <Hdatas
                    key={app.id}
                    datas={app}
                    installedApps={installedApps}
                    setInstalledApps={setInstalledApps}
                />
            ))}
        </div>
    );
};

export default HomeData;
