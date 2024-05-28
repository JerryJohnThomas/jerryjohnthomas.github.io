import React from "react";
import "./Home.css";
import Sample from "./Sample";
import Sample2 from "./Sample2";
import Navbar from "./Navbar";
import Card from "../Components/Card";
import projectsData from "../projectsData";
function Home() {
    return (
        <>
            <div className="home_container">
                <Navbar />
                <div className="page1">
                    <div className="header_container">
                        <div className="header_subtitle">My Gallery of</div>
                        <div className="header_text">
                            BINARY
                            <br />
                            EXPERIMENTS
                        </div>
                    </div>
                </div>
                <div className="page2">
                    <div className="card-container">
                        {projectsData.map((data, id) => {
                            return <Card data={data} key={id} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
