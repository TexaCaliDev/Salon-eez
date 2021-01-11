import React, { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import Stylist from './Stylist'
import { __GetStylist,__GetAllStylists, __GetStylistCustomers } from "../services/StylistServices"
import { __DeleteCustomer} from '../services/CustomerServices'
import '../styles/Home.css'
const Home = (props) => {
    const [stylists , setStylists]=useState([])
    const [stylist,setStylist]=useState({})
    const [customers,setCustomers]=useState([])
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

    const getStylistCustomers = async(stylist_id) => {
        try{
            const res = await __GetStylistCustomers(stylist_id)
            console.log(res)
            setCustomers(res)
        }catch(error){
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
            console.log(stylist)
            props.history.push(`/stylist`)
        }catch(error){
            console.log(error)
            throw error
        }
    }

    const goToStylist = (event) => {
        props.history.push('/stylist')
    }

    const DeleteCustomer = async (stylist_id) => {
        try{
            const deleteCustomer = await __DeleteCustomer(stylist_id)
            props.history.push('/home')
        }catch(error){
            throw error
        }
    }

    useEffect(() => {
        getStylists()
        // getStylistCustomers()
        
    },[])
    return(
        <div className='entire-container'>
            <div className='top'>
            <p>Hello {props.currentUser.user.name}</p>
            </div>
            <div>
                <div>
                    <button onClick={createStylist}>Create Stylist</button>
                </div>
            {stylists.map((stylist,id)=>{
                return (
                <div 
                className='whole-data-container whole-stylist-container' 
                key={id}
                // onClick={()=>props.history.push('/stylist')}
                >
                    <div className='data-container stylist-name-container'>
                        <Stylist stylist={stylist} customers={stylist.Customers} equipment={stylist.Equipment}/>
                    </div>
                </div>
                )
            })}
            </div>
        </div>
    )
}
export default Home
