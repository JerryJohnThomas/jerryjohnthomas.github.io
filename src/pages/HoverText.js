import React from "react";
import "./HoverText.css";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import ReactGA from 'react-ga4';

function HoverText({ text, hoverText, to, mail }) {
    const handleMailTo = () => {
        handleButtonClick();
        window.location.href = `mailto:${mail}`;
    };

    const handleButtonClick = () => {
        ReactGA.event({
          category: 'User',
          action: `Exp :+${text}`
        });
      };
    return (
        <div className="hover-text-container">
            {to != null ? (
                <Link to={to} onClick={handleButtonClick} target="_blank">
                    <span className="hover-text" data-hover={hoverText}>
                        {text}
                    </span>
                    <GoArrowUpRight />
                </Link>
            ) : (
                <div onClick={handleMailTo} target="_blank">
                    <span className="hover-text" data-hover={hoverText}>
                        {text}
                    </span>
                    <GoArrowUpRight />
                </div>
            )}
        </div>
    );
}

export default HoverText;
