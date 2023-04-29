import React, { useState } from 'react'
import Header from './component/Header'
import Products from './component/Products'
import './App.css'
import Cart from './component/Cart'

const App = () => {
  const [show, setShow] = useState(true)
  const [cart, setCart] = useState([])
  const [warning, setWarning] = useState(false)


  const handleClick = (item) => {

    let isPresent = false
    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;

    })
    if (isPresent) {
      setWarning(true)
      setTimeout(() => {
        setWarning(false)
      }, 2000)
      return
    }
    setCart([...cart, item])
  }

  const handleChange = (item, d) => {
    // debugger;
    let ind = -1
    cart.forEach((data, index) => {
      if (data.id === item.id)
        ind = index
    })
    const tempArr = cart
    if (tempArr[ind].quantity === 0) {

      tempArr[ind].quantity = 1
    }
    if (d == -1) {

      tempArr[ind].quantity =tempArr[ind].quantity==1? 1: tempArr[ind].quantity - 1

    } else {
      tempArr[ind].quantity = tempArr[ind].quantity + 1
    }


    setCart([...tempArr])
  }
  return (
    <>

      <Header size={cart.length} cart={cart} setCart={setCart} handleChange={handleChange} />
      <Products handleClick={handleClick} />
      {
        warning && <p className='itemadded_alert bg-danger'>Item is already added to your cart</p>
      }
    </>
  )
}

export default App