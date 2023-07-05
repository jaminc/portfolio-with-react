import { ReactElement } from "react";

import { Project as ProjectType } from "../../types/projects";

const Project = ({ project }: { project: ProjectType }): ReactElement => {
  return (
    <>
      <h3>{project.title}</h3>
      <img src={project.imgSrc} alt="" />
      <div>{project.description}</div>
    </>
  );
};

export default Project;
