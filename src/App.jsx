import { useState } from 'react'
import './App.css'
import PersonalInfo from './components/PersonalInfo'
import PersonalInfoForm from './components/PersonalInfoForm'
import EducationInfo from './components/EducationInfo'
import EducationInfoForm from './components/EducationInfoForm'

function App() {
  const [info, setInfo] = useState({
    firstName: "Your",
    lastName: "Name",
    phone: "",
    email: "",
  })

  const [education, setEducation] = useState({
    schoolName: "School Name",
    degreeType: "Degree Type",
    concentration: "Concentation",
    graduationDate: "Graduation Date",
  })

  return (
    <>
      <div>
        <PersonalInfo {...info} />
        <PersonalInfoForm handleUpdate={(newInfo) => setInfo(newInfo)} />
        <EducationInfo {...education} />
        <EducationInfoForm handleUpdate={(newEducation) => setEducation(newEducation)} />
      </div>
    </>
  )
}

export default App
