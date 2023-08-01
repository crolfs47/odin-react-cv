import { useState } from "react";

const JobForm = ({ 
  onJobSubmit, 
  onCancel,
  companyName,
  title,
  startDate,
  endDate,
  description,
  id,
}) => {

  const [jobInput, setJobInput] = useState({
    companyName,
    title,
    startDate,
    endDate,
    description,
    id,
  })

  const handleJobChange = (e) => {
    setJobInput({
      ...jobInput,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onJobSubmit(jobInput);
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="form-item">
        <label>
          Company:
          <input
            value={jobInput.companyName}
            name="companyName"
            onChange={handleJobChange}
            required
          ></input>
        </label>
      </div>

      <div className="form-item">
        <label>
          Job Title:
          <input
            value={jobInput.title}
            name="title"
            onChange={handleJobChange}
            required
          ></input>
        </label>
      </div>

      <div className="form-item">
        <label>
          Start Date:
          <input
            value={jobInput.startDate}
            name="startDate"
            onChange={handleJobChange}
            type="date"
            required
          ></input>
        </label>
      </div>

      <div className="form-item">
        <label>
          End Date:
          <input
            value={jobInput.endDate}
            name="endDate"
            onChange={handleJobChange}
            type="date"
            required
          ></input>
        </label>
      </div>

      <div className="form-item">
        <label>
          Description:
          <textarea
            value={jobInput.description}
            name="description"
            onChange={handleJobChange}
            type="textfield"
            required
          ></textarea>
        </label>
      </div>
      <div className="form-buttons">
        <button type="submit"> Submit </button>
        <button type="button" onClick={onCancel}>
          {" "}
          Cancel{" "}
        </button>
      </div>
    </form>
  </>
  )
};

export default JobForm;
