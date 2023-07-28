import Job from "./Job";

const JobsList = ({ jobsList }) => {
  return (
    <>
      <div>
        {jobsList.map((job) => {
          return <Job key={job.id} job={job} />;
        })}
      </div>
    </>
  );
};

export default JobsList;
