import {Outlet, Link } from "react-router-dom";
import "./layout.css";
import React, { useState } from "react";

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            <nav className={isOpen ? "isOpen" : " "}>
                <button onClick={() => setIsOpen(!isOpen)}>&#8801;</button>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Resources">Resources</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Layout;