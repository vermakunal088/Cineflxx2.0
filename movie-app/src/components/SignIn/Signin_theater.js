import React,{useState} from 'react';
import axios from 'axios';
import './Signin_theater.css'
function Signin_theater() {
    const [password, setPassword] =useState("");
    const [email, setEmail] =useState("");
    async function submit(){
        try{
            var token=await axios.post('/signin_theater',{email,password});
            localStorage.setItem("token",token.data);
            localStorage.setItem("type","theater")

        }catch(err){
            alert(err.response.data)    
        }
    }
    return (
        <div className="signin">
            <span className='signinTitle'>Login</span>
            <div className='signinForm'>
                <label>Email</label>
                <input className="signinInput" type="email" placeholder="Enter your email" value={email} onChange={({target})=>{ setEmail(target.value)}} required />
                <label>Password</label>
                <input className="signinInput" type="password" placeholder="Enter your password" value={password} onChange={({target})=>{ setPassword(target.value)}}/>
                <button className="signinButton" type="submit" onClick={submit}>Sign In</button>
            </div>
            <button className="signupButton">Sign Up</button>
        </div>
    )
}

export default Signin_theater