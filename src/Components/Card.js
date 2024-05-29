import React from "react";
import "./Card.css";
function Card({ data , id}) {
    return (
        <div className="card">
            <div className="card-image-container">
                <img src={data.pic} alt={data.title} className="card-image" />
                <div className="card-title">{data.oneWord}</div>
            </div>
            <p className="card-content">{data.descriptioncontent}</p>
        </div>
    );
}

export default Card;
