import React from "react";
import { Route ,Routes} from "react-router-dom";
import Home from "./pages/Home";
import UserSignUp from "./pages/UserSignUp";
import UserLogin from "./pages/UserLogin";
import CaptaineSignUp from "./pages/CaptaineSignUp";
import CaptainLogin from "./pages/CaptainLogin";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-signup" element={<UserSignUp />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/captain-signup" element={<CaptaineSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
      </Routes>
    </div>
  );
};

export default App;
