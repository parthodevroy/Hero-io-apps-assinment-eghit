import { Outlet } from "react-router";
import Navber from "../Navber/Navber";
import Footer from "../Footer/Footer";
import Papps from "../Productiveapps/Papps";
import Mobileimg from "../Mobileimagesection/Mobileimg";


const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Papps></Papps>
            <Mobileimg></Mobileimg>
            <Footer></Footer>
        </div>
    );
};

export default Root;