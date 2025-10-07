import { createBrowserRouter } from "react-router";
import Root from "../Root.jsx/Root";
import Home from "../Home/Home";

 export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/home",
        element:<Home></Home>
      }
    ]
  },
]);