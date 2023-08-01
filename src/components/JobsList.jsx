import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Job from "./Job";
import JobForm from "./JobForm";

const JobsList = ({ jobsList, handleUpdate }) => {
  const job = {
    companyName: "",
    title: "",
    startDate: "",
    endDate: "",
    description: "",
    id: uuidv4(),
  };

  const [isEdit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!isEdit);
  };

  return (
    <>
      <div className="section-container">
        <div className="bottom-border flex space-between">
          <h2>Experience</h2>
          <button type="button" onClick={handleEdit}>
            Add Experience
          </button>
        </div>

        <div>
          {jobsList.map((job) => {
            return <Job key={job.id} job={job} />;
          })}
        </div>

        {isEdit && (
          <div className="form-container">
            <JobForm 
              {...job}
              onJobSubmit={(info) => {
                jobsList.push(info);
                handleUpdate(jobsList);
                handleEdit();
              }}
              onCancel={handleEdit}
              />
          </div>
        )}
      </div>
    </>
  );
};

export default JobsList;
