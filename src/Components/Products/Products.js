import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../UI/Card'

export default function Products() {
    const data = useSelector(state => state.product.items)
    const isexist = useSelector(state=>state.cart.isexistingItem)
    return (
        <div className="container">
            <div className="row">
            {data.map((post) =>
                <Card key={post.id} url={post.url} id={post.id} isexist={isexist} name={post.name} price={post.price} productQuantity={post.productQuantity}></Card>
            )}  
        </div>
        </div>
    )
}










