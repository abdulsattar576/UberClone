import React from "react";
import { Route ,Routes} from "react-router-dom";
import Start from "./pages/Start";
import UserSignUp from "./pages/UserSignUp";
import UserLogin from "./pages/UserLogin";
import CaptaineSignUp from "./pages/CaptaineSignUp";
import CaptainLogin from "./pages/CaptainLogin";
import Home from "./pages/Home";
import UserProtecterWrapper from "./pages/UserProtecterWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
 
import CaptainProtectorWrapper from "./pages/CaptainProtectorWrapper";
import CaptainLogout from "./pages/CaptainLogout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/user-signup" element={<UserSignUp />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/captain-signup" element={<CaptaineSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/home" element={<UserProtecterWrapper>
          <Home  />
        </UserProtecterWrapper>} />
         <Route path="/user-logout" element={<UserProtecterWrapper>
          <UserLogout />
        </UserProtecterWrapper>} />
        <Route path="/captain-home" element={ <CaptainProtectorWrapper>
          <CaptainHome/>
        </CaptainProtectorWrapper>}/>
        <Route path="/captain-logout" element={<CaptainProtectorWrapper>
          <CaptainLogout/>
        </CaptainProtectorWrapper>}/>
      </Routes>
    </div>
  );
};

export default App;
