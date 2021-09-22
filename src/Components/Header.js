import React,{useState,useEffect} from 'react'

import { NavLink } from 'react-router-dom'
import { auth } from '../store/store'
export default function Header(props) {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    
    useEffect(() => {
      if (localStorage.getItem("username")) {
              props.setLoggedin(true)
      }
    })


    function submitHandler(e){
        e.preventDefault()
        //connection to data base jb aya ga data base
      if (username === "shoaib" && password === "1234") {
            props.setLoggedin(true);
            localStorage.setItem("username",username)
        }
    }
    function Logouthandle(e){
        e.preventDefault()
         props.setLoggedin(false)
         localStorage.removeItem("username")
         localStorage.removeItem("total")
    }
    return (
        <div>
        <header className="header-bar bg-primary mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <NavLink to="/" className="text-white">
            Shopi
          </NavLink>
        </h4>
        <form onSubmit={submitHandler} className="mb-0 pt-2 pt-md-0">
          <div className="row align-items-center">
            {!props.isloggedin ? <><div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
              <input name="username" onChange={e=>setUsername(e.target.value)} className="form-control form-control-sm input-dark" type="text" placeholder="Username" autoComplete="off" />
            </div>
            <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
              <input name="password" onChange={e=>setPassword(e.target.value)} className="form-control form-control-sm input-dark" type="password" placeholder="Password" />
            </div>
            <div className="col-md-auto">
              <button className="btn btn-success btn-sm">Sign In</button>
            </div></>:
            <div className="col-md-auto">
              <button className="btn btn-danger btn-sm" onClick={Logouthandle}>Logout</button>
             <NavLink to="/cart"><button className="btn btn-secondary btn-sm ml-3"><i className="fas fa-shopping-cart"></i></button></NavLink>
              <button className="btn btn-secondary btn-sm ml-3"><i className="fa fa-heart" aria-hidden="true"></i></button>
            </div>}
            
          </div>
        </form>
      </div>
    </header>

        </div>
    )
}
