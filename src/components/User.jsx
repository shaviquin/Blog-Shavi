import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { RiImageAddLine } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';
import {BsBagCheck} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai';
import {GrHelp} from 'react-icons/gr';
import {BiLogOut} from 'react-icons/bi';
import { useState } from "react";

const User = () => {
    const user = true

    const [profileOpen, setProfileOpen] = useState(false)

    const close = () => {
        setProfileOpen(false)
    }
    
    return (
        <>
            <div className="profile">
                {user ? (
                    <>
                    <button className="img" onClick={() => setProfileOpen(!profileOpen)}>
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" />
                    </button>
                
                {profileOpen && (
                    <div className="openProfile boxItems" onClick={close}>
                    <Link to="/account">
                        <div className="image">
                            <div className="img">
                                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" />
                            </div>
                            <div className="text">
                                <h4>Eden Smith</h4>
                                <p>Los Angeles, CA</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/create">
                        <button className="box">
                            <RiImageAddLine className="icon" />
                            <h4>Create Post</h4>
                        </button>
                    </Link>
                    <Link to="/myaccount">
                        <button className="box">
                            <IoSettingsOutline className="icon" />
                            <h4>My account</h4>
                        </button>
                    </Link>
                    <Link to="/myorders">
                        <button className="box">
                            <BsBagCheck className="icon" />
                            <h4>My Order</h4>
                        </button>
                    </Link>
                    <Link to="/wishlist">
                        <button className="box">
                            <AiOutlineHeart className="icon" />
                            <h4>Wishlist</h4>
                        </button>
                    </Link>
                    <Link to="/help">
                        <button className="box">
                            <GrHelp className="icon" />
                            <h4>Help</h4>
                        </button>
                    </Link>
                    <Link to="/logout">
                        <button className="box">
                            <BiLogOut className="icon" />
                            <h4>Log out</h4>
                        </button>
                    </Link>
                </div>
                )}
                    </>
                ): ( 
                    <Link to = "/login" >
                        <button>My Account</button>
                    </Link>
                )}
            </div>
       </>        
    );
};

export default User