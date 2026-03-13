import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const SignIn = () => {

      const[email,setEmail]=useState("")
      const[password,setPassword]=useState("")

      const[loading,setLoading]=useState("")
      const[success,setSuccess]=useState("")
      const[error,setError]=useState("")

      // a hook used to navigate user
      const navigate=useNavigate();

      const submit=async(e)=>{
        e.preventDefault()
        setLoading("Please wait as we sign you in")

        try {
          const data=new FormData()
          data.append("email",email)
          data.append("password",password)

          const response=await axios.post("http://lovendro.alwaysdata.net/api/signin",data)
          setLoading("");
          // check if the response has user item
          if(response.data.user){
            localStorage.setItem("user",JSON.stringify(response.data.user));
            // if user is found ,store  user details in local storage
            setSuccess(response.data.message);

            // redirect to getproducts
            setTimeout(()=>{
              navigate("/");

            },2000)
          }
          else{
            // user not found,show erro message
            setError(response.data.message)
          }
          

          
        } catch (error) {
          setLoading("")
          setError(error.data.message)
          
        }

      };
  return (
   
        <div className='row  mt-3 justify-content-center'>
          <div className='card shadow col-md-6'>
            <form action=""onSubmit={submit}>

             <h1>sign in</h1>
             <p className='text-warning'>{loading}</p>
             <p className='text-success'>{success}</p>
             <p className='text-danger'>{error}</p>

            <input type="email" className='form-control' placeholder='Enter your email'required value={email}onChange={(e)=>setEmail(e.target.value)}/>
            <br />
            <br />
            <input type="password" className='form-control' placeholder='Enter your password'required value={password} onChange={(e)=>setPassword(e.target.value)} />
            <br />
            
            <input type="submit"value='sign in'className='text-white bg-primary form-control' />
            <br />
            <p>Don't have an account? <Link to={"/signup"}>sign up</Link></p>
          </form>

          </div>

        </div>
      
    
  
  )
}

export default SignIn