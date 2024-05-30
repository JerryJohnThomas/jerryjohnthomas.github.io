import React from "react";
import { Link, useParams } from "react-router-dom";
import projectsData from "../projectsData";
import Navbar from "../pages/Navbar";
import "./ProjectDetails.css";
import { GoArrowUpRight } from "react-icons/go";
import { useEffect } from "react";

function ProjectDetails() {
    const { goto } = useParams();
    const project = projectsData.find((proj) => proj.goto === goto);

    if (!project) {
        return <div>Project not found</div>;
    }
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="project-details">
            <Navbar />
            <div className="pd_container">
                <div className="pd_left">
                    <div className="pd_left_top">
                        <div className="pd_title">{project.oneWord}</div>
                        {/* <div className="pd_subtitle">{project.title}</div> */}
                        <div className="pd_subtitle">
                            <Link to={project.link} target="_blank">
                                Go To Site <GoArrowUpRight className="bringDown"/>{" "}
                            </Link>
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
                    <div className="pd_left_bottom">
                        <div>{project.description}</div>
                    </div>
                </div>
                <div className="pd_right">
                    <img src={`${process.env.PUBLIC_URL}/${project.pic}`} alt={project.title} className="card-image pd-image" />
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;
