import React from 'react'
import Button from '../../components/button/Button'
import './Signin.css'
const Signin = () => {
    return (
        <div className="signin__container">
            <div className="signin__header">
                
            </div>
            <div className="signin__body">
                <div className="signin__heading">
                    <img />
                    <h2>Sign In</h2>
                    <p>fillup the followign form </p>
                </div>
                <div className="signin__form">
                    <label>Signin with email account</label>
                    <input type="text" />
                    <p>Alternatively, Sign in with Phone</p>
                </div>
            </div>
            <Button text="Sign In" />
            
        </div>
    )
}

export default Signin
