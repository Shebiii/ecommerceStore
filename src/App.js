import React,{useState} from 'react';
import { BrowserRouter ,Switch , Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Guest from './Components/Guest';
import Header from './Components/Header';
import Products from './Components/Products';
import ProductDetail from './Components/ProductDetail';
import PageNotFound from './Components/PageNotFound';
import Cart from './Components/Cart';

function App() {

     const posts = [
  {id: 1, title: 'product 1', price:231 , url:"https://assets.codepen.io/4164355/shoes.png" ,quantity : 0 , description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`},
  {id: 2, title: 'product 2', price:643 , url:"https://i.imgur.com/9UYzfny.png",quantity : 1 , description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`},
  {id: 3, title: 'product 3', price:332 , url:"https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",quantity : 12 , description: 'Welcome to learning React!'},
];
const [isloggedin ,  setLoggedin] = useState(false)
      return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          
        
        <Route path="/" exact>  
        <Header setLoggedin={setLoggedin} isloggedin={isloggedin}/>
        {isloggedin ? <Products posts={posts}/> : <Guest/>}
        <Footer/>
        </Route>
        
        <Route path="/product/:id">  
        <Header setLoggedin={setLoggedin} isloggedin={isloggedin}/>
        {isloggedin ? <ProductDetail posts={posts}/>: <Guest/>}
        <Footer/>
        </Route>
        
        <Route path="/cart">
        <Header setLoggedin={setLoggedin} isloggedin={isloggedin}/>
        <Cart posts={posts}/>
        </Route>

        <Route path="*">
        <PageNotFound/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
