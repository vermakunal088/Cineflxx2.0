import React,{useState} from 'react';
import Select from 'react-select';
import axios from 'axios';
import {IsAuth} from './../Auth/Auth'
import { useHistory } from 'react-router-dom';

import { useParams } from 'react-router-dom';
function ShowTheater() {
    const options=[ ]
    
    const {movie_id} = useParams();
    
    let history=useHistory();
    const [timings,setTimings]=useState([]);
    
    const [gold,setGold]=useState(100)
    const [silver,setSilver]=useState(100);
    const [platinum,setPlatinum]=useState(100);
    const [language,setLanguage]=useState("");
    for (var i=0;i<24;i++){
        var time=i.toString() + ":00";
        var i_time=i.toString() + "00";
        var new_time = i.toString()+":30";
        var i_new_time=i.toString()+"30";
        options.push({value:i_time,label:time })
        options.push({value:i_new_time,label:new_time })
    }
    async function submit(){
        const {auth,type,user}=await IsAuth();
        console.log(auth,type,user)
        if (auth === false || type==="user"){
            history.push('/login')
        }
        var time=[];
        timings.forEach((en)=>{time.push(en.value)})

     
        const data={_id:user,movie_id:movie_id,slot:time,prices:[silver,gold,platinum],language:language};
        
        await axios.post('/show',data)
        
    }
    return (
        <div>
            <label>Silver : </label>
            <input name="silver" value={silver} onChange={({target})=>{ setSilver(target.value)}} required/>
            <label>Gold : </label>
            <input name="gold" value={gold} onChange={({target})=>{ setGold(target.value)}} required/>
            <label>Platinum : </label>
            <input name="platinum" value={platinum} onChange={({target})=>{ setPlatinum(target.value)}} required/>
            <label>Language : </label>
            <input name= "language" value = {language} onChange={({target})=>{ setLanguage(target.value)}} required/>
            <Select options= {options} onChange={(value)=>{setTimings(value);}} isMulti/>
            <button type="submit" onClick={submit}>Submit</button>
        </div>
    )
}

export default ShowTheater