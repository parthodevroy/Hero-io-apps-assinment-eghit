// import React from 'react';
// import Papps from '../Productiveapps/Papps';
// import Mobileimg from '../Mobileimagesection/Mobileimg';
// import Feedback from '../Feedback';
// import Footer from "../Footer/Footer"
// import { useLoaderData } from 'react-router';
// import HomeData from '../homedata/HomeData';

// const Homes = () => {

//     const homedatas=useLoaderData()
    
    
//     return (
//         <div>
//             <Papps></Papps>
//             <Mobileimg></Mobileimg>
//             <Feedback></Feedback>
//             <HomeData homedatas={homedatas}></HomeData>
//             <Footer></Footer>
//         </div>
//     );
// };

// export default Homes;
import React, { useState, useEffect } from 'react';
import Papps from '../Productiveapps/Papps';
import Mobileimg from '../Mobileimagesection/Mobileimg';
import Feedback from '../Feedback';
import Footer from "../Footer/Footer"
import { useLoaderData } from 'react-router';
import HomeData from '../homedata/HomeData';

const Homes = () => {
    const homedatas = useLoaderData();

    // Installed apps state
    const [installedApps, setInstalledApps] = useState(
        JSON.parse(localStorage.getItem("installlist")) || []
    );

    // localStorage update হবে যখন installedApps পরিবর্তিত হবে
    useEffect(() => {
        localStorage.setItem("installlist", JSON.stringify(installedApps));
    }, [installedApps]);

    return (
        <div>
            <Papps />
            <Mobileimg />
            <Feedback />
            {/* Pass installedApps and setInstalledApps */}
            <HomeData
                homedatas={homedatas}
                installedApps={installedApps}
                setInstalledApps={setInstalledApps}
            />
            <Footer />
        </div>
    );
};

export default Homes;
