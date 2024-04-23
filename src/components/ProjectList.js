import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const proJects = projects.map((projectObj) => {
    console.log(projectObj)
    return <ProjectItem key={projectObj.id} name={projectObj.name} about={projectObj.about} technologies={projectObj.technologies}/>
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{proJects}</div>
    </div>
  );
}

export default ProjectList;
