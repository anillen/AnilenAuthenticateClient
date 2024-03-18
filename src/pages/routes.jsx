import { Layout } from "./Layout/Layout";
import ErrorPage from "./Error/ErrorPage";
import Login from "./Login/Login";
import Users from "./Users/Users";
import Permissions from "./Permissions/Permissions"
import Settings from "./Settings/Settings"
import ActiveSessions from "./ActiveSessions/ActiveSessions"
import Home from "./Home/Home";
import Logout from "./Logout/Logout";

export const routes = [
    {
      path:"/",
      element:<Layout/>,
      errorElement:<ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home />,
          displayName: "Home",
        },
        {
          path: "/users",
          element: <Users />,
          displayName: "Users",
        },
        {
          path: "/permissions",
          element: <Permissions />,
          displayName: "Permissions",
        },
        {
          path: "/sessions",
          element: <ActiveSessions />,
          displayName: "Active sessions",
        },
        {
          path: "/settings",
          element: <Settings />,
          displayName: "Settings",
        },
        {
          path: "/logout",
          element: <Logout/>,
          displayName: "Logout",
        },
      ]
    },
    {
      path:"/login",
      errorElement:<ErrorPage/>,
      element:<Login/>
    }
  ]
  export function getSidebarLinks()
  {
    return routes.find((element)=>{
      if(element.path=='/')
        return true;
    }).children;
  }