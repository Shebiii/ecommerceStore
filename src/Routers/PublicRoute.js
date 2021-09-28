import React,{useEffect} from 'react'
import { Redirect, Route, useHistory } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

export const PublicRoute = ({
    component:Component,
    ...rest
}) => {
const isAuth = localStorage.getItem("username")

    return (
        
        <Route {...rest} component={(props) => (
            isAuth ?
                 <Redirect to='/product' />
                :
                <>
                    <Component {...props}/> 
                </>
                
        )}/>)

}


