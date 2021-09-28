import React from 'react';
import { BrowserRouter ,Switch } from 'react-router-dom';
import './App.css';
import Signup from './Components/Signup/Signup';
import Products from './Components/Products/Products';
import ProductDetail from './Components/Products/ProductDetail';
import Cart from './Components/cart/Cart'
import Addproduct from './Components/Products/Addproduct';
import { PrivateRoute } from './Routers/PrivateRoute';
import { PublicRoute } from './Routers/PublicRoute';
import Login from './Components/Login/Login';


function App() {
  

  
      return (
    <div className="App">
      <BrowserRouter>
        <Switch>

        <PrivateRoute path="/product/:id" component={ProductDetail}/>
        <PrivateRoute path="/cart" component={Cart}/>
        <PrivateRoute path="/add-product" component={Addproduct} />
        <PrivateRoute path="/product" component={Products}/>
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/signup" component={Signup} />
        <PrivateRoute path="/" component={Products} />
        
        
        
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
