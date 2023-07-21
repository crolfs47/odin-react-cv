import { useState } from 'react'
import './App.css'
import PersonalInfo from './components/PersonalInfo'
import PersonalInfoForm from './components/PersonalInfoForm'

function App() {

  return (
    <>
      <div>
        <PersonalInfo />
        <PersonalInfoForm />
      </div>
    </>
  )
}

export default App
