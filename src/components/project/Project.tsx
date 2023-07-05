import { ReactElement } from "react";

import { Project as ProjectType } from "../../types/projects";

import styles from "./project.module.css";

const Project = ({ project }: { project: ProjectType }): ReactElement => {
  return (
    <div className={styles.container}>
      <div>
        <img src={project.imgSrc} alt="" className={styles.image} />
      </div>

      <div>
        <h3>{project.title}</h3>
        <div>{project.description}</div>
      </div>
    </div>
  );
};

export default Project;
