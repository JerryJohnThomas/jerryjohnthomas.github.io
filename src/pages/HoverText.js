import React from 'react';
import './HoverText.css';
import { GoArrowUpRight } from 'react-icons/go';

function HoverText({ text, hoverText }) {
    return (
        <div className="hover-text-container">
            <span className="hover-text" data-hover={hoverText}>
                {text}
                <GoArrowUpRight />
            </span>
        </div>
    );
}

export default HoverText;
