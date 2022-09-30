import React, {useState} from 'react'
import Button from "../../../Atoms/button/index";
import Modal from '../../../Atoms/Modal';
import SigninForm from '../../../organisms/Auth/Signin/Form';
import SignUpForm from '../../../organisms/Auth/SignUp/Form';
import { StyleNav } from './style.nav';

const Nav = () => {
    const [signup, setsignup] = useState(false)
    const [signin, setsignin] = useState(false)
    const handleSignIn = (value) => setsignin(value)
    const handleSignUp = (value) => setsignup(value)

    const handleLogin = () => {
        setsignup(false)
        setsignin(true)
    }

    const handleSignup = () => {
        setsignin(false)
        setsignup(true)
    }

    return (
        <StyleNav>
            <Button variant={"contained"} color={"green"} onClick={() => handleSignIn(true)}
                fontSize={"20px"}>login</Button>
            <Button variant={"contained"} color={"green"} onClick={() => handleSignUp(true)}
                fontSize={"20px"}>SignUp</Button>
            <Modal open={signup}><SignUpForm  onClose={handleSignUp} 
                handleLogin={handleLogin}/></Modal>
            <Modal open={signin} ><SigninForm onClose={handleSignIn}
                handleSignup={handleSignup}/></Modal>
        </StyleNav>
    )
}

export default Nav