import { useState } from "react";
import JobForm from "./JobForm";
import { format } from 'date-fns';

const Job = ({ job, jobsList, handleUpdate }) => {
  const [isEdit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!isEdit);
  };

  const handleDelete = (jobId) => {
    const newList = jobsList.filter((job) => job.id !== jobId);
    handleUpdate(newList);
  };

  return (
    <>
      {!isEdit ? (
        <div className="job-container">
          <div className="flex space-between">
            <div className="bold">{job.companyName}</div>
            <div>
              {format(new Date(job.startDate), 'MMMM Y')} - {format(new Date(job.endDate), 'MMMM Y')}
            </div>
          </div>
          <div className="italic">{job.title}</div>
          <div>{job.description}</div>
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
          <button type="button" onClick={() => handleDelete(job.id)}>
            Delete
          </button>
        </div>
      ) : (
        <div className="form-container">
          <JobForm
            {...job}
            onJobSubmit={(info) => {
              const newJobsList = jobsList.map((job) => {
                if (job.id === info.id) {
                  return info;
                }
                return job;
              });
              handleUpdate(newJobsList);
              handleEdit();
            }}
            onCancel={handleEdit}
          />
        </div>
      )}
    </>
  );
};

export default Job;
