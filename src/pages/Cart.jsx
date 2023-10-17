import React from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {CartItem} from "../components"

import {useDispatch, useSelector} from 'react-redux';
import { fetchUserData, selectIsAuth } from '../slices/auth';
import { Navigate } from "react-router-dom";
import { useForm } from 'react-hook-form'; 
import axios from "../axios";
import { fetchAuthMe } from "../slices/auth"

export const Cart = () => {
  const { register, handleSubmit, errors } = useForm();

  const [cardNumber, setCardNumber] = React.useState('');
  const [userData, setUserData] = React.useState('');
  const [dateCard, setDateCard] = React.useState('');
  const [cvv, setCVV] = React.useState('');
  const [adress, setAdress] = React.useState('');

  const handleUserDataChange = (event) => {
    setUserData(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleDataCardChange = (event) => {
    setDateCard(event.target.value);
  };

  const handleCVVChange = (event) => {
    setCVV(event.target.value);
  };

  const handlesetAdressChange = (event) => {
    setAdress(event.target.value);
  };
  
  const dispatch = useDispatch();
  
  const data = useSelector((state) => state.auth)


  const onSubmit = async () => {
    const cartString = window.localStorage.getItem("cart");

      if (!cartString || cartString.trim() === '[]') {
        alert("Корзина пуста.");
    } else {
      try{
      const fields = {
        //user,
        cardNumber,
        userData,
        dateCard,
        cvv,
        adress,
      };

      const cartString = window.localStorage.getItem("cart") || ''; // Получите значение из localStorage
      let cartArray = []; 
      if (cartString) {
        try {
          cartArray = JSON.parse(cartString);
          if (!Array.isArray(cartArray)) {
            cartArray = [];
          }
        } catch (error) {
          cartArray = [];
        }
      }

      dispatch(fetchAuthMe()); 

      fields.user = data.data._id;
      fields.orderItem = cartArray;

      const { values } = await axios.post('http://localhost:3333/order', fields);
      setCardNumber('');
      setUserData('');
      setDateCard('');
      setCVV('');
      setAdress('');
      setCart([]);
      alert("Ваш заказ успешно оформлен.");
      } catch(err){
        alert("Не удалось оформить заказ.");
      }
    }
  };
  
  const isAuth = useSelector(selectIsAuth);

  const [cart, setCart] = React.useState([]);


  const loadCartItems = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartItems);
  };

  React.useEffect(() => {
    loadCartItems();
  }, []);

  const [totalPrice, setTotalPrice] = React.useState(0);

  React.useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);
    setTotalPrice(total);
  }, [cart]);
  
  if(!window.localStorage.getItem('token') && !isAuth){
		return <Navigate to="/"/>
	}

  return (
    <>
    <section className="container-login100">
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card shopping-cart" style={{ borderRadius: '15px', backgroundColor: 'black'}}>
                <div className="card-body text-black" style={{padding : "0px"}}>
                  <div className="row">
                    <div className="col-lg-6 px-5 py-4">
                      <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase" style={{color : "white", marginTop : "1.25em"}}>Ваши товары</h3>
                      {cart.map((item, index) => (
                      <>
                        <CartItem 
                        _id = {item.id}
                        ImageUrl={item.ImageUrl}
                        title={item.title}
                        price={item.price}
                        count={item.count}
                        setCart={setCart}
                         />
                      </>
                    ))}

                      <hr
                        className="mb-4"
                        style={{ height: '2px', backgroundColor: '#1266f1', opacity: 1, backgroundColor: 'white' }}
                      />
                      <div className="d-flex justify-content-between p-2 mb-2" style={{ backgroundColor: '#000', borderRadius: '5px' }}>
                        <h5 className="fw-bold mb-0" style = {{color: 'white'}}>Общая сумма:</h5>
                        <h5 className="fw-bold mb-0" style = {{color: 'white'}}>${totalPrice.toFixed(2)}</h5>
                      </div>
                    </div>
                    <div className="col-lg-6 px-5 py-4" style={{backgroundColor: 'white', borderRadius: '15px'}}>
                      <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase" style={{color : "black", marginTop : "1.25em"}}>Оплата</h3>
                      <div className="mb-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="form-outline mb-5">
                            <TextField
                              type="text"
                              id="typeText"
                              size="17"
                              minLength="19"
                              maxLength="19"
                              label="Номер карты"
                              value={cardNumber}
                              onChange={handleCardNumberChange}
                              fullWidth={true}
                            />                   
                          </div>
                          <div className="form-outline mb-5">
                          <TextField
                              type="text"
                              id="typeText"
                              size="17"
                              label="Данные владельца"
                              value={userData}
                              onChange={handleUserDataChange}
                              fullWidth={true}
                            />   
                          </div>
                          <div className="row">
                            <div className="col-md-6 mb-5">
                              <div className="form-outline">
                                <TextField
                                  type="text"
                                  id="typeText"
                                  size="17"
                                  label="Срок действия"
                                  value={dateCard}
                                  onChange={handleDataCardChange}
                                />
                              </div>
                            </div>
                            <div className="col-md-6 mb-5">
                              <div className="form-outline">
                                <TextField
                                    type="password"
                                    id="typeText"
                                    size="17"
                                    label="CVV"
                                    value={cvv}
                                    onChange={handleCVVChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-outline mb-5">
                            <TextField
                              type="text"
                              id="typeText"
                              size="17"
                              minLength="19"
                              maxLength="19"
                              label="Адрес доставки"
                              fullWidth={true}
                              value={adress}
                              onChange={handlesetAdressChange}
                            />                   
                          </div>
                          <p className="mb-5" style={{textAlign : "center"}}>Что бы совершить заказ заполните все поля.</p>
                          <Button type="submit" className="btn primary-btn btn-block btn-lg" style={{color: "white", backgroundColor: "black"}}>ОПЛАТИТЬ</Button>
                          <h5 className="fw-bold mb-5" style={{ position: 'absolute', bottom: 0 }}>
                          </h5>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    );
};