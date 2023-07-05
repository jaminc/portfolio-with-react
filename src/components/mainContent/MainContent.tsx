import { ReactElement } from "react";

import { jobs } from "../../data/jobs";

import ContentSection from "../contentSection/ContentSection";
import Jobs from "../jobs/Jobs";
import AboutMe from "../aboutMe/AboutMe";

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
    </div>
  );
};

export default MainContent;
