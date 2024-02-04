import React from 'react'
import Navbar from './Components/Navbar.jsx'
import DisplayCards from './Components/DisplayCards.jsx'
import ProductCard from './Components/ProductCard.jsx'
import ProductPage from './Components/ProductPage.jsx'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignIn from './SignIn';
import Footer from './Components/Footer.jsx'
import './Home.css';
import Product from './Components/Product.jsx';

const Home = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/electronics" element={<Product/>}/>
    </Routes>
    </BrowserRouter>
  );
}

const HomePage = () => {
  return (
    <>
      <Navbar />
      <DisplayCards />
      <ProductCard />
      <ProductPage />
      <Footer/>
      
    </>
  );
}

export default Home
