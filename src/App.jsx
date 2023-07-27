import { useState } from 'react'
import './App.css'
import PersonalInfo from './components/PersonalInfo'
import EducationInfo from './components/EducationInfo'

function App() {
  const [info, setInfo] = useState({
    firstName: "Your",
    lastName: "Name",
    phone: "(999) 999-9999",
    email: "email@email.com",
  })

  const [education, setEducation] = useState({
    schoolName: "School Name",
    degreeType: "Degree",
    concentration: "Concentration",
    graduationDate: "Month YYYY",
  })
  
  return (
    <>
      <div className="cv-container">
        <PersonalInfo {...info} handleUpdate={(newInfo) => setInfo(newInfo)} />
        <EducationInfo {...education} handleUpdate={(newEducation) => setEducation(newEducation)} />
      </div>
    </>
  )
}

export default App
