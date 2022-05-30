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
      <ul>
        <ListItem>
          <Link to='/'>home</Link>
        </ListItem>
        <ListItem>
          <Link to='/cart'>cart</Link>
        </ListItem>
      </ul>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/cart" element={<CartItems />}/>
        <Route path="*" element={<NoPageFound />}/>
      </Routes>
    </main>
      

    
  )
}