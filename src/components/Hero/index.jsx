import React from 'react';
import {Link} from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';
import { fetchCategory } from '../../slices/category';
import $ from 'jquery';

export const Hero = () => {

  
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);
  const isCategoryLoading = category.status == 'loaded';

  React.useEffect(() => {
    $('.hero__categories__all').on('click', function(){
      $('.hero__categories ul').slideToggle(400);
    });
    
    dispatch(fetchCategory());
  }, []);


  const [searchQuery, setSearchQuery] = React.useState('');
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="hero__categories">
              <div className="hero__categories__all">
                <i className="fa fa-bars black"></i>
                <span>Все категории</span>
              </div>
              <ul>
                {category.items.map((obj, index) => (
                  <li key={obj._id}><Link to={`/shop/category/${obj._id}`}>{obj.title}</Link></li>
                 ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="hero__search">
              <div className="hero__search__form">
                <form onSubmit={handleFormSubmit}>
                  <input type="text" placeholder="Введите название" value={searchQuery} onChange={handleInputChange} />
                  <Link to={`/shop/${searchQuery ? `search/${searchQuery}` : ''}`}>
                    <button type="submit" className="site-btn">ПОИСК</button>
                  </Link>
                </form>
              </div>
              <div className="hero__search__phone">
                <div className="hero__search__phone__icon">
                  <i className="fa fa-phone black"></i>
                </div>
                <div className="hero__search__phone__text">
                  <h5>32-54-123-123</h5>
                  <span>Поддержка 24/7</span>
                </div>
              </div>
            </div>
            <div className="hero__item set-bg" style={{ backgroundImage: 'url(img/hero/banner.jpg)' }}>
              <div className="hero__text">
                <span>BALANCE</span>
                <h2>Пока одни говорят<br />другие делают</h2>
                <p>Бесплатная доставка при любом заказе</p>
                <Link to="/shop" className="primary-btn">ЗАКАЗАТЬ</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
