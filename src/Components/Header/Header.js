import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { userAction } from "../../store/user"
import "./Header.css"
export default function Header(props) {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const Close = () => setClick(false)
  const dispatch = useDispatch()
  const value = useSelector((state) => state.cart.totalquantity)
  const Logouthandle = () => {
    dispatch(userAction.logout())
  }
  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar">
        <div className="nav-container">
          <NavLink
            exact
            to="/"
            className="nav-logo text-decoration-none text-success"
          >
            Store
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/add-product">
                <button className="btn btn-success mr-3 text-white">
                  Add products
                </button>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart">
                <button className="btn btn-success mr-3" onClick={Logouthandle}>
                  Logout
                </button>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart">
                <button className="btn btn-success mr-3">
                  <i className="fas fa-shopping-cart "></i>
                  <span className="text-white">
                    {value <= 9 ? value : <span>9+</span>}
                  </span>
                </button>
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>

    // <div>
    //   <header className="header-bar bg mb-3 row">
    //     <div className="container d-flex flex-column flex-md-row align-items-center p-3 col-12">
    //       <h4 className="my-0 mr-md-auto font-weight-normal">
    // <NavLink to="/" className="text-white text-decoration-none">
    //   STORE
    // </NavLink>
    //       </h4>
    //       <form className="mb-0 pt-2 pt-md-0">
    //         <div className="row align-items-center">
    //           <div className="col-md-auto">
    // <NavLink to="/add-product">
    //   <button className="btn btn-dark mr-3 text-success">
    //     Add products
    //   </button>
    // </NavLink>
    // <button className="btn btn-success mr-3" onClick={Logouthandle}>
    //   Logout
    // </button>
    // <NavLink to="/cart">
    //   <button className="btn btn-dark mr-3">
    //     <i className="fas fa-shopping-cart "></i>
    //     <span className="text-success">
    //       {value <= 9 ? value : <span>9+</span>}
    //     </span>
    //   </button>
    // </NavLink>
    //           </div>
    //         </div>
    //       </form>
    //     </div>
    //   </header>
    // </div>
  )
}
