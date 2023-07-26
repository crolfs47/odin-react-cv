import { useState } from "react";
import PersonalInfoForm from "./PersonalInfoForm";

function PersonalInfo({ firstName, lastName, phone, email, handleUpdate }) {
  const [isEditInfo, setEditInfo] = useState(false);

  function handleEdit() {
    setEditInfo(!isEditInfo);
  }

  return (
    <>
      <div></div>
      {!isEditInfo ? (
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
