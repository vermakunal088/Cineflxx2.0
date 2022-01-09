import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import "./SignIn.css"

function SignIn() {
    let history=useHistory();

    return (
        <div className="signinhai">
            <span className="signinhaiTitle">Log In</span>
            <div className="signinhaiForm">
                <button className="signinhaiInput" className="signinbt1" onClick={()=>{history.push('/login_user')}}>As User</button>
                <button className="signinhaiInput" className="signinbt2" onClick={()=>{history.push('/login_theater')}}>As Theater</button>
            </div>
        </div>
    )
}

export default SignIn
