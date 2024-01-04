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

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Signin/>} />
          <Route path="/add-product" element={<Addproduct/>} />
          {/* <Route path="/add-category" element={<Addcategory/>} /> */}
          {/* <Route path="/add-subcategory" element={<Addsubcategory/>} /> */}
          <Route path="/whishlist" element={<Whishlist/>} />
          {/* <Route path="/home" element={<Product/>} /> */}
          <Route path="/home" element={<Home/>} />
          {/* <Route path="/category" element={<Category/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
