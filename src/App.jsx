import { useState } from 'react'
import './App.css'
import PersonalInfo from './components/PersonalInfo'
import EducationInfo from './components/EducationInfo'
import Experience from './components/Experience'

const App = () => {
  const [info, setInfo] = useState({
    firstName: "First",
    lastName: "Last",
    phone: "(999) 999-9999",
    email: "email@email.com",
  })

  const [education, setEducation] = useState({
    schoolName: "School Name",
    degreeType: "Degree",
    concentration: "Concentration",
    graduationDate: "Graduation MM YYYY",
  })

  const [experience, setExperience] = useState({
    companyName: "Company Name",
    title: "Job Title",
    startDate: "Start Date",
    endDate: "End Date",
    description: "Add description",
  })
  
  return (
    <>
      <div className="cv-container">
        <PersonalInfo {...info} handleUpdate={(newInfo) => setInfo(newInfo)} />
        <EducationInfo {...education} handleUpdate={(newEducation) => setEducation(newEducation)} />
        <Experience {...experience} handleUpdate={(newExperience) => setExperience(newExperience)}/>

      </div>
    </>
  )
}

export default App;
