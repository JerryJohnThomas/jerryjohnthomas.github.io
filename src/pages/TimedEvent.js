import React from "react";
import "./TimedEvent.css";

function TimedEvent({ title, location, subtitle, description, time }) {
    return (
        <>
            <div className="te_conatiner">
                <div className="te_left">
                    <div className="te_left_first_row">
                        <div className="te_left_together">
                            <div className="te_title">{title}</div>
                            <div className="te_location">{location}</div>
                        </div>
                        <div className="te_time">{time}</div>
                    </div>
                    <div className="te_subtitle">{subtitle}</div>
                    <div className="te_des">{description}</div>
                </div>
            </div>
        </>
    );
}

export default TimedEvent;
