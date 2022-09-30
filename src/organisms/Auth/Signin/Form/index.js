import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../../Atoms/button'
import Input from '../../../../Atoms/input'
import ModalHeader from '../../../../Atoms/Modal/ModalHeader'
import { useForm } from '../../../../hooks/useForm'
import { loaduser } from '../../../../Store/user'
import { StyleAuthform } from '../../style.authform'
import ModalFooter from '../../../../Atoms/Modal/ModalFooter'

const SigninForm = ({ onClose, handleSignup}) => {
    const {userReducer} = useSelector(state => state)
    const dispatch = useDispatch()
    const userInputs = { email: "", password: "" }
    const { formValues, updateForm, errors,
        handleError,
        handleInputChange,
        handleSubmit,
        resetForm
    } = useForm({ ...userInputs }, { ...userInputs })

    const onsubmit = () => {
        dispatch(loaduser({ url: "/user/login", method: "post", data: formValues }))
    }

    const [message, setmessage] = useState("")

    useEffect(() => {
        if (userReducer.data) {
            setmessage("User Loggin successfully")
        }
        return () => {
            setmessage("")
        }
    }, [userReducer.data])

    return (
        <>
            <ModalHeader heading="Login" handleClose={onClose} />
            <StyleAuthform noValidate onSubmit={(e) => handleSubmit(e, onsubmit)}>
                <Input fullWidth type={"email"} name="email" value={formValues.email}
                    label={"Email"} onchange={handleInputChange} />
                <Input fullWidth type="password" name="password" value={formValues.password}
                    label={"Password"} onchange={handleInputChange} />
                  <p> {message}</p> 
                <Button type='submit' variant="outlined" color='green'>Submit</Button>
            </StyleAuthform>
            <ModalFooter>
                <span>New to Zomato?</span>
                <Button onClick={handleSignup}>Create account</Button>
            </ModalFooter>
        </>
    )
}

export default SigninForm