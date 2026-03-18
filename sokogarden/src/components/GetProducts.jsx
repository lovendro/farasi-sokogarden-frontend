import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const GetProducts = () => {

  const[loading,setLoading]=useState("")
  const[error,setError]=useState("")
  const[products,setProducts]=useState([])
  const image_url="http://lovendro.alwaysdata.net/static/images/"
  const navigate=useNavigate()


  const fetchproducts=async()=>{
    setLoading("please wait as we retrieve your products")
    try {
      const response=await axios.get("http://lovendro.alwaysdata.net/api/getproductsdetails")
      console.log("The response is",response);
      
      setProducts(response.data)
      setLoading("")
      
    } catch (error) {
      
      setLoading("")
      setError(error.message)

    }
  }

  // END OF FUNCTION WHERE WE CALL USEEffect
  useEffect(()=>{
    fetchproducts()
  },[])
  return (
    <div className='row'>
        <h1>Available products </h1>

        <p className='text-warning'>{loading}</p>
        <p className='text-warning'>{error}</p>

        {/* calling.map to iterate through each item */}
        {products.map((product)=>(


        <div className='col-md-3 justify-content-centre'>
          <div className='card shadow m-4'>
            <img src={image_url + product.product_photo} alt="shoe" className='product_img'/>
            <div className='card-body'>
              <h5 className='text-success'>{product.product_name}</h5>
              <p className='text-dark'>{product.product_description}</p>
              <p className='text-secondary'>{product.product_cost}</p>
              <input type="button" className='btn btn-secondary w-100' value='Purchase now' onClick={()=>navigate("/mpesa",{state:{product}})}/>

            </div>

          </div>

        </div>
        ))}

    </div>
  )
}

export default GetProducts