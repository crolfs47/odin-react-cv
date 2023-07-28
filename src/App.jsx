import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import PersonalInfo from './components/PersonalInfo'
import EducationInfo from './components/EducationInfo'
import Experience from './components/Experience'
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
    graduationDate: "Graduation MM YYYY",
  })

  const [experience, setExperience] = useState({
    companyName: "Company Name",
    title: "Job Title",
    startDate: "Start Date",
    endDate: "End Date",
    description: "Add description",
  })

  const jobs = [
    {companyName: "Company 1",
    title: "Job Title 1",
    startDate: "Start Date 1",
    endDate: "End Date ",
    description: "Add description 1",
    id: uuidv4(), },
    {companyName: "Company 2",
    title: "Job Title 2",
    startDate: "Start Date 2",
    endDate: "End Date 2",
    description: "Add description 2",
    id: uuidv4(), },
  ];
  
  return (
    <>
      <div className="cv-container">
        <PersonalInfo {...info} handleUpdate={(newInfo) => setInfo(newInfo)} />
        <EducationInfo {...education} handleUpdate={(newEducation) => setEducation(newEducation)} />
        <Experience {...experience} handleUpdate={(newExperience) => setExperience(newExperience)}/>
      </div>
      <div>
        <JobsList jobsList={jobs} />
      </div>
    </>
  )
}

export default App;
