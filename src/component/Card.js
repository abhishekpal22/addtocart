import React, { useState } from 'react'

const Card = ({item,handleClick}) => {
   
    const {title,price,image,rating} = item
    
  return (
    <div className="col-6 col-md-4 col-lg-3">
        <div className="card">
            <div className="card-img">
                <img src={image} alt="" />
            </div>
            <div className="card-body">
                <h5>{title}</h5>
                <p>{rating.rate}<i className='bx bxs-star'></i></p>
                <h6><b>₹ {price}</b></h6>
                <div className="card_foot">
                    <button className='btn btn-sm btn-primary' onClick={()=>handleClick(item)}>Add to cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card