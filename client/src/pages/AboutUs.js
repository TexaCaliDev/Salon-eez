import React from 'react'

export default (props) => {
    const getStarted = () => {
        props.history.push('/signup')
    }
    return (
        <div className="main-container">
            <div className="intro-container">
                <p>Salon-Eez</p>
            </div>
            <div className='intro-body'>
                <p>about us page</p>
            </div>
            <div className='get-started'>
                <button onClick={getStarted}>Sign Up</button>
            </div>
        </div>
    )
}