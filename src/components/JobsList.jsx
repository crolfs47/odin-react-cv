import Job from "./Job";

const JobsList = ({ jobsList }) => {

  return (
    <>
        <div className="section-container">
          <div className="bottom-border flex space-between">
            <h2>Experience</h2>
          </div>

          <div>
            {jobsList.map((job) => {
              return <Job key={job.id} job={job} />;
            })}
          </div>
        </div>
    </>
  );
};

export default JobsList;
