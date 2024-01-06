import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import PrivateRoutes from "./constants/PrivateRoute";
import Signup from "./components/styled/Signup";
import Signin from "./components/styled/Signin";
import Top from "./components/styled/Top";
import Landing from "./pages/Landing";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/single/:id" element={<Top/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
