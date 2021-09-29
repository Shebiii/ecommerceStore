import React, { Suspense } from 'react';
import { BrowserRouter ,Switch } from 'react-router-dom';
import './App.css';
// import Signup from './Components/Signup/Signup';
// import ProductDetail from './Components/Products/ProductDetail';
import { PrivateRoute } from './Routers/PrivateRoute';
import { PublicRoute } from './Routers/PublicRoute';
import Login from './Components/Login/Login';

const Products = React.lazy(()=>import('./Components/Products/Products'));
const ProductDetail = React.lazy(()=>import('./Components/Products/ProductDetail'));
const Addproduct = React.lazy(()=>import('./Components/Products/Addproduct'));
const Cart = React.lazy(()=>import('./Components/cart/Cart'))
const Signup = React.lazy(()=>import('./Components/Signup/Signup'));
function App() {
  

  
      return (
    <div className="App">
      <BrowserRouter>
        
      <Suspense fallback={<div classname="container"><img src="https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif" className="rounded mx-auto d-block ml-5" alt="123"></img></div>}>
        <Switch>
          
        <PrivateRoute path="/product/:id" component={ProductDetail}/>
        <PrivateRoute path="/cart" component={Cart}/>
        <PrivateRoute path="/add-product" component={Addproduct} />
        <PrivateRoute path="/product" component={Products}/>
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/signup" component={Signup} />
        <PrivateRoute path="/" component={Products} />
      </Switch>
      </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
