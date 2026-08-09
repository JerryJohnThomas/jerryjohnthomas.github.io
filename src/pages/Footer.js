import React from "react";
import "./Footer.css";
import { GoArrowUpRight } from "react-icons/go";
import HoverText from "./HoverText"
import ReactGA from 'react-ga4';

function Footer() {

    
    return (
        <div className="footer_container">
            <div className="footer_left">
                <div className="footer_title">Connect with me</div>
                <div className="connect_links ">
                    <HoverText text="Linkedin" hoverText="L7nk3diN" to="https://linkedin.com/in/jerry-john-thomas"></HoverText>
                    <HoverText text="Github" hoverText="G7Th8B" to="https://github.com/JerryJohnThomas/"></HoverText>
                    <HoverText text="Medium" hoverText="M3d1uW"to="https://medium.com/@jerryjohnthomas"></HoverText>
                    <HoverText text="Gmail" hoverText="gWaiL" mail="jerryjohnthomascareer@gmail.com"></HoverText>
                    <div className="hover-text-container">
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                           onClick={() => ReactGA.event({ category: 'User', action: 'Exp :+Resume' })}>
                            <span className="hover-text" data-hover="R3sUm3">Résumé</span>
                            <GoArrowUpRight />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer_right"></div>
        </div>
    );
}

export default Footer;
