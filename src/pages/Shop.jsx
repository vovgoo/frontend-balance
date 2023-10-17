import React from "react";
import { useParams } from "react-router-dom";
import { DiscountElement } from "../components/Discount-Item";
import { LatestElement } from "../components/Latest-Item";
import { TovarElement } from "../components/Tovar-Item";
import {useDispatch, useSelector} from 'react-redux';

import { fetchItems } from '../slices/items';
import { fetchCategory } from '../slices/category';

import OwlCarosel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

import axios from "../axios";
import { NotFound } from "../components";


export const Shop = () => {
    const { searchQuery } = useParams();
    const { categoryId } = useParams();

    const [data, setData] = React.useState(true);
    const [isLoading, setLoading] = React.useState(); 
    const [error, setError] = React.useState(null);  

    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.posts);

    const { category } = useSelector((state) => state.category);

    const isItemsLoading = posts.status === 'loaded';

    React.useEffect(() => {
        dispatch(fetchItems());
        dispatch(fetchCategory());
        axios.get(`http://localhost:3333/items/category/${categoryId}`)
        .then(res =>{
            setData(res.data);
        }).catch((err)=> {
            console.warn(err);
            setError(true);
        });

      }, []);

    let newContainers = [];
    const [containers, setContainers] = React.useState([]);

    React.useEffect(() => {
    if (posts.items.length > 0) {
    
        for (let i = 0; i < posts.items.length; i += 5) {
        const itemsInContainer = posts.items.slice(i, i + 5).map((obj, index) => (
            <LatestElement
            key={obj._id}
            _id={obj._id}
            title={obj.title}
            imageUrl={obj.ImageUrl}
            price={obj.price}
            category={obj.category}
            />
        ));
    
        newContainers.push(
            <div key={i} className="latest-prdouct__slider__item">
            {itemsInContainer}
            </div>
        );
        }
    
        setContainers(newContainers);
    }
    }, [isItemsLoading, posts.items]);

    const [categoryContainers, setCategoryContainers] = React.useState([]);

    React.useEffect(() => {
    if (data.length > 0) {
        const newCategoryContainers = data.map(item => (
        <TovarElement
            key={item._id}
            _id={item._id}
            title={item.title}
            imageUrl={item.ImageUrl}
            price={item.price}
            category={item.category}
        />
        ));

        setCategoryContainers(newCategoryContainers);
    }
    }, [data]);


    if (error && categoryId !== undefined) {
        return <NotFound />;
    }

    if(isLoading){
        return <p>Loading</p>
    }

    return (
    <>
    <section className="breadcrumb-section set-bg" style={{ backgroundImage: 'url(/img/contact-background.png)' }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="breadcrumb__text">
                        <h2>BALANCE</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="product spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-5">
                    <div className="sidebar">
                        <div className="sidebar__item">
                            <h4>Категории</h4>
                            <ul>
                                {category.items.map((obj, index) => (
                                    <li key = {obj._id} ><a href={`/shop/category/${obj._id}`}>{obj.title}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="sidebar__item">
                            <div className="latest-product__text">
                                <h4>Популярное</h4>
                                <OwlCarosel className = "latest-product__slider"
                                loop = {true}
                                margin = {0}
                                items = {1}
                                dots = {false}
                                nav = {true}
                                smartSpeed = {1200}
                                autoplay = {true}
                                autoHeight = {false}>
                                {posts.items.map((obj, index) => isItemsLoading ? (<LatestElement _id={obj._id} title={obj.title} imageUrl={obj.ImageUrl} price={obj.price} category={obj.category}> </LatestElement>) : (
                                    <LatestElement _id={obj._id} title={obj.title} imageUrl={obj.ImageUrl} price={obj.price} category={obj.category}> </LatestElement>
                                ))};
                                </OwlCarosel>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 col-md-7">
                    <div className="product__discount">
                        <div className="section-title product__discount__title">
                            <h2>Успей купить</h2>
                        </div>
                        <div className="row">
                        {isItemsLoading ? (
                            <OwlCarosel
                            className = "product__discount__slider"
                            loop = {true}
                            margin = {0}
                            items = {3}
                            dots = {true}
                            smartSpeed = {1200}
                            autoplay = {true}
                            autoHeight = {false}
                            responsive={{
                                320: {
                                items: 1,
                                },
                                480: {
                                items: 2,
                                },
                                768: {
                                items: 2,
                                },
                                992: {
                                items: 3,
                                }
                            }}
                            >
                            {posts.items.map((obj, index) => isItemsLoading ? (<DiscountElement _id={obj._id} title={obj.title} imageUrl={obj.ImageUrl} price={obj.price} category={obj.category}> </DiscountElement>) : (
                                <DiscountElement _id={obj._id} title={obj.title} imageUrl={obj.ImageUrl} price={obj.price} category={obj.category}> </DiscountElement>
                            ))};
                            </OwlCarosel> ) : ("")}
                        </div>
                    </div>
                    <div className="filter__item">
                        <div className="row">
                            <div className="col-lg-4 col-md-5">
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="filter__found">
                                    <h6>Все товары</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    {categoryContainers}
                    
                    {posts.items.map((obj, index) => {
                        const isSearchQueryDefined = searchQuery !== undefined;
                        const isCategoryQueryDefined = categoryId !== undefined;
                        const isTitleMatching = isSearchQueryDefined ? obj.title.toLowerCase().includes(searchQuery.toLowerCase()) : true;

                        if (isSearchQueryDefined && isTitleMatching) {
                            return (
                            <TovarElement
                                key={obj._id}
                                _id={obj._id}
                                title={obj.title}
                                imageUrl={obj.ImageUrl}
                                price={obj.price}
                                category={obj.category}
                            >
                                {/* Ваш контент TovarElement */}
                            </TovarElement>
                            );
                        }

                        if (!isSearchQueryDefined && !isCategoryQueryDefined) {
                            return (
                            <TovarElement
                                key={obj._id}
                                _id={obj._id}
                                title={obj.title}
                                imageUrl={obj.ImageUrl}
                                price={obj.price}
                                category={obj.category}
                            >
                                {/* Ваш контент TovarElement */}
                            </TovarElement>
                            );
                        }
                        return null; // Если searchQuery определен, но не совпадает с названием товара, то элемент не отображается
                        })}
                        {/* {posts.items.map((obj, index) => isItemsLoading ? (<TovarElement _id={obj._id} title={obj.title} imageUrl={obj.ImageUrl} price={obj.price} category={obj.category}> </TovarElement>) : (
                            <TovarElement _id={obj._id} title={obj.title} imageUrl={obj.ImageUrl} price={obj.price} category={obj.category}> </TovarElement>
                        ))}; */}
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}