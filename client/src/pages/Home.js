import React, { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import { __GetStylist,__GetAllStylists } from "../services/StylistServices"






const Home = (props) => {
   
    const [stylists , setStylists]=useState([])
    const [searched, setSearched]=useState(false)

    const getStylists = async() => {
        try{
            const res = await __GetAllStylists()
            // setStylists(res)
            console.log(res.data)
        }catch(error){
            console.log(error)
            throw error
        }
    }
    console.log(props)

    useEffect(() => {
        getStylists()
    },[searched])
   

    return(
        <div className='entire-container'>
            <div className='top'>
            <p>hello {props.currentUser.user.name}</p>
            </div>
            <div>
                <p>{stylists}</p>
                <button onClick={getStylists}>stylists</button>
            </div>
        </div>
    )
}

export default Home



