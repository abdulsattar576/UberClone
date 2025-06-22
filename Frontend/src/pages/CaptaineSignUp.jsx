import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptaineSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vehicaleColor, setVehicaleColor] = useState("");
  const [vehicaleNumberPlate, setVehicaleNumberPlate] = useState("");
  const [vehicaleCapacity, setVehicaleCapacity] = useState("");
  const [vehicaleType, setVehicaleType] = useState("car");
  const navigate = useNavigate();
  const { setCaptain } = useContext(CaptainDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const captainData = {
      fullName: {
        firstName,
        lastName,
      },
      email,
      password,
      vehicale: {
        color: vehicaleColor,
        numberPlate: vehicaleNumberPlate,
        capacity: Number(vehicaleCapacity),
        vehicaleType,
      }
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/captain/register`,
        captainData
      );
      if (response.status === 201) {
        setCaptain(response.data.captain);
        localStorage.setItem('token', response.data.token);
        navigate('/captain-home');
      }
    } catch (error) {
      console.error("signup failed:", { error: error.message });
    }
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="Uber Logo" className="w-32 mb-4" />
        <form onSubmit={handleSubmit}>
          <h3 className="text-lg mb-4 font-medium">What's Your Captain Name</h3>
          <div className='flex gap-4'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              required
              className="bg-[#eeeeee] px-4 py-2 border w-1/2 text-lg placeholder:text-base mb-4"
            />
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              required
              className='bg-[#eeeeee] px-4 py-2 border w-1/2 text-lg placeholder:text-base mb-4'
            />
          </div>
          <h3 className="text-lg mb-4 font-medium">What's Your Email</h3>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            required
            className="bg-[#eeeeee] px-4 py-2 border w-full text-lg placeholder:text-base mb"
          />
          <h3 className="text-lg mb-4 font-medium">Enter password</h3>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            required
            className="bg-[#eeeeee] px-4 py-2 border w-full text-lg placeholder:text-sm mb-4"
          />
          <h3 className="text-lg mb-4 font-medium">Vehicle Details</h3>
          <input
            type="text"
            name="vehicaleColor"
            value={vehicaleColor}
            onChange={(e) => setVehicaleColor(e.target.value)}
            placeholder="Vehicle Color"
            required
            className="bg-[#eeeeee] px-4 py-2 border w-full text-lg placeholder:text-base mb-4"
          />
          <input
            type="text"
            name="vehicaleNumberPlate"
            value={vehicaleNumberPlate}
            onChange={(e) => setVehicaleNumberPlate(e.target.value)}
            placeholder="Number Plate"
            required
            className="bg-[#eeeeee] px-4 py-2 border w-full text-lg placeholder:text-base mb-4"
          />
          <input
            type="number"
            name="vehicaleCapacity"
            value={vehicaleCapacity}
            onChange={(e) => setVehicaleCapacity(e.target.value)}
            placeholder="Capacity"
            min={1}
            required
            className="bg-[#eeeeee] px-4 py-2 border w-full text-lg placeholder:text-base mb-4"
          />
          <select
            name="vehicaleType"
            value={vehicaleType}
            onChange={(e) => setVehicaleType(e.target.value)}
            required
            className="bg-[#eeeeee] px-4 py-2 border w-full text-lg placeholder:text-base mb-4"
          >
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="auto">Auto</option>
          </select>
          <button type="submit" className="bg-[#111] text-white py-2 px-4 w-full text-center font-semibold shadow-md rounded-md placeholder:text-sm text-lg mb-3">
            Create Captain Account
          </button>
          <p className="text-center">Already have an account?<Link to='/captain-login' className="text-blue-600 text-pretty text-center">Login here</Link></p>
        </form>
      </div>
      <p className="text-xs font-sm leading-3 mb-4 text-center">
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
  );
};

export default CaptaineSignUp;