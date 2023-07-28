import { useState } from "react";
import Job from "./Job";

const JobsList = ({ jobsList }) => {
  const [isEdit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!isEdit);
  };

  return (
    <>
      {!isEdit ? (
        <div className="section-container">
          <div className="bottom-border flex space-between">
            <h2>Experience</h2>
            <button onClick={handleEdit}>Edit</button>
          </div>

          <div>
            {jobsList.map((job) => {
              return <Job key={job.id} job={job} />;
            })}
          </div>
        </div>
      ) : (
        <div className="form-container"></div>
      )}
    </>
  );
};

export default JobsList;
