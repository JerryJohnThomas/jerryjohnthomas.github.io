import React from "react";
import "./TimedEvent.css";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

function TimedEvent({ title, location, subtitle, description, time, phTime, link }) {
    return (
        <>
            <div className="te_conatiner">
                <div className="te_left">
                    <div className="te_left_first_row">
                        <div className="te_left_together">
                            <div className="te_title">{title}</div>
                            {location ? <div className="te_location">{location}</div> : null}
                            {link ? (
                                <div className="te_location te_link">
                                    <Link to={link} target="_blank">
                                        MORE <GoArrowUpRight />
                                    </Link>
                                </div>
                            ) : null}
                        </div>
                        <div className="te_time te_timeOpa">{time}</div>
                        <div className="te_time te_phtimeOpa">{phTime}</div>
                    </div>
                    <div className="te_subtitle">{subtitle}</div>
                    <div className="te_des">{description}</div>
                </div>
            </div>
        </>
    );
}

export default TimedEvent;
