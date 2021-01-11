import React, { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import { __GetStylist,__GetAllStylists } from "../services/StylistServices"






const Home = (props) => {
   
    const [stylists , setStylists]=useState([])
    const [stylist,setStylist]=useState({})
    const [searched, setSearched]=useState(false)

    const getStylists = async() => {
        try{
            const res = await __GetAllStylists()
            console.log(res)
            setStylists(res)
        }catch(error){
            console.log(error)
            throw error
        }
    }

    const createStylist = ()=>{
        props.history.push('/create')
    }

    const getStylist = async(stylist_id) => {
        try{
            const res = await __GetStylist(stylist_id)
            console.log(res)
            setStylist(res)
            props.history.push(`/stylist`)
        }catch(error){
            console.log(error)
            throw error
        }
    }
    

    useEffect(() => {
        getStylists()
    },[searched])
   

    return(
        <div className='entire-container'>
            <div className='top'>
            <p>Hello {props.currentUser.user.name}</p>
            </div>
            <div>
                <div>
                    <button onClick={createStylist}>Create Stylist</button>
                    <button>Delete Stylist</button>
                </div>
                
                <p>Stylists:</p> 
            {stylists.map((stylist,index)=>{
                return (
                <div 
                className='whole-data-container whole-stylist-container' 
                key={index}
                onClick={()=>getStylist(stylist.id)}
                >
                    <div className='data-container stylist-name-container'>
                        <p>
                            {stylist.stylist_name}
                        </p>
                    </div>
                   
                </div>
                )
            })}
            </div>
        </div>
    )
}

export default Home



