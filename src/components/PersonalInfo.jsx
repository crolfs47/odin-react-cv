import { useState } from "react";
import PersonalInfoForm from "./PersonalInfoForm";

function PersonalInfo({ firstName, lastName, phone, email, handleUpdate }) {
  const personalInfo = {
    firstName,
    lastName,
    phone,
    email,
  };

  const [isEdit, setEdit] = useState(false);

  function handleEdit() {
    setEdit(!isEdit);
  }

  return (
    <>
      {!isEdit ? (
        <div className="section-container">
          <div className="bottom-border flex space-between">
            <h1 className="uppercase">
              {firstName} {lastName}
            </h1>
            <button onClick={handleEdit}>Edit</button>
          </div>
          <div className="personal-info">
            {phone} ∙ {email}
          </div>
        </div>
      ) : (
        <div className="form-container">
          <PersonalInfoForm
            {...personalInfo}
            onSubmit={(info) => {
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

export default PersonalInfo;
