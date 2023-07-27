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
      <h1>Education</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            School Name:
            <input
              value={educationInput.schoolName}
              name="schoolName"
              onChange={handleEducationChange}
            ></input>
          </label>
        </div>

        <div>
          <label>
            Degree Type:
            <input
              value={educationInput.degreeType}
              name="degreeType"
              onChange={handleEducationChange}
            ></input>
          </label>
        </div>

        <div>
          <label>
            Concentration:
            <input
              value={educationInput.concentration}
              name="concentration"
              onChange={handleEducationChange}
            ></input>
          </label>
        </div>

        <div>
          <label>
            Graduation Date:
            <input
              value={educationInput.graduationDate}
              name="graduationDate"
              onChange={handleEducationChange}
            ></input>
          </label>
        </div>

        <button type="submit"> Submit </button>
        <button type="button"> Cancel </button>
      </form>
    </>
  );
}
