import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CaptainLogout = () => {
    const token=localStorage.getItem('token')
    const navigate=useNavigate()
    const handleLogout=async()=>{
        try {
            const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/api/captain/logout`,{},{
    headers:{
        Authorization:`Bearer ${token}`
    }
})
if(response.status === 200){
    localStorage.removeItem('token')
    localStorage.removeItem('captain')
    console.log('Logout successful')
    navigate('/captain-login')
}

        } catch (error) {
            console.log(error.message)
        }
   }
  return (
    <div>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default CaptainLogout