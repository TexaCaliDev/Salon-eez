import React, { useEffect, useState } from 'react'
import {__GetStylist, __GetStylistCustomers,__GetSylistTool} from '../services/StylistServices'
import {Link} from 'react-router-dom'



const Stylist = (props)=>{

    const [stylist,setStylist]=useState('')
    const [get, setGet]=useState(false)


    // const getStylist = async(stylist_id) => {
    //     try{
    //         const res = await __GetStylist(stylist_id)
    //         console.log(res)
    //         setStylist(res)
    //         props.history.push(`/stylist`)
    //     }catch(error){
    //         console.log(error)
    //         throw error
    //     }
    // }
    console.log(props)

    const GetStylistCustomers = async () => {
        try{

        }catch(error){
            throw error
        }
    }
    
    const UpdateStylist = () => {
        props.history.push('/')
    }

    useEffect(()=>{
        // getStylist()
    },[get])



    return(
        <div>
            <p>name:</p>
            <p>email:</p>
            <p>appointments:</p>
            <p>equipment:</p>
        </div>
    )
}

export default Stylist