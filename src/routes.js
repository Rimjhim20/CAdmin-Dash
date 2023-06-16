import React from "react";
import Analytics from 'views/admin/analytics'
// Admin Imports
import Settings from 'views/admin/settings';
import MainDashboard from "views/admin/default";
import Access from "views/admin/accesscontrol";
import Profile from "views/admin/profile";
import Users from "views/admin/users";

// Auth Imports
import SignIn from "views/auth/SignIn";
// import SignUp from "views/auth/Signup";
// Icon Imports
import {
  MdHome,
  MdVpnKey,
  MdBarChart,
  MdPerson,
  MdPeople,
  MdLock,
  MdSettings
} from "react-icons/md";

const routes = [
  {
    name: "Admin Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
 
  {
    name: "Users",
    layout: "/admin",
    icon: <MdPeople className="h-6 w-6" />,
    path: "data-tables",
    component: <Users />,
  },
  {
    name: "Access control",
    layout: "/admin",
    path: "nft-marketplace",
    icon: <MdVpnKey className="h-6 w-6" />,
    component: <Access />,
    secondary: true,
  },
  {
    name: "Analytics",
    layout: "/admin",
    path: "analytics",
    icon: <MdBarChart className="h-6 w-6" />,
    component: <Analytics />,
  },
  {
    name: "Settings",
    layout: "/admin",
    icon: <MdSettings className="h-6 w-6" />,
    path: "demo",
    component: <Settings />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  // {
  //   name: "Sign Up",
  //   layout: "/auth",
  //   path: "sign-up",
  //   icon: <MdLock className="h-6 w-6" />,
  //   component: <SignUp />,
  // }
 
];
export default routes;
