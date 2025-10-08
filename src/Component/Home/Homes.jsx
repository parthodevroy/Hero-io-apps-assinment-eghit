import React from 'react';
import Papps from '../Productiveapps/Papps';
import Mobileimg from '../Mobileimagesection/Mobileimg';
import Feedback from '../Feedback';
import Footer from "../Footer/Footer"
import { useLoaderData } from 'react-router';
import HomeData from '../homedata/HomeData';

const Homes = () => {

    const homedatas=useLoaderData()
    
    
    return (
        <div>
            <Papps></Papps>
            <Mobileimg></Mobileimg>
            <Feedback></Feedback>
            <HomeData homedatas={homedatas}></HomeData>
            <Footer></Footer>
        </div>
    );
};

export default Homes;