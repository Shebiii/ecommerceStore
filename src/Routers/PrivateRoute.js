import React from 'react'
import { Redirect, Route, useHistory } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

export const PrivateRoute = ({
    component:Component,
    ...rest
}) => {
const isAuth = localStorage.getItem("username")

    return (
        
        <Route {...rest} component={(props) => (
            isAuth ?
                <>
                    <Header />
                    <Component {...props}/>
                    <Footer/>
                </>
                :
                    <Redirect to='/login' />
                
        )}/>)

}


