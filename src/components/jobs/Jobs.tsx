import { ReactElement } from "react";

import { Jobs as JobsType } from "../../types/jobs";

import Job from "../job/Job";

const Jobs = ({ jobs }: { jobs: JobsType }): ReactElement => {
  return (
    <ul>
      {jobs.map((job) => {
        return (
          <li key={job.startDate}>
            <Job job={job} />
          </li>
        );
      })}
    </ul>
  );
};

export default Jobs;
