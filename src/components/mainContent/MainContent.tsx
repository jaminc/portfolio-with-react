import { ReactElement } from "react";

import jobs from "../../data/jobs";
import projects from "../../data/projects";

import ContentSection from "../contentSection/ContentSection";
import AboutMe from "../aboutMe/AboutMe";
import Jobs from "../jobs/Jobs";
import Projects from "../projects/Projects";

import styles from "./main-content.module.css";

const MainContent = (): ReactElement => {
  return (
    <div>
      <ContentSection title="About Me" className={styles.mainContentSection}>
        <AboutMe />
      </ContentSection>

      <ContentSection
        title="Work Experience"
        className={styles.mainContentSection}
      >
        <Jobs jobs={jobs} />
      </ContentSection>

      <ContentSection title="Projects" className={styles.mainContentSection}>
        <Projects projects={projects} />
      </ContentSection>
    </div>
  );
};

export default MainContent;
