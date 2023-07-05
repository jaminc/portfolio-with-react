import { ReactElement } from "react";

import { Job as JobType } from "../../types/jobs";

const Job = ({ job }: { job: JobType }): ReactElement => {
  return (
    <>
      <h3>{job.title}</h3>
      <div>{job.company}</div>
      <div>
        {job.startDate} - {job.endDate}
      </div>
      {job.bulletPoints.map((bulletPoint) => {
        return <div>{bulletPoint}</div>;
      })}
    </>
  );
};

export default Job;
