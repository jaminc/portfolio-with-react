import { ReactElement } from "react";

import { Project as ProjectType } from "../../types/projects";

import styles from "./project.module.css";

const Project = ({ project }: { project: ProjectType }): ReactElement => {
  return (
    <div className={styles.container}>
      <a href={project.pageLink || project.sourceCodeLink}>
        <img src={project.imgSrc} alt="" className={styles.image} />
      </a>
      <div>
        <h3>{project.title}</h3>
        <div>{project.description}</div>
        <div>
          <a href={project.sourceCodeLink}>Github Page</a>
          {project.pageLink && <a href={project.pageLink}>Project Page</a>}
        </div>
      </div>
    </div>
  );
};

export default Project;
