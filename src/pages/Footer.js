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
                    <div className="hover-text1">
                        Linkedin
                        <GoArrowUpRight />
                    </div>
                    <div className="hover-text2">
                        Github
                        <GoArrowUpRight />
                    </div>
                    <div className="hover-text3">
                        Medium
                        <GoArrowUpRight />
                    </div>
                    <div className="hover-text4">
                        Gmail
                        <GoArrowUpRight />
                    </div>
                    <HoverText text="asd" hoverText="asd"></HoverText>
                    <HoverText text="asd1" hoverText="asd1"></HoverText>
                </div>
            </div>
            <div className="footer_right"></div>
        </div>
    );
}

export default Footer;
