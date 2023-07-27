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
    schoolName: "",
    degreeType: "",
    concentration: "",
    graduationDate: "",
  })
  
  return (
    <>
      <div>
        <PersonalInfo {...info} handleUpdate={(newInfo) => setInfo(newInfo)} />
        <EducationInfo {...education} handleUpdate={(newEducation) => setEducation(newEducation)} />
      </div>
    </>
  )
}

export default App
