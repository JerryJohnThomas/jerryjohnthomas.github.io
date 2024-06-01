import React from "react";
import { motion } from "framer-motion";
import TimedEvent from "./TimedEvent";
import { UnderGradProjectsData } from "./Data";

function UnderGradProjects() {
    return (
        <div className="page1">
            <div className="work_container">
                <div className="header_text">
                    <div className="intro_title_container  pd_title work_title">
                        <motion.div initial={{ y: "120%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                            Projects
                        </motion.div>
                    </div>
                </div>
                <div className="te_global_container">
                    {UnderGradProjectsData.map((data, id) => {
                        return (
                            <TimedEvent
                                key={`work-${id}`}
                                phTime={data.phTime}
                                title={data.title}
                                subtitle={data.subtitle}
                                location={data.location}
                                time={data.time}
                                description={data.description}
                                link={data.link}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default UnderGradProjects;
