import React, { useEffect, useState } from 'react'
import {__GetAllStylists, __GetStylist,__GetStylistEquipment} from '../services/StylistServices'
import {__DeleteCustomer} from '../services/CustomerServices'
import {Link} from 'react-router-dom'
import '../styles/Stylist.css'

const Stylist = (props)=>{
    // const {stylist}= props
    const [get, setGet]=useState(false)
    const [details,setDetails]=useState({})
    

    console.log(props)
  
    // const getStylist = async () => {
    //     try{
    //         const stylist = await __GetStylist(props.stylist.id)
    //         setDetails(stylist)
    //     }catch(error){
    //         throw error
    //     }
    // }

    const locationOne = (props) => {
        props.history.push('/home')
    }

    const deleteCustomer = async (props,event) => {
        event.preventDefault()
        try{
            console.log(props)
            await __DeleteCustomer(props.customer.id)
            // locationOne()
        }catch(error){
            throw error
        }
    }
   


    useEffect(()=>{
        // getStylist()
        
    },[get])
    return(
        <div className='rendered-stylist-whole each-stylist-container'>
            <div className='stylist-name-container'>
                <p>Name: </p>
                <p>{props.stylist.stylist_name}</p>
            </div>
            <div className='stylist-email-container'>
                <p>Email:</p>
                <p>{props.stylist.stylist_email}</p>
            </div>
            <div className='stylist-appointment-container'>
                <p>Appointments:</p>
                {props.customers.map((customer,id)=>{
                    return (
                        <div key={id} className='customers-container'>
                            <div className='each-appointment'>
                                <p>Name: {customer.customer_name}</p>
                                <p>Time: {customer.time_of_appoint}</p>
                                <button onClick={(event)=>deleteCustomer(customer.id)}>delete customer</button>
                            </div>
                        </div>
                    )
                })
            
                }
            </div>
            <div className='stylist-equipment-container'>
                <p>Equipment:</p>
                {props.equipment.map((equipment,id)=>{
                    return (
                        <div key={id} className='equipment-container'>
                            <div className='equipment-name-container'>
                                <p>Name: {equipment.equip_name}</p>
                            </div>
                            <div className='equipment-type-container'>
                                <p>Type Of: {equipment.type_of}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
export default Stylist