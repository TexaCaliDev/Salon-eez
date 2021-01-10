import React, { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import { __GetStylist,__GetAllStylists } from "../services/StylistServices"






const Home = (props) => {
   
    const [stylists , setStylists]=useState([])

    const getStylists = async() => {
        try{
            const stylists = await __GetAllStylists()
            setStylists(stylists)
        }catch(error){
            console.log(error)
            throw error
        }
    }
   

    return(
        <div className='entire-container'>
            <div className='top'>
            {/* {stylists.map((stylist)=>{
                let location = {
                    pathname:'/stylist',
                    state: stylists
                }
                return stylists.length >=1 ? (
                    <div>stylists</div>
                ) : (
                    <div>
                        <p>hey , sit tight </p>
                    </div>
                )
            })} */}
            </div>
        </div>
    )
}

export default Home



