import React from "react";
import { Navigate, Outlet } from "react-router-dom"
import useAuth from "./auth";
const ProtectedRoute =()=>{
    const isAuth= useAuth();
    console.log("isAuth",isAuth)
    return isAuth?<Outlet/>:<Navigate to="/"/>
}

export default ProtectedRoute;