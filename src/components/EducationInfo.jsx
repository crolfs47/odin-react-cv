import { useState } from "react";
import EducationInfoForm from "./EducationInfoForm";

function EducationInfo({
  schoolName,
  degreeType,
  concentration,
  graduationDate,
  handleUpdate,
}) {
  const [isEdit, setEdit] = useState(false);

  function handleEdit() {
    setEdit(!isEdit);
  }

  return (
    <>
      {!isEdit ? (
        <div>
          <h1>
            Education
            <button onClick={handleEdit}>Edit</button>
          </h1>

          <div>
            <h5>{schoolName}</h5>
            <h5>{degreeType}</h5>
            <h5>{concentration}</h5>
            <h5>{graduationDate}</h5>
          </div>
        </div>
      ) : (
        <div>
          <EducationInfoForm
            onEducationSubmit={(info) => {
              handleUpdate(info);
              handleEdit();
            }}
          />
        </div>
      )}
    </>
  );
}

export default EducationInfo;
