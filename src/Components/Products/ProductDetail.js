import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import { cartAction } from '../../store/cartSlice';

import './ProductDetail.css'
export default function ProductDetail() {
	const parm = useParams();
	const productDetails = useSelector(state => state.product.items)
	const data = productDetails.filter(items => items.id === parseInt(parm.id))
	const dispatch = useDispatch()
	function clickHandler(e) {
		dispatch(cartAction.additemtocart({
			id: data[0].id,
			price: data[0].price,
			totalPrice: data[0].price,
			name: data[0].name,
			url: data[0].url,
			productQuantity : data[0].productQuantity

		}))
	}
    return (
	<div className="container">
		<div className="card">
			<div className="container-fliud">
				<div className="wrapper row">
					<div className="preview col-md-6">
						<div className="preview-pic tab-content">
						  <div className="tab-pane active" id="pic-1"><img src={data[0].url} alt="" /></div>
						</div>                       			
					</div>
				<div className="details col-md-6">
					<h3 className="product-title">{data[0].name}</h3>
				
					<p className="product-description">{data[0].description}</p>
					<h4 className="price">current price: <span>{data[0].price}</span></h4>
						<div className="action">
							{data[0].productQuantity 
							? <NavLink to="/cart"><button className="add-to-cart btn btn-default" type="button"  onClick={clickHandler}>add to cart</button></NavLink>
							: <button className="add-to-cart btn btn-default disabled" type="button">Out of stock</button>		
							}
						</div>
				</div>
				</div>
			</div>
		</div>
	</div>

    )
}
