function PersonalInfo({
  firstName,
  lastName,
  phone,
  email,
}) {

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
