import React from "react";
import "./Card.css";
import { IoMdArrowForward } from "react-icons/io";
import { PiArrowRightThin } from "react-icons/pi";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

function Card({ data, id }) {
    return (
        <div className="card">
            <Link to={`project/${data.goto}`}>
                <div className="card-image-container">
                    <div className="tags_container">
                        {data.tags.map((tag, tag_id) => {
                            return (
                                <div className="tag" key={tag_id + "a" + id}>
                                    {tag}
                                </div>
                            );
                        })}
                    </div>
                    <div className="circle_arrow">
                        <GoArrowUpRight size={25} />
                    </div>
                    <img src={data.pic} alt={data.title} className="card-image" />
                    <div className="card-title">{data.oneWord}</div>
                </div>
                <p className="card-content">{data.descriptioncontent}</p>
            </Link>
        </div>
    );
}

export default Card;
