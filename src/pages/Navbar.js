import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <>
            <div className="navbar_container navbar_text">
                <div className="nav_left">
                    <Link to="/"> JERRY </Link>
                </div>
                <div className="nav_right">
                    <Link to="/"> MENU</Link>
                </div>
            </div>
        </>
    );
}

export default Navbar;
