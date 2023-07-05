import { ReactElement } from "react";

import { jobs } from "../../data/jobs";

import Jobs from "../jobs/Jobs";
import AboutMe from "../aboutMe/AboutMe";

const Home = (): ReactElement => {
  return (
    <>
      <AboutMe />
      <Jobs jobs={jobs} />
    </>
  );
};

export default Home;
