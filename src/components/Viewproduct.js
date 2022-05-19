import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
const Viewproduct = () => {
    
  var [product,setProduct]=useState([])
  axios.get("https://fakestoreapi.com/products").then(
      (response)=>{
  console.log(response.data)
       setProduct(response.data)
      }
  )
  return (
    <div>
        <Navbar/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                
                    {product.map((value,key)=>{
return <div className='col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3'>
    <div class="card" >
  <center>
  <img style={{width:250,height:250}} src={value.image} class="card-img-top"alt="..." />
  </center>
  <div class="card-body">
    <h5 class="card-title">title:{value.title}</h5>
    <p class="card-text">price:{value.price}</p>
    <p class="card-text">category:{value.category }</p>
    <a href="#" class="btn btn-primary">BUY NOW</a>
  </div>
</div>
</div>
                    })}
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Viewproduct