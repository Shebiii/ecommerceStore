import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './Card.css'
import { cartAction } from '../../store/cartSlice'

function Card(props) {
    const dispatch = useDispatch()
    function clickHandler(e) {
		dispatch(cartAction.additemtocart({	id: props.id,price: props.price,totalPrice: props.price,name: props.name,
			url: props.url,productQuantity : props.productQuantity
		}))
        
	}
    return (
        <>
    <div class="card1" key={props.key}>
        <NavLink to={`/product/${props.id}`}><img src={props.url} alt={props.alt}  /></NavLink>
        <h1>{props.name}</h1>
        <p class="price">${props.price}</p>
        <p>{props.description}</p>
        {props.productQuantity > 0 ? <p className="text-success">Instock</p> : <p className='text-danger'>Out of stock</p>}
        {props.isexist ? <NavLink to="/cart"><button>Add to art</button></NavLink> : <p><button onClick={clickHandler}>Add to Cart</button></p>}
    </div>
</>
)
}

export default Card
