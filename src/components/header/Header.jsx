import React from "react";
import logo from "/logo.jpg";
import "./Header.css";
import { nav } from "../../assets/data/data/data";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import User from "../User";

const Header = () => {
    return (
        <header>
            <div className="scontainer flex">
                <div className="logo">
                    <img src={logo} alt="logo" width="100px" />
                </div> 
            <nav>
                <ul>
                    {nav.map((link) => (
                        <li key={link.id}>
                            <Link to = {link.url}>{link.text}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="account flexCenter">
                <User/>
            </div> 
            </div>
        </header>
    )
}

export default Header