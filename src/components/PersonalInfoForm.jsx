import { useState } from "react";

export default function PersonalInfoForm({
  onSubmit,
  onCancel,
  firstName,
  lastName,
  phone,
  email,
}) {
  const [infoInput, setInfoInput] = useState({
    firstName,
    lastName,
    phone,
    email,
  });

  function handleInfoChange(e) {
    setInfoInput({
      ...infoInput,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(infoInput);
  }

  return (
    <>
      <h1 className="bottom-border">Personal Information</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label>
            First Name:
            <input
              value={infoInput.firstName}
              name="firstName"
              onChange={handleInfoChange}
              required
            ></input>
          </label>
        </div>

        <div className="form-item">
          <label>
            Last Name:
            <input
              value={infoInput.lastName}
              name="lastName"
              onChange={handleInfoChange}
              required
            ></input>
          </label>
        </div>

        <div className="form-item">
          <label>
            Phone Number:
            <input
              value={infoInput.phone}
              name="phone"
              onChange={handleInfoChange}
              required
            ></input>
          </label>
        </div>

        <div className="form-item">
          <label>
            Email:
            <input
              value={infoInput.email}
              name="email"
              type="email"
              onChange={handleInfoChange}
              required
            ></input>
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
  );
}
