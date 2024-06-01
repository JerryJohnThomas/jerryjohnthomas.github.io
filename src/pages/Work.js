import React from "react";
import { motion } from "framer-motion";
import TimedEvent from "./TimedEvent";
import { workData } from "./workData";

function Work() {
    return (
        <div className="page1">
            <div className="header_container">
                <div className="header_text">
                    <div className="intro_title_container  pd_title">
                        <motion.div initial={{ y: "120%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                            Work Experience
                        </motion.div>
                    </div>
                </div>
                <div className="te_global_container">
                    {workData.map((data, id) => {
                        return <TimedEvent
                            title={data.title}
                            subtitle={data.subtitle}
                            location={data.location}
                            time={data.time}
                            description={data.description}
                        />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Work;
