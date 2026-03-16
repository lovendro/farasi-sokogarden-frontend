import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import axios from 'axios'

const AddProducts = () => {
  const[product_name,setProductname]=useState("")
  const[product_description,setProductdescription]=useState("")
  const[product_cost,setProductcost]=useState("")
  const[product_photo,setProductphoto]=useState("")

  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")

  const submit=async(e)=>{
    e.preventDefault()
    setLoading("please wait as we upload your products to the server")

    try {
      
      const data=new FormData()

      data.append("product_name",product_name)
      data.append("product_description",product_description)
      data.append("product_cost",product_cost)
      data.append("product_photo",product_photo)

      const response=await axios.post("http://lovendro.alwaysdata.net/api/addproducts",data)
      setLoading("")
      setSuccess(response.data.message)
      setProductname("")
      setProductdescription("")
      setProductcost("")
      setProductphoto("")
      setTimeout(() => {
        
        setSuccess("")
        
      }, 2000);
      

    } catch (error) {
      setLoading("")
      setError(error.message)

      
    }
  }

  return (
    <div className='row justify-content-center mt-4'>
      <div className='card shadow col-md-6'>
        <form action="" onSubmit={submit}>
          <h1>Upload products</h1>

          <p className='text-warning'>{loading}</p>
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>

          <input type="text" className='form-control' placeholder='Enter product name' required value={product_name} onChange={(e)=>setProductname(e.target.value)}/>
          <br />

          <textarea name="" id="" className='form-control' placeholder='Describe your products' required value={product_description} onChange={(e)=>setProductdescription(e.target.value)}></textarea>
          <br />

          <input type="number" className='form-control' placeholder='Enter product cost' required value={product_cost} onChange={(e)=>setProductcost(e.target.value)}/>
          <br />

          <h3>upload product photo</h3>
          <input type="file" className='form-control'required onChange={(e)=>setProductphoto(e.target.files[0])} accept="image/*"/>
          <br />

          <input type="submit" className='form-control btn bg-primary text-white' value="Upload products" required/>
          <br />
          <br />

        </form>
      </div>
    </div>
  )
}

export default AddProducts