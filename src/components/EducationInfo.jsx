function EducationInfo({
  schoolName,
  degreeType,
  concentration,
  graduationDate,
}) {

  return (
    <>
    <h2>Education</h2>
    <h5>{schoolName}</h5>
    <h5>{degreeType}</h5>
    <h5>{concentration}</h5>
    <h5>{graduationDate}</h5>
  </>
  )
}

export default EducationInfo;