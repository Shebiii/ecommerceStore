import React from 'react'
import { NavLink } from 'react-router-dom'
import './Cart.css'
export default function Cart(props) {
    const data = props.posts
    let count = 1;
    let total = localStorage.getItem("total")
    function deleteHandler(e){
        e.preventDefault()
        let y = data[e.target.value-1].price
        total = total - y;
        console.log(y)
        console.log(total)
        localStorage.setItem("total",total)
        localStorage.removeItem(e.target.value)
        window.location.reload(true);
    }
    
    return (

        <>
            <div className="container">
            <table id="cart" className="table table-hover table-condensed" key={Math.random()}>
                    <thead >
                                    <tr>
                                        <th className="text-center">Product detail</th>
                                        <th className="text-center">Price</th>
                                        <th className="text-center">Quantity</th>
                                        <th className="text-center">Subtotal</th>
                                        <th className="text-center">Delete</th>
                                    </tr>
                                </thead> 
                    {data.map((post) =>
                        <>
                            
                            {localStorage.getItem(post.id) &&<>
                                
                                <tbody>
                                    <tr>
                                        <td data-th="Product">
                                            <div className="row">
                                                <div className="col-sm-2 hidden-xs"><img src={post.url} alt="..." className="img-responsive" /></div>
                                                <div className="col-sm-10">
                                                    <h4 className="nomargin">{post.title}</h4>
                                                    <p>{post.description.substring(0, 100)} ....</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td data-th="Price">{post.price}</td>
                                        <td data-th="Quantity">
                                        <input type="number" className="form-control text-center" value="1"  max={post.quantity} min="0" />
                                        </td>
                                        <td data-th="Subtotal" className="text-center">1.99</td>
                                    <td className="actions" data-th="">
                                            <button className="btn btn-danger btn-sm" value={post.id} onClick={deleteHandler}>Delete</button>
                                        </td>
                                    </tr>
                                </tbody></>
                            }
                            </>
                    )}
					<tfoot>
						<tr className="visible-xs">
                            <td className="text-center"><strong>total : { total } </strong></td>
						</tr>
						<tr>
							<td><NavLink to="/" className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</NavLink></td>
							<td colspan="2" className="hidden-xs"></td>
							<td className="hidden-xs text-center"><strong>Total :{total} </strong></td>
							<td><NavLink to="/" className="btn btn-success btn-block">Checkout <i className="fa fa-angle-right"></i></NavLink></td>
                        </tr>
                    
					</tfoot>
            </table>
        </div>
        </>
    )
}
