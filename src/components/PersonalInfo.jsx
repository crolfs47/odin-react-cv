import { useState } from "react";
import PersonalInfoForm from "./PersonalInfoForm";

function PersonalInfo({ firstName, lastName, phone, email, handleUpdate }) {
  const [isEdit, setEdit] = useState(false);

  function handleEdit() {
    setEdit(!isEdit);
  }

  return (
    <>
      {!isEdit ? (
        <div>
          <h1>
            {firstName} {lastName}
            <button onClick={handleEdit}>Edit</button>
          </h1>
          <h5>{phone}</h5>
          <h5>{email}</h5>
        </div>
      ) : (
        <div>
          <PersonalInfoForm
            onInfoSubmit={(info) => {
              handleUpdate(info);
              handleEdit();
            }}
          />
        </div>
      )}
    </>
  );
}

export default PersonalInfo;
