import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../projectsData';

function ProjectDetails() {

  const { goto } = useParams();
  const project = projectsData.find(proj => proj.goto === goto);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-details">
      <h1>{project.title}</h1>
      <img src={project.pic} alt={project.title} className="project-image" />
      <p>{project.descriptioncontent}</p>
      <div className="tags">
        {project.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectDetails;
