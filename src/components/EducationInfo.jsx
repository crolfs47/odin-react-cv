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
        <div className="section-container">
          <div className="bottom-border flex space-between">
            <h2>Education</h2>
            <button onClick={handleEdit}>Edit</button>
          </div>

          <div>
            <div className="flex space-between">
              <div className="bold">{schoolName}</div>
              <div>{graduationDate}</div>
            </div>
            <div>
              {degreeType}, Concentration: {concentration}
            </div>
          </div>
        </div>
      ) : (
        <div className="form-container">
          <EducationInfoForm
            onEducationSubmit={(info) => {
              handleUpdate(info);
              handleEdit();
            }}
            onCancel={handleEdit}
          />
        </div>
      )}
    </>
  );
}

export default EducationInfo;
