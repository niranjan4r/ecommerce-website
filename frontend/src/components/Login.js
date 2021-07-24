import React from 'react'

export function Login() {
    return (
        <div className="form-enclosing">
                <h1 className="form-heading">Log in</h1>
                <form className="form-login">
                    
                    <input className="login-field" type="text" placeholder="Username" id="email"/>
                    
                    <input className="login-field" placeholder="Password" type="Password" id="password"/>
                    <h6 className="forgot">Forgot password?</h6>
                    
                    <div className="buttons">
                    <button className="login-button"><h4 className="login-button-label">LOGIN</h4></button>
                    <button className="register-button"><h4 className="Register-button-label">REGISTER</h4></button>
                    </div>
                </form>
            </div>
      );
}

