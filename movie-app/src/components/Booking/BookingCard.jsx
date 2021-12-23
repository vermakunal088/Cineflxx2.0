import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './BookingCard.css'
function BookingCard(props) {
    const [movie,setMovie]=useState("");
    async function get_movie(){
        try{
           var x = await axios.get(`https://api.themoviedb.org/3/movie/${props.movie_id}?api_key=6f63772ed65e8e432bd7e974f7a69540&language=en-US`)
           setMovie(x.data);
           console.log(14)
        }catch(err){
            console.log(err)
        }
    }

    async function verify(){

        try{
            await axios.post('/payment',{booking_id:props.booking_id})
        }catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        get_movie();
    }, [])
   

    return (
        <div className="card" style={{backgroundImage:`url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path})`}}>
            <div className="container">
                <h4><b>{movie.original_title}</b></h4> <h2>{props.Date}</h2>
                
                <p>{props.theater}</p> <p>Time : {props.slot}</p>
                <p>{props.pack}</p>
                <p>Payment Status : {props.payment.toString()}</p>
            </div>
            {
                props.type==="1"?<button className='deleteBtn' onClick={verify}>Verify Payment</button>:<div></div>
            }
        </div>
    )
}

export default BookingCard