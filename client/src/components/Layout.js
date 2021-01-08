import React from 'react'
import Nav from './Nav'

 const Layout = (props) => (
  <div>
    <Nav
      authenticated={props.authenticated}
      currentUser={props.currentUser}
      setAuthenticated={props.setAuthenticated}
    />
    {props.children}
  </div>
)

export default Layout