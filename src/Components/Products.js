import React from 'react'
import './Products.css'
import SingleProduct from './SingleProduct'
import Title from './Title'
export default function Products(props) {
 
    return (
        <div className="container">
                <Title name="product"/>
            <div className="row">
            {props.posts.map((post)=>
           <SingleProduct post={post}/>
         )}
        </div>
        </div>
    )
}










