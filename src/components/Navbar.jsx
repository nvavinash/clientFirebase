import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react"
import { useAuth } from "../store/auth";

export const Navbar = ()=>{

    const {isLoggedIn} = useAuth();

 

    return(
        <>
    <header>
        <div className="container">
            
            <div className="logo-brand">
            <img src="https://cdn.pixabay.com/photo/2016/04/02/21/01/earth-1303628_1280.png" alt="logo.png" width={"40px"} height={"40px"}/>
                <h4><NavLink to="/">CodViq</NavLink></h4>
            </div>
            <nav>
                <ul>
                    <li> <NavLink to ="/">Home</NavLink></li>
                    <li> <NavLink to ="/about">About</NavLink></li>
                    <li> <NavLink to ="/service">Service</NavLink></li>
                    <li> <NavLink to ="/contact">Contact</NavLink></li>
                    {isLoggedIn ? 
                    <li> <NavLink to ="/logout">Logout</NavLink></li> : 
                    <>
                    <li> <NavLink to ="/register">Register</NavLink></li>
                    <li> <NavLink to ="/login">Login</NavLink></li>
                    </>}
                   
                </ul>
            </nav>

        </div>
       
    </header>
    </>)
}