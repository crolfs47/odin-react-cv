import { useState } from 'react'
import './App.css'
import PersonalInfo from './components/PersonalInfo'
import PersonalInfoForm from './components/PersonalInfoForm'

function App() {
  const [info, setInfo] = useState({
    firstName: "First",
    lastName: "Last",
    phone: "999-999-9999",
    email: "email@email.com",
  })

  return (
    <>
      <div>
        <PersonalInfo {...info} />
        <PersonalInfoForm handleInfoUpdate={(newInfo) => setInfo(newInfo)} />
      </div>
    </>
  )
}

export default App
