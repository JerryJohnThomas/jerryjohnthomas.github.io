import React, { useEffect } from "react";
import "./Home.css";
import Sample from "./Sample";
import Sample2 from "./Sample2";
import Navbar from "./Navbar";
import Card from "../Components/Card";
import Footer from "./Footer";
import { motion } from "framer-motion";
import ExperimentTitle from "./ExperimentTitle";
import IntroTitle from "./IntroTitle";
import Work from "./Work";
import Education from "./Education";
import UnderGradProjects from "./UnderGradProjects";
import { projectsData } from "./Data";
import ReactGA from "react-ga4";
import Research from "./Research";

function Home() {
    useEffect(() => {
        ReactGA.initialize("G-QG1ZRZHFQB");
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }, []);
    return (
        <>
            <Navbar />
            <IntroTitle />
            <Work />
            <Education />
            <Research />
            <UnderGradProjects />
            <ExperimentTitle />
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
        </>
    );
}

export default Home;
