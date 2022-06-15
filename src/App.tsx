import React from 'react';
import Footer from "./components/statics/footer/Footer";
import NavBar from "./components/statics/navbar/NavBar";

import Home from "./paginas/home/Home";
import Produtos from "./paginas/produtos/Produtos";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />

          <Route path="/produtos" element={<Produtos />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
