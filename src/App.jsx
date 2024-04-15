import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './commponent/Footer.jsx';
import Navbar from './commponent/NavBar.jsx';
import Home from './commponent/Home.jsx';
import ErrorPage from './commponent/ErrorPage.jsx';
import Product from './commponent/Product.jsx';
import ProductDetails from './commponent/ProductDetails.jsx';
import Wishlist from './commponent/wishlist.jsx';


function App() {
 
  return ( <>

      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
          <Footer />
        </div>
      </Router>

      {/* <Navbar />
      <RouterProvider router={router} />
      <Footer /> */}

    </>
  )
}

export default App
