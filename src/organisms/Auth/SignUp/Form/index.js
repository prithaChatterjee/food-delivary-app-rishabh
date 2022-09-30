import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from '../../../../Atoms/button'
import Input from '../../../../Atoms/input'
import ModalHeader from '../../../../Atoms/Modal/ModalHeader'
import { useForm } from '../../../../hooks/useForm'
import { loaduser } from '../../../../Store/user'
import { StyleAuthform } from '../../style.authform'
import ModalFooter from '../../../../Atoms/Modal/ModalFooter'

const SignUpForm = ({ onClose, handleLogin}) => {
  const { userReducer } = useSelector(state => state)
  const dispatch = useDispatch()
  const userInputs = { email: "", password: "", name: "" }
  const { formValues, updateForm, errors,
    handleError,
    handleInputChange,
    handleSubmit,
    resetForm
  } = useForm({ ...userInputs }, { ...userInputs })

  const onsubmit = () => {
    dispatch(loaduser({ url: "/user", method: "post", data: formValues }))
  }

  const [message, setmessage] = useState("")

  useEffect(() => {
    if (userReducer.data) {
      setmessage("Account Created successfully")
    }
    return () => {
      setmessage("")
    }
  }, [userReducer.data])

  return (
    <>
      <ModalHeader heading="Sign Up" handleClose={onClose} />
      <StyleAuthform noValidate onSubmit={(e) => handleSubmit(e, onsubmit)}>
        <Input fullWidth type={"text"} name="name" value={formValues.name}
          label={"Name"} onchange={handleInputChange} />
        <Input fullWidth type={"email"} name="email" value={formValues.email}
          label={"Email"} onchange={handleInputChange} />
        <Input fullWidth type="password" name="password" value={formValues.password}
          label={"Password"} onchange={handleInputChange} />
        <p> {message}</p>
        <Button type='submit' variant="outlined" color='green'>Submit</Button>
      </StyleAuthform>
      <ModalFooter>
        <span>Already have an account? </span>
        <Button onClick={handleLogin}>Login</Button>
      </ModalFooter>
    </>
  )
}

export default SignUpForm