import Root from "../Root/Root.jsx"
import Error from "../errorpage/Error.jsx"
import Homes from "../Home/Homes.jsx";
import AllApps from "../AllApps/AllApps.jsx";
import InstallApps from "../AllApps/InstallApps.jsx";
import { createBrowserRouter } from "react-router";
import AppsDetails from "../appsdetails/AppsDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        loader:()=>fetch("/homedata.json"),
        element:<Homes/>
        
      },
      {
        path:"allapps",
        loader:()=>fetch("/allappsdata.json"),
        element:<AllApps/>

      },
      {
        // path:"insapps",
        // element:<InstallApps/>
         path: "/insapps",
  element: <InstallApps />,
  loader: async () => {
    // simulate loading delay
    return new Promise(resolve => setTimeout(resolve, 200));
  }
      },
      {
        path:'/appdetails/:id',
        loader:()=>fetch("/allappsdata.json"),
        element:<AppsDetails/>
      }
    ]
  },
]);
export default router;