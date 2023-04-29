import React, { useEffect, useState } from 'react'

const Cart = ({ cart,size, setCart,handleChange }) => {
    
    const [totalPrice, setTotalPrice] = useState()
    const [cartEmpty, setCartEmpty] = useState(false)
    
    const handleCartEmpty = ()=>{
        size === 0?setCartEmpty(true):setCartEmpty(false)
     }
    useEffect(() => {
        let prices = 0;
        cart.forEach(element => {
            prices +=element.quantity* element.price; 

        });
        setTotalPrice(prices.toFixed(2))

        handleCartEmpty()
        
    })
    const handleRemove = (id)=>{
        const arr = cart.filter((item)=> item.id !== id)
        setCart(arr)
    }
    
    return (

        <>
            <div className='cartitmsinn'>
                {

                    cart?.map(item => (

                        <div className="media" key={item.id}>
                            <div className="media-img">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="media-body">
                                <h3>{item.title}   <small onClick={()=>handleRemove(item.id)} className='remove'><i className='bx bx-trash'></i></small></h3>
                                <div className="counts mb-2">
                                    <span onClick={()=>handleChange(item, -1)}>-</span>
                                    <b className='shadow-sm bg-white'>{item.quantity}</b>
                                    <span onClick={()=>handleChange(item, +1)}>+</span>
                                </div>
                                <b>₹{item.quantity* item.price}</b>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                cartEmpty? <h6 className='text-center'>Cart is Empty</h6>: <h5 className='total'><span>Total:</span><b>₹ {totalPrice}</b></h5>
            }
            
        </>
    )
}

export default Cart