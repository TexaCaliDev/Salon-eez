import React, {useEffect, useState} from 'react'
import { Switch,Route,withRouter} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
// import SignUp from '../pages/SignUp'
// import Login from '../pages/Login'
// import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
// import User from '..pages/Users'
import Layout from './Layout'
import { __CheckSession } from '../services/UserServices'
import SignUp from '../pages/SignUp'

const Router = (props) => {
    const [currentUser,setCurrentUser]=useState(null)
    const [authenticated,setAuthenticated]=useState(false)

    let RouteOne = () => props.history.push('/home')
    let RouteTwo = () => props.history.push('/')

    const verifyTokenValid = async () => {
        const token = localStorage.getItem('token')

        if (token) {
            try{
                const session = await __CheckSession
                setAuthenticated(true)
                setCurrentUser(session.user)
                localStorage.setItem('user',JSON.stringify(session.user))
                RouteOne()
            }catch(error){
                setCurrentUser(null)
                setAuthenticated(false)
                localStorage.clear()
            RouteTwo()
            }
        }
    }

    const toggleAuthenticated = (value, user) => {
        setAuthenticated(value)
        currentUser(user)
    }

    useEffect(()=>{
        verifyTokenValid()
    },[authenticated])

    return (
        <div>
            <Layout
            authenticated={authenticated}
            currentUser={currentUser}
            setAuthenticated={setAuthenticated}>
                <Switch>
                    <Route 
                    exact path='/'
                    component={props => 
                        <AboutUs {...props} />} 
                    />

                    <Route
                    exact path ='/signup'
                    component={props=>
                        <SignUp {...props} />
                    } />
                </Switch>
            </Layout>
        </div>
    )

}

export default withRouter(Router)
