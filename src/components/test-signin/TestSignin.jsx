import React from 'react'
import { test_signin } from '../../api/profile'
import "./TestSigin.css"
const TestSignin = () => {

    const handle_signin = async () => {
        const token = await test_signin()
        if (token.error) {
            alert(token.error)
        }
        else {
            localStorage.setItem("token", token.data.data)
            console.log(localStorage.getItem("token"))
            console.log(token.data.data)
        }
    }

    return (
        <div className="test__signin_btn" onClick={handle_signin}>
            Test Signin
        </div>
    )
}

export default TestSignin
