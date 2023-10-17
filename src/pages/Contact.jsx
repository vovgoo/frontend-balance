import React from 'react';


import { Hero } from "../components/Hero";

export const Contact = () => {
return(
    <>
    <Hero/>
    <section className="breadcrumb-section set-bg" style={{ backgroundImage: 'url(img/contact-background.png)' }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="breadcrumb__text">
                        <h2>Наши контакты</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="contact spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div className="contact__widget">
                        <span className="icon_phone white"></span>
                        <h4 className="text-white">Телефон</h4>
                        <p className="text-white">32-54-123-123</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div className="contact__widget">
                        <span className="icon_pin_alt white"></span>
                        <h4 className="text-white">Адрес</h4>
                        <p className="text-white">Витебск Ул.Гагарина 41А</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div className="contact__widget">
                        <span className="icon_clock_alt white"></span>
                        <h4 className="text-white">Время работы</h4>
                        <p className="text-white">10:00 - 23:00</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div className="contact__widget">
                        <span className="icon_mail_alt white"></span>
                        <h4 className="text-white">Почта</h4>
                        <p className="text-white">balance@balacne.com</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1138.2058789789342!2d30.229005109389135!3d55.21104644110544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c5741c97dbd963%3A0x43ce9adfbbb395a4!2z0KTQuNC70LjQsNC7INCR0JPQotCjIMKr0JLQuNGC0LXQsdGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRgtC10YXQvdC-0LvQvtCz0LjRh9C10YHQutC40Lkg0LrQvtC70LvQtdC00LbCuw!5e0!3m2!1sru!2sfr!4v1696858325005!5m2!1sru!2sfr" width="600" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
    </div>
    </>
)
}