import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { userAction } from '../../store/user'
import Form from '../UI/Form'
import FormField from '../UI/FormField'

function Login() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const dispatch = useDispatch()
    let history = useHistory()
    function submitHandler(e){
      e.preventDefault()
      dispatch(userAction.login({ username,password}))
      history.push("/product")
    }
    return (
        <Form>
            <div className="col-lg-6">
                <form onSubmit={ submitHandler}>
                <div className="card2 card border-0 px-4 py-5 my-5 ml-5">

                <h1 className="text-primary">Login</h1>
                <FormField name="username" type="text" stateFunction={setUsername} placeholder="Enter Username"/>
                <FormField name="Password" type="text" stateFunction={setPassword} placeholder="Enter Password"/>

                <div className="row mb-3 px-3"> 
                <button type="submit" className="btn btn-blue text-center" >Login</button> 
                </div>
                <div className="row mb-3 px-3"> 
                <NavLink to='./signup'><h5 className="mb-5 text-sm text-dark" >Need an Account Signup</h5></NavLink> 
                </div>
                
                 
                </div>
            </form>
            </div>
    </Form>
    )
}

export default Login
