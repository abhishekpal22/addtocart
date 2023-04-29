import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import Cart from './Cart'

const apiURL = 'https://fakestoreapi.com/products/'

const Products = ({handleClick}) => {
  const [list, setList] = useState([])

  useEffect(()=>{
    axios.get(apiURL)
    .then((response)=>{
      
      response.data.forEach(element=>{
         element.quantity=1;
      })
      setList(response.data)
      
    })
  })
  return (
    <section className='productLists'>
      <div className="container">
        <div className="row">
          {
            list.map(item=>(
              <Card key={item.id} item={item}  handleClick={handleClick}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Products