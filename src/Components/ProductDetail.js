import React,{useState} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Cart from './Cart';
import './ProductDetail.css'
export default function ProductDetail(props) {
	const parm = useParams();
	const data = props.posts[parm.id - 1];
	const [wishlist, setWishlist] = useState([])
	function clickHandler(e) {
	
		let totalsum=data.price
		localStorage.setItem(JSON.stringify(data.id), data.title)
		let item = data.price;
		if (localStorage.getItem("total")) {
			totalsum = parseInt(localStorage.getItem("total")) + item;
		}
		localStorage.setItem("total",totalsum)
		
		
     
	}
	function addToWishList(e) {
		e.preventDefault()
 	    let item = e.target.value;
		console.log(item);
		setWishlist(wishlist => [...wishlist, item]);
	}
    return (
        
	<div className="container">
		<div className="card">
			<div className="container-fliud">
				<div className="wrapper row">
					<div className="preview col-md-6">
						
						<div className="preview-pic tab-content">
						  <div className="tab-pane active" id="pic-1"><img src={data.url} alt="" /></div>
						</div>
			                                          			
					</div>
					<div className="details col-md-6">
						<h3 className="product-title">{data.title}</h3>
					
						<p className="product-description">{data.description}</p>
						<h4 className="price">current price: <span>{data.price}</span></h4>
							<div className="action">
								{
									data.quantity ? 
										<NavLink to="/cart"><button className="add-to-cart btn btn-default" type="button" value={ data.id } onClick={clickHandler}>add to cart</button></NavLink>
										:
								<button className="add-to-cart btn btn-default disabled" type="button">Out of stock</button>		
								}
								<button className="like btn btn-default" value={data.id} onClick={addToWishList} type="button"><span className="fa fa-heart"></span></button>
								
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
 

    )
}
