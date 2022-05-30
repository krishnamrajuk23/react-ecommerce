import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
  
import HomeContainer from "../../containers/home";
import ListItem from "../../theme/components/list-item/ListItem";
import { CartItems } from "../cart-items/CartItems";
import NoPageFound from "../no-page-found/NoPageFound";


export default function Menu(){
  return (
    <main>
       <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
          <Link to='/'>home</Link>
          <Link to='/cart'>cart</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/cart" element={<CartItems />}/>
        <Route path="*" element={<NoPageFound />}/>
      </Routes>
    </main>
  )
}