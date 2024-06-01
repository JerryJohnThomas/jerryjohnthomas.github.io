import React from "react";
import { motion } from "framer-motion";
import TimedEvent from "./TimedEvent";
import { educationData } from "./Data";

function Education() {
    return (
        <div className="page1">
            <div className="work_container">
                <div className="header_text">
                    <div className="intro_title_container  pd_title work_title">
                        <motion.div initial={{ y: "120%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                            Education
                        </motion.div>
                    </div>
                </div>
                <motion.div initial={{ y: "120%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                    <div className="te_global_container">
                        {educationData.map((data, id) => {
                            return (
                                <TimedEvent
                                    key={`work-${id}`}
                                    phTime={data.phTime}
                                    title={data.title}
                                    subtitle={data.subtitle}
                                    location={data.location}
                                    time={data.time}
                                    description={data.description}
                                />
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Education;
