import { ReactElement } from "react";

import { Jobs as JobsType } from "../../types/jobs";

const Jobs = ({ jobs }: { jobs: JobsType }): ReactElement => {
  return (
    <ul>
      {jobs.map((job) => {
        return (
          <li key={job.startDate}>
            <h3>{job.title}</h3>
            <div>{job.company}</div>
            <div>
              {job.startDate} - {job.endDate}
            </div>
            {job.bulletPoints.map((bulletPoint) => {
              return <div>{bulletPoint}</div>;
            })}
          </li>
        );
      })}
    </ul>
  );
};

export default Jobs;
