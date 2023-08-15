import { useState } from 'react'
import './App.css'
import PersonalInfo from './components/PersonalInfo'
import EducationInfo from './components/EducationInfo'
import JobsList from './components/JobsList';

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
    graduationDate: "Month YYYY",
  })

  const [jobsList, setJobsList] = useState([]);
  
  return (
    <>
      <div className="cv-container">
        <PersonalInfo {...info} handleUpdate={(newInfo) => setInfo(newInfo)} />
        <EducationInfo {...education} handleUpdate={(newEducation) => setEducation(newEducation)} />
        <JobsList jobsList={jobsList} handleUpdate={(newJobsList) => setJobsList(newJobsList)} />
      </div>
    </>
  )
}

export default App;
