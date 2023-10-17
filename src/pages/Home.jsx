import {Link} from 'react-router-dom'
import { ItemElement } from "../components/Item-Element"
import {CategoryItem} from "../components/Category-Item"
import { Hero } from "../components/Hero";
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import axios from "../axios";
import { fetchItems } from '../slices/items';
import { fetchCategory } from '../slices/category';

import $ from 'jquery'
import OwlCarosel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

import mixitup from 'mixitup'



export const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  const { category } = useSelector((state) => state.category);

  const isItemsLoading = posts.status == 'loaded';
  const isCategoryLoading = category.status == 'loaded';

  React.useEffect(() => {
    $('.featured__controls li').on('click', function () {
        $('.featured__controls li').removeClass('active');
        $(this).addClass('active');
    });
    if ($('.featured__filter').length > 0) {
        var containerEl = $('.featured__filter');
        var mixer = mixitup(containerEl);
    }

    dispatch(fetchItems());
    dispatch(fetchCategory());
  }, []);

  return (
    <div>
    <Hero/>
    <section className="categories" style={{ backgroundColor: 'rgb(0,0,0))' }}>
      <div className="container">
        <div className="row">
        {isItemsLoading ? (
          <OwlCarosel
          className = "categories__slider"
          loop = {true}
          margin = {0}
          items = {4}
          dots = {false}
          nav = {true}
          navText={["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"]}
          animateOut = "fadeOut"
          animateIn = "fadeIn"
          smartSpeed = {1200}
          autoplay = {true}
          responsive={{
            0: {
              items: 1,
            },
            480: {
              items: 2,
            },
            768: {
              items: 3,
            },
            992: {
              items: 4,
            }
          }}
          >
            {posts.items.map((obj, index) => isItemsLoading ? (<ItemElement _id={obj._id} title={obj.title} imageUrl={obj.ImageUrl} price={obj.price} category={obj.category}> </ItemElement>) : (
                <ItemElement _id={obj._id} title={obj.title} imageUrl={obj.ImageUrl} price={obj.price} category={obj.category}> </ItemElement>
            ))};
          </OwlCarosel> ) : ("")}
        </div>
      </div>
    </section>

    <section className="featured spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>Популярные товары</h2>
                    </div>
                    <div className="featured__controls">
                        <ul>
                            <li className="active" data-filter="*">Все</li>
                            {category.items.map((obj, index) => (
                                <li key = {obj._id} data-filter={`.${obj._id.slice(3, 7)}`}>{obj.title}</li>
                            ))};
                            {/* <li data-filter=".svitshot">Свитшоты</li>
                            <li data-filter=".braslet">Браслеты</li> */}
                            {/* <li data-filter=".c1e0">Шорты</li> */}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row featured__filter">
                {posts.items.map((obj, index) => isItemsLoading ? (<ItemElement _id={obj._id} title={obj.title} imageUrl={obj.ImageUrl} price={obj.price} category={obj.category}> </ItemElement>) : (
                <ItemElement _id={obj._id} title={obj.title} imageUrl={obj.ImageUrl} price={obj.price} category={obj.category}> </ItemElement>
                ))};
            </div>
        </div>
    </section>
    </div>
  );
};
