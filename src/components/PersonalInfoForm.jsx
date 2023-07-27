import { useState } from "react";

export default function PersonalInfoForm({ onInfoSubmit }) {
  const [infoInput, setInfoInput] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  function handleInfoChange(e) {
    setInfoInput({
      ...infoInput,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onInfoSubmit(infoInput);
  }

  return (
    <>
      <h1>Personal Information</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:
            <input
              value={infoInput.firstName}
              name="firstName"
              onChange={handleInfoChange}
            ></input>
          </label>
        </div>

        <div>
          <label>
            Last Name:
            <input
              value={infoInput.lastName}
              name="lastName"
              onChange={handleInfoChange}
            ></input>
          </label>
        </div>

        <div>
          <label>
            Phone Number:
            <input
              value={infoInput.phone}
              name="phone"
              onChange={handleInfoChange}
            ></input>
          </label>
        </div>

        <div>
          <label>
            Email:
            <input
              value={infoInput.email}
              name="email"
              onChange={handleInfoChange}
            ></input>
          </label>
        </div>
        
        <button type="submit"> Submit </button>
        <button type="button"> Cancel </button>
      </form>
    </>
  );
}
