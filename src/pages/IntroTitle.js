import React from "react";
import { motion } from "framer-motion";
import "./IntroTitle.css";
import TimedEvent from "./TimedEvent";

function IntroTitle() {
    return (
        <>
            <div className="page1">
                <div className="intro_container">
                    <div className="header_text">
                        <div className="intro_title_container jerry_intro">
                            <motion.div initial={{ y: "120%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                                Jerry John Thomas
                            </motion.div>
                        </div>
                        <div className="header_subtitle intro_subtitle ">
                            <div>
                                I'm a software engineer with experience in building applications, graphics. Passionate about applying AI, particularly
                                RL, to solve real-world problems.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           
        </>
    );
}

export default IntroTitle;
