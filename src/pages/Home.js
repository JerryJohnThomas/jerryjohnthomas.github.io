import React from "react";
import "./Home.css";
import Sample from "./Sample";
import Sample2 from "./Sample2";
import Navbar from "./Navbar";
import Card from "../Components/Card";
import projectsData from "../projectsData";
import Footer from "./Footer";
import { motion } from "framer-motion";

function Home() {
    return (
        <>
            <div className="home_container">
                <Navbar />
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
                                <motion.div initial={{ y: "120%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 , delay:0.2}} >
                                EXPERIMENTS
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                                <motion.div initial={{ y: "20%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <div className="page2">
                    <div className="card-container">
                        {projectsData.map((data, id) => {
                            return <Card data={data} key={id} id={id} />;
                        })}
                    </div>
                </div>
                </motion.div>
                <Footer />
            </div>
        </>
    );
}

export default Home;
