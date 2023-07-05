import { ReactElement } from "react";

import { Projects as ProjectsType } from "../../types/projects";

const Projects = ({ projects }: { projects: ProjectsType }): ReactElement => {
  return (
    <>
      {projects.map((project) => {
        return (
          <>
            <h3>{project.title}</h3>
            <img src={project.imgSrc} alt="" />
            <div>{project.description}</div>
          </>
        );
      })}
    </>
  );
};

export default Projects;
