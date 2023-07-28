const JobForm = ({job}) => {

  return (
    <>
    <form>
      <div className="form-item">
        <label>
          Company:
          <input
            value={job.companyName}
            name="companyName"
            // onChange={handleExperienceChange}
            required
          ></input>
        </label>
      </div>

      <div className="form-item">
        <label>
          Job Title:
          <input
            value={job.title}
            name="title"
            // onChange={handleExperienceChange}
            required
          ></input>
        </label>
      </div>

      <div className="form-item">
        <label>
          Start Date:
          <input
            value={job.startDate}
            name="startDate"
            // onChange={handleExperienceChange}
            type="date"
            required
          ></input>
        </label>
      </div>

      <div className="form-item">
        <label>
          End Date:
          <input
            value={job.endDate}
            name="endDate"
            // onChange={handleExperienceChange}
            type="date"
            required
          ></input>
        </label>
      </div>

      <div className="form-item">
        <label>
          Description:
          <textarea
            value={job.description}
            name="description"
            // onChange={handleExperienceChange}
            type="textfield"
            required
          ></textarea>
        </label>
      </div>
      <div className="form-buttons">
        <button type="submit"> Submit </button>
        <button type="button">
          {" "}
          Cancel{" "}
        </button>
      </div>
    </form>
  </>
  )
};

export default JobForm;
