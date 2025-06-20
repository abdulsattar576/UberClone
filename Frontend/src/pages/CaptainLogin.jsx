import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
const CaptainLogin = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("")
   const [captainData, setcaptainData] = useState({})
    const submitHandler = (e) => {
      captainData({
        email: email,
        password: password,})
      e.preventDefault();
      setemail("");
      setpassword("");
    }
  return (
        <div className="p-7 flex flex-col justify-between h-screen">
      <div>
       <img src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="Uber Logo" className="w-32 mb-4" />
      <form onSubmit={submitHandler}>
        <h3 className="text-xl mb-4">What's Your Email</h3>
        <input
        name="email"
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="email@example.com"
          required
          className="bg-[#eeeeee] px-4 py-2 border w-full text-lg placeholder:text-base mb"
        />
        <h3 className="text-xl mb-4">Enter password</h3>
        <input
        name="password"
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="password"
          required
          className="bg-[#eeeeee] px-4 py-2 border w-full text-lg placeholder:text-base mb-4"
        />
        <button type="submit" className="bg-[#111]  text-white py-2 px-4 w-full text-center font-semibold shadow-md rounded-md placeholder:text-base text-lg mb-3">
          Login
        </button>
        <p className="text-center">Join a fleet?<Link to='/captain-signup' className="text-blue-600"> Register as a Captain</Link></p>
      </form>
      </div>
      <div className="mt-6 flex justify-center items-center">
        <Link to='/user-login' className="bg-[#ebd322] text-white rounded-md px-4 py-2 text-lg placeholder:text-base w-full flex items-center justify-center font-semibold mb-4">Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin