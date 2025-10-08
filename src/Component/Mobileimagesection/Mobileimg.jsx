import mobileimg from "../../assets/hero.png"
import Feedback from "../Feedback";

const Mobileimg = () => {
    return (
        <>

       <div className="flex justify-center  bg-gray-200">
            <img src={mobileimg} alt="" srcset=""  className="w-[400px] h-[200px] "/>
        </div>
        </>
    );
};

export default Mobileimg;