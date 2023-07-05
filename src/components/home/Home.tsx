import { ReactElement } from "react";

import { jobs } from "../../data/jobs";

import Jobs from "../jobs/Jobs";

const Home = (): ReactElement => {
  return (
    <>
      <Jobs jobs={jobs} />
    </>
  );
};

export default Home;
