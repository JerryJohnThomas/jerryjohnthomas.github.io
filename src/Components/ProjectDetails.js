import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../pages/Navbar";
import "./ProjectDetails.css";
import { GoArrowUpRight } from "react-icons/go";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { projectsData } from "../pages/Data";

function ProjectDetails() {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []); 

    const { goto } = useParams();
    const project = projectsData.find((proj) => proj.goto === goto);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="project-details">
            <Navbar />
            <div className="pd_container">
                <div className="pd_left">
                    <div className="pd_left_top">
                        <div className="home_title_container">
                            <motion.div initial={{ y: "100%", opacity: 1 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                                <div className="pd_title">{project.oneWord}</div>
                            </motion.div>
                        </div>
                        <div className="home_title_container">
                            <motion.div initial={{ y: "80%", opacity: 1 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}>
                                <div className="pd_subtitle">
                                    <Link to={project.link} target="_blank">
                                        Go To Site <GoArrowUpRight className="bringDown" />{" "}
                                    </Link>
                                </div>
                            </motion.div>
                        </div>

                        <div className="tags_container_pd">
                            {project.tags.map((tag, tag_id) => {
                                return (
                                    <div className="tag" key={tag_id + "project_Details"}>
                                        {tag}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="home_title_container">
                        <motion.div initial={{ y: "80%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}>
                            <div className="pd_left_bottom">
                                <div>{project.description}</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="pd_right">
                    <div className="home_title_container">
                        <motion.div initial={{ y: "20%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}>
                            <img src={`${process.env.PUBLIC_URL}/${project.pic}`} alt={project.title} className="card-image pd-image" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;
