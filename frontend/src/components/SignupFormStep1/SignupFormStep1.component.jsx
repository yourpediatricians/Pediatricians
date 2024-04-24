import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

function SignupFormStep1({ formData, handleFormDataChange, setStep }) {
 

  const handleNext = (e) => {
    e.preventDefault()
    setStep(2)
  }

  return (
    
  )
}

export default SignupFormStep1