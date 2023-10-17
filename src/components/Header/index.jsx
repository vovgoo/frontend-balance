import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { selectIsAuth, logout } from '../../slices/auth';

export const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const onClickLogout = () => {
    dispatch(logout());
    window.localStorage.removeItem('token');
  };

  const [totalQuantity, setTotalQuantity] = React.useState(0);

  const calculateTotalQuantity = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const uniqueItems = new Set(cart.map(item => item.id));
    setTotalQuantity(uniqueItems.size);
  };

  React.useEffect(() => {
    calculateTotalQuantity();
  }, []);


  return (
    <div>
      <div className="hamburger__menu__overlay"></div>
      <div className="hamburger__menu__wrapper">
        <div className="hamburger__menu__logo">
          <Link to="/"><img src="img/logo.png" alt="" /></Link>
        </div>
        <div className="hamburger__menu__cart">
          <ul>
          {isAuth ? (
            <li><Link to="/cart"><i className="fa fa-shopping-bag white"></i> <span style={{background: "black"}}>{totalQuantity}</span></Link></li>
          ) : ("")}
          </ul>
        </div>
        <div className="hamburger__menu__widget">
          <div className="header__top__right__auth">
            {isAuth ? (
                <button style={{
                  background: 'transparent',
                  border: 'none',
                  fontSize: '14px',
                  color: 'white',
              }}
              onClick={onClickLogout}><i className="fa fa-user white"></i> Выйти</button>
            ) : (
              <>
              <Link to="/login"><i className="fa fa-user white"></i> Войти</Link>
              </>
            ) }
          </div>
        </div>
        <nav className="hamburger__menu__nav mobile-menu">
          <ul>
            <li className="active"><Link to="">Главная</Link></li>
            <li><Link to="/shop">Магазин</Link></li>
            <li><Link to="/about-us">О нас</Link></li>
            <li><Link to="/contact">Контакты</Link></li>
          </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div className="hamburger__menu__contact">
          <ul>
            <li><i className="fa fa-envelope white"></i>vovgoodev@gmail.com</li>
            <li>Бесплатная доставка при любом заказе</li>
          </ul>
        </div>
      </div>

      <header className="header" style={{ backgroundColor: 'black', color: 'white' }}>
        <div className="header__top" style={{ backgroundColor: 'rgb(30, 30, 30)', color: 'white' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                {/* Left side of header */}
                <div className="header__top__left">
                  <ul>
                    <li><i className="fa fa-envelope white"></i> vovgoodev@gmail.com</li>
                    <li>Официальный сайт продажи мерча исполнителя</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                {/* Right side of header */}
                <div className="header__top__right">
                  <div className="header__top__right__auth">
                  {isAuth ? (
                      <>
                      <button style={{
                         background: 'transparent',
                         border: 'none',
                         fontSize: '14px',
                         color: 'white',
                      }}
                      onClick={onClickLogout}
                      ><i className="fa fa-user white"></i> Выйти</button>
                      </>
                    ) : (
                      <>
                      <Link to="/login"><i className="fa fa-user white"></i> Войти</Link>
                      </>
                    ) }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Navigation */}
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="header__logo">
                <Link to="/"><img src="/img/logo.png" alt="" /></Link>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="header__menu">
                <ul>
                <li className="active"><Link to="/">Главная</Link></li>
                <li><Link to="/shop">Магазин</Link></li>
                <li><Link to="/about-us">О нас</Link></li>
                <li><Link to="/contact">Контакты</Link></li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__cart">
                <ul>
                  {isAuth ? (
                    <li><Link to="/cart"><i className="fa fa-shopping-bag white"></i> <span>{totalQuantity}</span></Link></li>
                  ) : ("")}
                </ul>
              </div>
            </div>
          </div>
          <div className="hamburger__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
    </div>
  );
};
