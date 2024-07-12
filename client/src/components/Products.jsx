import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard.jsx'

function Products() {

    const [products, setproducts] = useState([])

    const getproducts = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/categories/Phone/products`)    
            console.log(res)
            if (res.data) {
                setproducts(res.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getproducts()
    }, [])

  return (
    <div className='smoothie-main' >
        {
            products.map((product, index) => <ProductCard product={product} key={index} /> )
        }
    </div>
  )
}

export default Products