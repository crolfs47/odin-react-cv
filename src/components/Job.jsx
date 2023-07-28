const Job = ({job}) => {

  return (
    <div>
      <div className="flex space-between">
        <div className="bold">{job.companyName}</div>
          <div>
            {job.startDate} - {job.endDate}
          </div>
      </div>
      <div className="italic">{job.title}</div>
      <div>{job.description}</div>
    </div>
  );

}

export default Job;