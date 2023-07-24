function PersonalInfo({
  firstName,
  lastName,
  phone,
  email,
}) {

  return (
    <>
      <h2>Personal Information</h2>
      <h5>{firstName} {lastName}</h5>
      <h5>{phone}</h5>
      <h5>{email}</h5>
    </>
  )
}

export default PersonalInfo;
