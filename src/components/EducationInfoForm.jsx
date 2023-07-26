import { useState } from "react";

export default function EducationInfoForm({ handleUpdate }) {
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
    handleUpdate(educationInput);
  }

  return (
    <>
      <h2>Education</h2>
      <form onSubmit={handleSubmit}>
        <label>
          School Name:
          <input
            value={educationInput.schoolName}
            name="schoolName"
            onChange={handleEducationChange}
          ></input>
        </label>
        <label>
          Degree Type:
          <input
            value={educationInput.degreeType}
            name="degreeType"
            onChange={handleEducationChange}
          ></input>
        </label>
        <label>
          Concentration:
          <input
            value={educationInput.concentration}
            name="concentration"
            onChange={handleEducationChange}
          ></input>
        </label>
        <label>
          Graduation Date:
          <input
            value={educationInput.graduationDate}
            name="graduationDate"
            onChange={handleEducationChange}
          ></input>
        </label>
        <button type="submit"> Submit </button>
      </form>
    </>
  );
}
