import { useState } from 'react'
import './App.css'
import PersonalInfo from './components/PersonalInfo'
import PersonalInfoForm from './components/PersonalInfoForm'
import EducationInfo from './components/EducationInfo'
import EducationInfoForm from './components/EducationInfoForm'

function App() {
  const [info, setInfo] = useState({
    firstName: "First",
    lastName: "Last",
    phone: "999-999-9999",
    email: "email@email.com",
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
