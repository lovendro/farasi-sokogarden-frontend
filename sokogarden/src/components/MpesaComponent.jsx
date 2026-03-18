import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const MpesaComponent = () => {
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")
  

  const[phone,setPhone]=useState("")

  const{product}=useLocation().state || {}
  // A function to submit data to our api

  const submit=async(e)=>{
    e.preventDefault()
    setLoading("Please wait as we process your payment")

    try {
      const data=new FormData()
      data.append("phone",phone)
      data.append("amount",product.product_cost)


      const response=await axios.post("http://lovendro.alwaysdata.net/api/mpesa_payment",data)
      setLoading("")
      setSuccess(response.message)
      
    } catch (error) {
      setLoading("")
      
        setError(error.message)
        
      
      
    }




  }

  
  return (
    <div className='row justify-content-center'>
        <h1>Mpesa payment-Lipa na Mpesa</h1>
        <p className='text-success'>{product.product_name}</p>
        <p className='text-dark'>{product.product_description}</p>
        <p className='text-secondary'>{product.product_cost}</p>

        <p className='text-warning'>{loading}</p>
        <p className='text-success'>{success}</p>
        <p className='text-danger'>{error}</p>

        <div className='col-md-6'>
          <form action="" onSubmit={submit}>
            <input type="tel" className='form-control' placeholder='Enter your phone starting with 254' value={phone} required onChange={(e)=>setPhone(e.target.value)}/>
            <br />
            <input type="submit" className='btn btn-secondary  w-100' value="Make payment" required />
            
          </form>

        </div>
    </div>
  )
}

export default MpesaComponent