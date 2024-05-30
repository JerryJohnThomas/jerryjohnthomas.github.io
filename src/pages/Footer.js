import React from "react";
import "./Footer.css";
import { GoArrowUpRight } from "react-icons/go";
import HoverText from "./HoverText"

function Footer() {
    
    return (
        <div className="footer_container">
            <div className="footer_left">
                <div className="footer_title">Connect with me</div>
                <div className="connect_links ">
                    <HoverText text="Linkedin" hoverText="L7nk3diN" to="https:linkedin.com/in/jerry-john-thomas"></HoverText>
                    <HoverText text="Github" hoverText="G7Th8B" to="https://github.com/JerryJohnThomas/"></HoverText>
                    <HoverText text="Medium" hoverText="M3d1uW"to="https://medium.com/@jerryjohnthomas"></HoverText>
                    <HoverText text="Gmail" hoverText="gWaiL" mail="jerryjohnthomascareer@gmail.com"></HoverText>
                </div>
            </div>
            <div className="footer_right"></div>
        </div>
    );
}

export default Footer;
