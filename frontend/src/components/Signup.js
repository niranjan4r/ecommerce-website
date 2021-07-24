import React from 'react'

export  function Signup() {
    return (
        <div>
            <div className="form-enclosing-for-signup">
        <h1 className="form-heading">Sign Up</h1>
        <form className="form-signup">
            <input className="signup-field" type="text" placeholder="Name" id="name"/>
            <input className="signup-field" type="text" placeholder="Email" id="email"/>
            <input className="signup-field" placeholder="Password" type="Password" id="password"/>
            <input className="signup-field" placeholder="Confirm Password" type="Password" id="re-password"/>
            <h6 className="forgot-for-signup">Doesnt have a account yet? Register Now</h6>
            <div className="buttons-for-signup">
                <button className="register-button"><h4 className="Register-button-label">REGISTER</h4></button>
                <button className="login-button"><h4 className="login-button-label">LOGIN</h4></button>
            </div>
        </form>
        </div>
        </div>
    )
}
