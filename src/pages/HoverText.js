import React from "react";
import "./HoverText.css";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

function HoverText({ text, hoverText, to, mail }) {
    const handleMailTo = () => {
        window.location.href = `mailto:${mail}`;
    };
    return (
        <div className="hover-text-container">
            {to != null ? (
                <Link to={to} target="_blank">
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
