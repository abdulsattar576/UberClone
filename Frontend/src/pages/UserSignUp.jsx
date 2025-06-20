import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";

const UserSignUp = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("")
  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [UserData, setUserData] = useState({})
  const handleSubmit = (e) => {
    e.preventDefault();
     setemail("");
      setpassword("");
      setfirstName("");
      setlastName("");
      setUserData({
        fullName: {
          firstName: firstName,
          lastName: lastName,
        },
         email: email,
          password: password  
      })
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <h1 className="text-4xl text-black font-bold mb-4">Uber</h1>
      <form onSubmit={handleSubmit} >
           <h3 className="text-lg mb-4 font-medium ">What's Your Name</h3>
        <div className='flex gap-4'>
       
          <input
          type='text'
          name='firstName'
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
          placeholder="First Name"
          required
          className="bg-[#eeeeee] px-4 py-2 border w-1/2 text-lg placeholder:text-base mb-4"
          />
          <input
          type='text'
          name='lastName'
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
          placeholder="Last Name"
          className='bg-[#eeeeee] px-4 py-2 border w-1/2 text-lg placeholder:text-base mb-4'/>
        </div>
        <h3 className=" text-lg mb-4 font-medium">What's Your Email</h3>
        <input
        name="email"
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="email@example.com"
          required
          className="bg-[#eeeeee] px-4 py-2 border w-full text-lg placeholder:text-base mb"
        />
        <h3 className="text-lg mb-4 font-medium">Enter password</h3>
        <input
        name="password"
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="password"
          required
          className="bg-[#eeeeee] px-4 py-2 border w-full text-lg placeholder:text-sm mb-4"
        />
        <button type="submit" className="bg-[#111]  text-white py-2 px-4 w-full text-center font-semibold shadow-md rounded-md placeholder:text-sm text-lg mb-3">
          Signup
        </button>
        <p className="text-center">Already have an account?<Link to='/user-login' className="text-blue-600 text-pretty text-center">Login here</Link></p>
      </form>
      </div>
      <p className="text-xs font-sm leading-3">
  <span>By proceeding, you consent to receive calls, texts, or emails from Uber and its affiliates,</span>
  <span> including automated messages, at the contact information you provide. </span>
  <span>This may include offers, updates, and account-related communication. </span>
  <span>You can opt out anytime.</span>
</p>

    </div>
  )
}

export default UserSignUp