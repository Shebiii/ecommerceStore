import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cartAction } from '../../store/cartSlice'
function Table() {
    const dispatch = useDispatch()
    const data = useSelector(state => state.cart.items)
    return (
         <table className="table table-borderless">
            <thead>
                <tr>                                            
                    <th scope="col">Photo</th>
                    <th scope="col">Product</th>
                    <th scope="col">Add</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Remove</th>
                    <th scope="col">Price</th>
                    <th scope="col" className="text-right">Total</th>
                </tr>
            </thead>
            <tbody>
                {data.map((product) => 
                        <tr>
                    <td><img src={product.url} className="img-fluid" width="35" alt="product"/></td>
                        <td>{product.name}</td>
                        {product.quantity < product.productQuantity ?
                            <td><a href="#" className="text-success" onClick={() => dispatch(cartAction.additemtocart({ id: product.id, price: product.price }))}><i className="fa fa-plus" aria-hidden="true"></i></a></td>
                            :
                            <td className="text-danger">limit reached</td>
                        }

                        <td><div className="form-group mb-0">  <h5 >{product.quantity}</h5></div></td>
                            <td><a href="#" className="text-danger" onClick={()=>dispatch(cartAction.removeItemtocart(product.id))} ><i className="fa fa-minus" aria-hidden="true"></i></a></td>
            
                    <td>${product.price}</td>
                    <td className="text-right">${product.price * product.quantity}</td>
                </tr>     
                )}
            </tbody>
        </table>
    )
}

export default Table
