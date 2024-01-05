import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Form from "./components/shared/Form";
import Addproduct from "./components/styled/Addproduct";
import Addcategory from "./components/styled/Addcategory";
import Addsubcategory from "./components/styled/Addsubcategory";
import Whishlist from "./components/styled/Whishlist";
import Product from "./components/styled/Product";
import Nav from "./components/styled/Nav";
import Category from "./components/styled/Category";
import Home from "./pages/Home";
import Signup from "./components/styled/Signup";
import Signin from "./components/styled/Signin";
import Single from "./components/styled/Single";
import Editproduct from "./components/styled/Editproduct";
import Top from "./components/styled/Top";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Signin/>} />
          <Route path="/add-product" element={<Addproduct/>} />
          <Route path="/whishlist" element={<Whishlist/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/single/:id" element={<Top/>} />
          <Route path="/edit" element={<Editproduct/>} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
