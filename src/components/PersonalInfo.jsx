function PersonalInfo({
  firstName = "First",
  lastName = "Last",
  phone = "999-999-9999",
  email = "email@email.com",
}) {
  const Info = {
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    email: email,
  }

  return (
    <>
      <h2>Personal Information</h2>
      <h3>{firstName} {lastName}</h3>
      <h3>{phone}</h3>
      <h3>{email}</h3>
    </>
  )
}

export default PersonalInfo;
