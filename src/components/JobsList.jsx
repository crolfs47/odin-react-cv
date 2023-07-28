const JobsList = ({ jobsList }) => {
  return (
    <div>
      {jobsList.map((job) => {
        return (
          <div key={job.id}>
            {job.companyName} - {job.title}
          </div>
        );
      })}
    </div>
  );
};

export default JobsList;
