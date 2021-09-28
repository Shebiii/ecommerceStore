import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { userAction } from '../../store/user';
export default function Header(props) {
    
  const dispatch = useDispatch()
    const value = useSelector(state => state.cart.totalquantity)
    function Logouthandle(){
      dispatch(userAction.logout())
    }
    return (
        <div>
        <header className="header-bar bg mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <NavLink to="/" className="text-warning text-decoration-none" >
            STORE
          </NavLink>
        </h4>
        <form  className="mb-0 pt-2 pt-md-0">
          <div className="row align-items-center">
            <div className="col-md-auto">
              <NavLink to="/add-product">
                <button className="btn btn-dark mr-3 text-warning"> Add products</button>
               </NavLink>
              <button className="btn btn-danger mr-3" onClick={Logouthandle}>Logout</button>
             <NavLink to="/cart"><button className="btn btn-dark mr-3">
               <i className="fas fa-shopping-cart "></i><span className="text-warning" >{value<=9 ? value : <span>9+</span>}</span></button></NavLink>
              </div>
          </div>
        </form>
      </div>
    </header>

        </div>
    )
}
