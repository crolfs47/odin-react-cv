const JobForm = () => {

  return (
    <>
    <h2 className="bottom-border">Experience</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-item">
        <label>
          Company:
          <input
            value={experienceInput.companyName}
            name="companyName"
            onChange={handleExperienceChange}
            required
          ></input>
        </label>
      </div>

      <div className="form-item">
        <label>
          Job Title:
          <input
            value={experienceInput.title}
            name="title"
            onChange={handleExperienceChange}
            required
          ></input>
        </label>
      </div>

      <div className="form-item">
        <label>
          Start Date:
          <input
            value={experienceInput.startDate}
            name="startDate"
            onChange={handleExperienceChange}
            type="date"
            required
          ></input>
        </label>
      </div>

      <div className="form-item">
        <label>
          End Date:
          <input
            value={experienceInput.endDate}
            name="endDate"
            onChange={handleExperienceChange}
            type="date"
            required
          ></input>
        </label>
      </div>

      <div className="form-item">
        <label>
          Description:
          <textarea
            value={experienceInput.description}
            name="description"
            onChange={handleExperienceChange}
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
