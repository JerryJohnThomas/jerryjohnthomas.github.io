import React from "react";
import { motion } from "framer-motion";

function ExperimentTitle() {
    return (
        <div className="page1">
            <div className="header_container">
                <div className="header_subtitle">My Gallery of</div>
                <div className="header_text">
                    <div className="home_title_container">
                        <motion.div initial={{ y: "120%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                            BINARY
                        </motion.div>
                    </div>
                    <div className="home_title_container">
                        <motion.div initial={{ y: "120%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                            EXPERIMENTS
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperimentTitle;
