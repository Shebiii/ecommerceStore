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
    <div className="card1" key={props.id}>
        <NavLink to={`/product/${props.id}`}>
            <img src={props.url} alt={props.alt}  />
        </NavLink>
        <h1>{props.name}</h1>
        <p className="price">${props.price}</p>
        <p>{props.description}</p>
        {props.productQuantity > 0 ? <p className="text-success">Instock</p> : <p className='text-danger'>Out of stock</p>}
        <p><button onClick={clickHandler}>Add to Cart</button></p>
    </div>
)
}

export default Card
