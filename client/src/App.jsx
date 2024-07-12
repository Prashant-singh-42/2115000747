import { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import ViewProduct from "./components/ViewProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Products />} />
          <Route path="/viewProduct" element={ <ViewProduct /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
