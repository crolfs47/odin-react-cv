import { useState } from "react";

export default function EducationInfoForm({ onEducationSubmit }) {
  const [educationInput, setEducationInput] = useState({
    schoolName: "",
    degreeType: "",
    concentration: "",
    graduationDate: "",
  });

  function handleEducationChange(e) {
    setEducationInput({
      ...educationInput,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onEducationSubmit(educationInput);
  }

  return (
    <>
      <h2 className="bottom-border">Education</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label>
            School Name:
            <input
              value={educationInput.schoolName}
              name="schoolName"
              onChange={handleEducationChange}
            ></input>
          </label>
        </div>

        <div className="form-item">
          <label>
            Degree Type:
            <input
              value={educationInput.degreeType}
              name="degreeType"
              onChange={handleEducationChange}
            ></input>
          </label>
        </div>

        <div className="form-item">
          <label>
            Concentration:
            <input
              value={educationInput.concentration}
              name="concentration"
              onChange={handleEducationChange}
            ></input>
          </label>
        </div>

        <div className="form-item">
          <label>
            Graduation Date:
            <input
              value={educationInput.graduationDate}
              name="graduationDate"
              onChange={handleEducationChange}
            ></input>
          </label>
        </div>
        <div className="form-buttons">
          <button type="submit"> Submit </button>
          <button type="button"> Cancel </button>
        </div>
      </form>
    </>
  );
}
