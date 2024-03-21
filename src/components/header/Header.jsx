import React from "react";
import logo from "/logo.jpg";
import "./Header.css";
import { nav } from "../../assets/data/data/data";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import User from "../User";

const Header = () => {
    window.addEventListener("scroll", function(){
        const header = this.document.querySelector(".header");
        header.classList.toggle("active", window.scrollY > 0)
    })
    return (
        <>
            <header className="header">
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

            <section>
                
            </section>
        </>
    )
}

export default Header