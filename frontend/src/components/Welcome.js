import React from 'react'

export  function Welcome() {
    return (
        <div>
            <div className="buttons-for-index">
            <button className="login-button"><h4 className="login-button-label"><a href="/login">LOGIN</a></h4></button>
            <button className="register-button"><h4 className="Register-button-label"><a href="/signup">REGISTER</a></h4></button>
            </div>
        </div>
    )
}
