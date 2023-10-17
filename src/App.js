import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { Header, Footer } from "./components";
import { Home, Registration, Login, AboutUs, Contact, Shop, Item, Cart } from "./pages";
import { NotFound } from "./components";

import {useDispatch, useSelector} from 'react-redux';
import { fetchAuthMe, selectIsAuth } from './slices/auth';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, [])
  
  return (
    <>
      <Header />
        <Routes>
          <Route path = "/" element={<Home/>} /> 
          <Route path = "/about-us" element={<AboutUs/>} /> 
          <Route path = "/contact" element={<Contact/>} /> 
          <Route path = "/shop" element={<Shop/>} /> 
          <Route path="/shop/search/:searchQuery" element={<Shop />} />
          <Route path = "/shop/:id" element={<Item/>} /> 
          <Route path="/shop/category/:categoryId" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path = "/login" element={<Login/>} /> 
          <Route path = "/register" element={<Registration/>} /> 
          <Route path='*' element={<NotFound />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
