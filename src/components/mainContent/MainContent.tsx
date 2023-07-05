import { ReactElement } from "react";

import jobs from "../../data/jobs";
import projects from "../../data/projects";

import { Link } from "../../types/sidebarLinks";

import ContentSection from "../contentSection/ContentSection";
import AboutMe from "../aboutMe/AboutMe";
import Jobs from "../jobs/Jobs";
import Projects from "../projects/Projects";

import styles from "./main-content.module.css";

const MainContent = (): ReactElement => {
  return (
    <div>
      <ContentSection
        id={Link.AboutMe}
        title="About Me"
        className={styles.mainContentSection}
      >
        <AboutMe />
      </ContentSection>

      <ContentSection
        id={Link.WorkExperience}
        title="Work Experience"
        className={styles.mainContentSection}
      >
        <Jobs jobs={jobs} />
      </ContentSection>

      <ContentSection
        id={Link.Projects}
        title="Projects"
        className={styles.mainContentSection}
      >
        <Projects projects={projects} />
      </ContentSection>
    </div>
  );
};

export default MainContent;
