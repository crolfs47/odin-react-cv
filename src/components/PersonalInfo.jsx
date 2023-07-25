function PersonalInfo({
  firstName,
  lastName,
  phone,
  email,
}) {

  return (
    <>
      <h1>{firstName} {lastName}<button>Edit</button></h1>
      <h5>{phone}</h5>
      <h5>{email}</h5>
      
    </>
  )
}

export default PersonalInfo;
