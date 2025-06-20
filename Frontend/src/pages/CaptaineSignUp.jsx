import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptaineSignUp = () => {
  
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
              <img src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="Uber Logo" className="w-32 mb-4" />

      <form onSubmit={handleSubmit} >
           <h3 className="text-lg mb-4 font-medium ">What's Your Captain Name</h3>
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
        <p className="text-center">Already have an account?<Link to='/captain-login' className="text-blue-600 text-pretty text-center">Login here</Link></p>
      </form>
      </div>
       <p className="text-xs font-sm leading-3">
  <span>By continuing, you accept </span>
  <span className="text-blue-600 underline">Uber’s Terms of Service</span>
  <span> and </span>
  <span className="text-blue-600 underline">Privacy Policy</span>
  <span>. This site is protected by reCAPTCHA, and </span>
  <span className="text-blue-600 underline">Google’s Privacy Policy</span>
  <span> and </span>
  <span className="text-blue-600 underline">Terms</span>
  <span> apply.</span>
</p>

    </div>
  )
}

export default CaptaineSignUp