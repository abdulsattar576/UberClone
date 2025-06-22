import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";

 import { userDataContext } from "../context/UserContext";
 import { useContext } from "react";
import axios from "axios";
const UserLogin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("")
  const [userData, setuserData] = useState({})
  const { user, setuser } = useContext(userDataContext);
const navigate = useNavigate();
  const submitHandler = async(e) => {
     e.preventDefault();
    const user={
      email: email,
      password: password}
      const response= await axios.post(`${import.meta.env.VITE_BASE_URL}/api/user/login`, user);
   if(response.status === 200){
      const data = response.data;
       localStorage.setItem('token', data.token);
      setuser(data.user);
      navigate('/home');
      setemail("");
      setpassword("");
    }
  };
    return (
      <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <h1 className="text-4xl text-black font-bold mb-4">Uber</h1>
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
        <p className="text-center">New here?<Link to='/user-signup' className="text-blue-600">Create new Account</Link></p>
      </form>
      </div>
      <div className="mt-6 flex justify-center items-center">
        <Link to='/captain-login' className="bg-[#10b416] text-white rounded-md px-4 py-2 text-lg placeholder:text-base w-full flex items-center justify-center font-semibold mb-4">Sign in as Captain</Link>
      </div>
    </div>
  );
};

export default UserLogin;
