import Root from "../Root/Root.jsx"
import Error from "../errorpage/Error.jsx"
import Homes from "../Home/Homes.jsx";
import AllApps from "../AllApps/AllApps.jsx";
import InstallApps from "../AllApps/InstallApps.jsx";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Homes/>
        
      },
      {
        path:"allapps",
        element:<AllApps/>

      },
      {
        path:"insapps",
        element:<InstallApps/>
      }
    ]
  },
]);
export default router;