import { useState } from "react";

export default function PersonalInfoForm({handleUpdate}) {
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  function handleInfoChange(e) {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(info);
    handleUpdate(info);
  }

  return (
    <>
      <h2>Personal Information</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            value={info.firstName}
            name="firstName"
            onChange={handleInfoChange}
          ></input>
        </label>

        <label>
          Last Name:
          <input
            value={info.lastName}
            name="lastName"
            onChange={handleInfoChange}
          ></input>
        </label>

        <label>
          Phone Number:
          <input
            value={info.phone}
            name="phone"
            onChange={handleInfoChange}
          ></input>
        </label>

        <label>
          Email:
          <input
            value={info.email}
            name="email"
            onChange={handleInfoChange}
          ></input>
        </label>
        <button type="submit"> Submit </button>
      </form>
    </>
  );
}
