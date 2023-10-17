import React from 'react';
import {Link} from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer spad" style={{ backgroundColor: 'black' }}>
      <div className="container">
        <div className="row">
          {/* Logo & About */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__about">
              <div className="footer__about__logo">
                <Link to="/"><img src="img/logo.png" alt="" /></Link>
              </div>
              <ul>
                <li>Адресс: Витебск Ул.Гагарина 41А</li>
                <li>Телефон: 32-54-123-123</li>
                <li>Почта: balance@balacne.com</li>
              </ul>
            </div>
          </div>

          {/* Useful links */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__widget">
              <h6>Смотрите также</h6>
              <ul>
                <li><Link to="/about-us">О нас</Link></li>
                <li><Link to="/contact">Контакты</Link></li>
                <li><Link to="/shop">Магазин</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__widget">
              <h6>Official Video Clips</h6>
              <ul>
                <li><a href="https://www.youtube.com/watch?v=2VJL3Xd1pFc" target="_blank">BALANCE</a></li>
                <li><a href="https://www.youtube.com/watch?v=SsvM80bIA1k" target="_blank">ARISTOCRAT</a></li>
                <li><a href="https://www.youtube.com/watch?v=HYi4a2eZL50" target="_blank">DINERO</a></li>
                <li><a href="https://www.youtube.com/watch?v=0uJ1DWvc_ZM" target="_blank">NOMINALO</a></li>
                <li><a href="https://www.youtube.com/watch?v=wDsU4H2w48k" target="_blank">Cristal & МОЁТ</a></li>
                <li><a href="https://www.youtube.com/watch?v=z7SkNWQINds" target="_blank">DOUBLE CAP</a></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__widget">
              <h6>Интересный факт</h6>
              <ul>
                <li><a href="https://www.youtube.com/watch?v=2VJL3Xd1pFc" target="_blank">BALANCE 1:26</a></li>
                <li><a href="https://www.youtube.com/watch?v=2VJL3Xd1pFc" target="_blank">Life Style</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Join */}   
        </div>

        {/* Copyright & Cards */}
        <div className="row">
          <div className="col-lg-12">
            <div className="footer__copyright">
              <div className="footer__copyright__text">
                <p>
                  Copyright &copy;{new Date().getFullYear()} Все права защищены.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};