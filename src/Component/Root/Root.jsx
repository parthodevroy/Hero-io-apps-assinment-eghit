import { Outlet } from "react-router";
import Navber from "../Navber/Navber";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
  return (
    <div>
      <Navber />
      <Outlet />
      {/* ✅ Root level ToastContainer */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Root;
