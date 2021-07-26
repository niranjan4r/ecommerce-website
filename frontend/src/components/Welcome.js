import React from 'react'
import { useState } from 'react'
import {Home } from './Home'
import { WelcomeHeader } from './WelcomeHeader'



export  function Welcome() {
    const [loginState,setLoginState] = useState("")
    const [user,setUser] = useState("")

    return (
        <div>
            <div className="headerWrapper">
                <WelcomeHeader user={user}/>
            </div>
            <div className="homeWrapper">
                <Home/>
            </div>
        </div>
    )
}

