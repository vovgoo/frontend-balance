import React from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "../axios";

import { NotFound } from "../components"
import { ItemElement } from "../components/Item-Element"
import {useDispatch, useSelector} from 'react-redux';

import { fetchItems } from '../slices/items';

import $ from 'jquery'
import OwlCarosel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

import { selectIsAuth } from '../slices/auth'


export const Item = () => {
    const {id} = useParams();
    const [data, setData] = React.useState(true);
    const [isLoading, setLoading] = React.useState(); 
    const [error, setError] = React.useState(null);  

    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.posts);
    const isItemsLoading = posts.status == 'loaded';

    const [isImageAvailable, setIsImageAvailable] = React.useState(true);

    const isAuth = useSelector(selectIsAuth);

    React.useEffect(() => {
        axios.get(`http://localhost:3333/item/${id}`)
        .then(res =>{
            setData(res.data);
        }).catch((err)=> {
            console.warn(err);
            setError(true);
        });

        dispatch(fetchItems());
    }, []);

    React.useEffect(() => {
        const img = new Image();
        img.src = data.ImageUrl;
      
        img.onload = () => {
          setIsImageAvailable(true);
        };
      
        img.onerror = () => {
          setIsImageAvailable(false);
        };
    }, [data.ImageUrl]);

    const [count, setCount] = React.useState(1);

    const handleDecrement = () => {
        if (count > 1) {
        setCount(count - 1);
        }
    };

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const [cart, setCart] = React.useState([]);

    const addToCart = () => {
        const newItem = {
          title: data.title,
          price: data.price,
          ImageUrl: data.ImageUrl,
          id: data._id,
          count: count,
        };
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = existingCart.find((item) => item.id === newItem.id);
    
        if (existingItem) {
          existingItem.count += newItem.count;
        } else {
          existingCart.push(newItem);
        }
   
        localStorage.setItem('cart', JSON.stringify(existingCart));
        
        alert('Ваш товар был успешно добавлен в корзину.');
        setCart(existingCart);
        setCount(1);
      };
   
      React.useEffect(() => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(existingCart);
      }, []);

    const handleCountChange = (event) => {
        const newCount = parseInt(event.target.value, 10) || 1;
        setCount(newCount);
    };
    
    if (error) {
        return <NotFound />;
    }

    if(isLoading){
        return <p>Loading</p>
    }

    return (
        <>
        <section className="breadcrumb-section set-bg" style={{ backgroundImage: `url("https://i.yapx.cc/WkXNj.jpg")` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="breadcrumb__text">
                            <h2>{data.title}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="product-details spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="product__details__pic">
                            <div className="product__details__pic__item">
                                <img className="product__details__pic__item--large"
                                    src={isImageAvailable ? data.ImageUrl : "/img/NotPhoto.png"} alt=""/>
                            </div>          
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="product__details__text">
                            <h3 className = "white">{data.title}</h3>
                            <div className="product__details__price white">{data.price} $</div>
                            <p className = "white">{data.text}</p>
                            {isAuth ? (
                            <>
                                <div className="product__details__quantity">
                                    <div className="quantity">
                                        <div className="pro-qty">
                                            <span class="dec qtybtn" onClick={handleDecrement}>-</span>
                                            <input type="text" value={count} onChange={handleCountChange}/>
                                            <span class="inc qtybtn" onClick={handleIncrement}>+</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="primary-btn" onClick={addToCart}>В КОРЗИНУ</button>
                            </>  
                            ) : ("")}
                            <ul>
                                <li className = "white"><b>Состояние</b> <span>Новое</span></li>
                                <li className = "white"><b>Доставка</b> <span>Бесплатная</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="product__details__tab">

                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <b className = "white">Информация</b>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                    <div className="product__details__tab__desc">
                                        <h6 className = "white">Информация о продукте</h6>
                                        <p className = "white">{data.text}</p>
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
