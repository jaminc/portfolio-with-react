import { ReactElement } from "react";

import { jobs } from "../../data/jobs";

import Jobs from "../jobs/Jobs";
import AboutMe from "../aboutMe/AboutMe";

import styles from "./main-content.module.css";

const MainContent = (): ReactElement => {
  return (
    <div>
      <section className={styles.mainContentSection}>
        <AboutMe />
      </section>
      <section className={styles.mainContentSection}>
        <Jobs jobs={jobs} />
      </section>
    </div>
  );
};

export default MainContent;
