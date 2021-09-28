import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { productAction } from '../../store/Productslice'
import Form from '../UI/Form'
import FormField from '../UI/FormField'

function Addproduct() {
    
const [id, setId] = useState()
const [price, setPrice] = useState()
const [quantity, setQuantity] = useState()
const [description, setDescription] = useState()
const [url, setUrl] = useState()
    const [name, setName] = useState()
    
    const dispatch = useDispatch()

    function clickHandler(e) {
        dispatch(productAction.addProduct({
            id,
            price: parseInt(price),
            productQuantity: quantity,
            url,
            name,
            description
        })) 
    }

    return (
        <Form>
            <div className="col-lg-6">
                <div className="card2 card border-0 px-4 py-5 my-5 ml-5">
                <h1 > Add produts</h1>
                <FormField name="Product Id" type="text" stateFunction={setId} placeholder="Enter ProductId"/>
                <FormField name="Product Name" type="text" stateFunction={setName} placeholder="Enter product"/>
                <FormField name="Product Price" type="text" stateFunction={setPrice} placeholder="Enter Price"/>
                <FormField name="Product Quantity" type="text" stateFunction={setQuantity} placeholder="Enter Quantity"/>
                <FormField name="Product URL" type="text" stateFunction={setUrl} placeholder="Enter URL"/>
                <FormField name="Product Description" type="text" stateFunction={setDescription} placeholder="Enter Description"/>
                 <div className="row mb-3 px-3"><NavLink to="/"> <button type="button" className="btn btn-dark text-center" onClick={ clickHandler}>Add Product</button> </NavLink></div>
                </div>
            </div>
        </Form>
    )
}

export default Addproduct
