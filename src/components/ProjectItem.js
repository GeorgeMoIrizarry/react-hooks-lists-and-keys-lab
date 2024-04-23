import React from "react";

function ProjectItem({ name, about, technologies, keyId }) {
  const techArr = technologies.map((tech) => {
    return <span key={tech}>{tech}</span>
  })
  return (
    <div className="project-item" key={keyId}>
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techArr}
      </div>
    </div>
  );
}

export default ProjectItem;
