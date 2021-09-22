import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SingleProduct(props) {
    return (
        
         <div className="col-md-4" key={props.post.id}>
            <div className="bbb_deals">
                <div className="ribbon ribbon-top-right"></div>
                <div className="bbb_deals_slider_container">
                    <div className=" bbb_deals_item">
                        <div className="bbb_deals_image"><NavLink to={`/product/${props.post.id}`}><img src={props.post.url} alt="" height="200px"/></NavLink></div>
                        <div className="bbb_deals_content">
                            <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                                <div className="bbb_deals_item_category"><NavLink to="/">{props.post.category}</NavLink></div>
                                <div className="bbb_deals_item_price_a ml-auto"><strike>{props.post.price}</strike></div>
                            </div>
                            <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                                <div className="bbb_deals_item_name">{props.post.title}</div>
                                <div className="bbb_deals_item_price ml-auto">{props.post.price}</div>
                            </div>
                            <div className="available">
                                <div className="available_line d-flex flex-row justify-content-start">
                                    <div className="available_title"> 
                            {props.post.quantity>0 ? <p className="text-success">Instock</p> : <p className='text-danger'>Out of stock</p>}</div>
                                    <div className="sold_stars ml-auto"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
                                </div>
                                <div className="available_bar"></div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>

    )
}
