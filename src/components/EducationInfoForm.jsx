import { useState } from "react";

export default function EducationInfoForm({ handleUpdate }) {
  const [education, setEducation] = useState({
    schoolName: "",
    degreeType: "",
    concentration: "",
    graduationDate: "",
  });

  function handleEducationChange(e) {
    setEducation({
      ...education,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdate(education);
  }

  return (
    <>
      <h2>Education</h2>
      <form onSubmit={handleSubmit}>
        <label>
          School Name:
          <input
            value={education.schoolName}
            name="schoolName"
            onChange={handleEducationChange}
          ></input>
        </label>
        <label>
          Degree Type:
          <input
            value={education.degreeType}
            name="degreeType"
            onChange={handleEducationChange}
          ></input>
        </label>
        <label>
          Concentration:
          <input
            value={education.concentration}
            name="concentration"
            onChange={handleEducationChange}
          ></input>
        </label>
        <label>
          Graduation Date:
          <input
            value={education.graduationDate}
            name="graduationDate"
            onChange={handleEducationChange}
          ></input>
        </label>
        <button type="submit"> Submit </button>
      </form>
    </>
  );
}
