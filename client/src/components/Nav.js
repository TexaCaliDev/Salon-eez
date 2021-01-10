import React from 'react'
import {NavLink} from 'react-router-dom'



const Nav = (props)=>{



    return props.authenticated && props.currentUser  ? (
        <header >
            <nav>
                <NavLink to='/home' >
                    Home
                </NavLink >

                <NavLink exact to='/stylists'>
                    Stylists
                </NavLink>
                
                <NavLink exact to='/' onClick={() => {
                    localStorage.clear()
                    props.setAuthenticated(false)
                }}>
                Sign Out
                </NavLink>

            </nav>
        </header>
    ) : (
        <header>
            <nav>
                <NavLink exact to='/signup'>
                    Sign Up
                </NavLink>

                <NavLink exact to='/login'>
                     Log In
                </NavLink>

                <NavLink exact to='/' >
                    Home
                </NavLink>

            </nav>
        </header>
    )
}

export default Nav