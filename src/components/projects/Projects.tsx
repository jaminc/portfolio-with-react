import { ReactElement } from "react";

import { Projects as ProjectsType } from "../../types/projects";

import Project from "../project/Project";

const Projects = ({ projects }: { projects: ProjectsType }): ReactElement => {
  return (
    <ul>
      {projects.map((project) => {
        return (
          <li key={project.title}>
            <Project project={project} />
          </li>
        );
      })}
    </ul>
  );
};

export default Projects;
