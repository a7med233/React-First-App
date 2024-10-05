import React from "react";
import './header.css'
import { useState } from "react";



const Header =() =>{
    return (
        <header className="flex">
            <nav className="border">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Service</a></li>
                    <li><a className="last" href="">Join Us</a></li>
                </ul>
                <button className="LightMode">Light</button>
            </nav>
        </header> 
    )
}

export default Header;