import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Navbar() {

    let handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Use smooth scrolling behavior
        });
    };
     
    return (
            <div className="sticky">
                <motion.div initial={{ y: "-100%", opacity: 1 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                    <div className="navbar_container navbar_text">
                        <div className="nav_left">
                            <Link to="/" onClick={handleClick}> JERRY </Link>
                        </div>
                        <div className="nav_right">
                            <Link to="/"  onClick={handleClick}> MENU</Link>
                        </div>
                    </div>
                </motion.div>
            </div>
    );
}

export default Navbar;
