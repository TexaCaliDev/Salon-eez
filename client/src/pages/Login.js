import React, { useState } from 'react'
import TextInput from '../components/TextInput'
// import '../styles/Login.css'
import {__LoginUser} from '../services/UserServices'
import '../styles/Login.css'

const LogIn = (props)=>{

    
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [formError,setFormError]=useState(false)

    
    const handleChangeE =({target})=>{
        setEmail(target.value)
    }

    const handleChangeP =({target})=>{
        setPassword(target.value)
    }
    console.log(props)
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          const userInf={email, password}
            
          const loginData = await __LoginUser(userInf)          
          props.toggleAuthenticated(true, loginData, () => (
              console.log('')
              ))
              props.history.push('/home')
          
          
        } catch (error) {
            console.log(error)
          setFormError(true)
        }
      }

    return (
    <div className='whole-div'>
        <div className='signup'>
            <form className='form flex-col box' onSubmit={handleSubmit}>
                <h2>Log In</h2>

                {formError ? <p className='alert alert-danger'>Invalid credentials</p>:<p></p>}
                <p>Email</p>
                <TextInput
                    placeholder='Your Email'
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChangeE}
                />
                
                <p>Password</p>
                <TextInput
                    placeholder='Your Password'
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChangeP}
                    className='last'
                />
                
                
                <button className='button' >SignIn</button>
            </form>
            
        </div>
        <footer className='filler'>
            <h5>thanks for choosing us!</h5>
            <p>need any support? call: (123)-345-6789</p>
        </footer>
        </div>
    )
}


export default LogIn