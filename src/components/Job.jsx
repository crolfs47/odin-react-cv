import { useState } from "react";
import JobForm from "./JobForm";

const Job = ({ job, }) => {
  const [isEdit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!isEdit);
  };

  return (
    <>
    {!isEdit ? (
      <div>
        <div className="flex space-between">
          <div className="bold">{job.companyName}</div>
          <div>
            {job.startDate} - {job.endDate}
          </div>
        </div>
        <div className="italic">{job.title}</div>
        <div>{job.description}</div>
        <button type="button" onClick={handleEdit}>Edit</button>
        <button type="button">Delete</button>
      </div>
    ) : (
      <div className="form-container">
        <JobForm job={job} />
      </div>
    )}
    </>
  );
};

export default Job;
