import React, { useState } from 'react'
import 'boxicons/css/boxicons.min.css'
import Cart from './Cart'

const Header = ({size,cart,setCart,handleChange}) => {
  const [toggle, setToogle] = useState(false)

  const handleToggle = () =>{
    setToogle(!toggle)
  }
  return (
    <nav className="navbar navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="#">
            <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" />
            </a>
            <div className="cartico" onClick={handleToggle}>
                <i className='bx bxs-cart'></i>
                <span>{size}</span>
            </div>
        </div>

        <div  className={toggle? 'cartSidebar cartSidebar_open shadow-lg bg-light': 'cartSidebar '}>
          <span className="closeCart" onClick={handleToggle}>x</span>
          <Cart size={size} cart={cart} setCart={setCart} handleChange={handleChange}/>
        </div>
    </nav>
  )
}

export default Header