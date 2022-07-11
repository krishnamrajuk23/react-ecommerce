import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
  
import HomeContainer from "../../containers/home";
import { CartItems } from "../cart-items/CartItems";
import NoPageFound from "../no-page-found/NoPageFound";
import ProductLandingPage from "../product/container/product-landing-page";


export default function Menu(){
  return (
    <main>
       <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
          <Link to='/'>Home</Link>
        <Link to='/cart'>Cart</Link>
        <Link to='/product'>Product</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/cart" element={<CartItems />} />
        <Route path="/product" element={<ProductLandingPage />}/>
        <Route path="*" element={<NoPageFound />}/>
      </Routes>
    </main>
  )
}