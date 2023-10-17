import React from 'react';

export const AboutUs = () => {
  return (
    <>
      <header className="masthead">
        <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
            <div className="d-flex justify-content-center">
                <div className="text-center">
                    <h1 className="mx-auto my-0 text-uppercase text-white">BALANCE</h1>
                    <h2 className="text-white-50 mx-auto mt-2 mb-5">Пока одни говорят другие делают.</h2>
                    <a className="primary-btn" href="/shop">В магазин</a>
                </div>
            </div>
        </div>
      </header>
      
      <section className="about-section text-center" id="about">
          <div className="container px-4 px-lg-5">
              <div className="row gx-4 gx-lg-5 justify-content-center">
                  <div className="col-lg-12">
                      <h2 className="text-white mb-4">BALANCE</h2>
                      <h4 className="text-white-50">
                      Добро пожаловать в магазин Balance – место, где стиль и инновации сливаются воедино. Магазин Balance является результатом нашего сотрудничества с известным рэп-исполнителем Моргенштерном. Этот магазин был создан для тех, кто ищет нечто уникальное, стильное и крутое.
                      </h4>
                  </div>
              </div>
              <img className="img-fluid" src="img/ipad.png" alt="..." />
          </div>
      </section>

      <section className="projects-section bg-light" id="projects">
            <div className="container px-4 px-lg-5">
                <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                    <div className="col-xl-8 col-lg-7"><img className="img-fluid mb-3 mb-lg-0" src="img/project1.png" alt="..." /></div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="featured-text text-center text-lg-left">
                            <h2 className="mb-3">Моргенштерн</h2>
                            <p className="text-black-100 mb-0">иконичный артист, стоящий за нашим новым проектом BALANCE. Это объединение стиля, инноваций и музыкальной страсти.</p>
                        </div>
                    </div>
                </div>

                <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div className="col-lg-6" style={{padding: "0"}}><img className="img-fluid" src="img/project2.png" alt="..." /></div>
                    <div className="col-lg-6" style={{padding: "0"}}>
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 className="text-white">BALANCE</h4>
                                    <p className="mb-0 text-white-50">Это не просто магазин. Это путешествие в мир уникальных продуктов, созданных совместно с Моргенштерном.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row gx-0 justify-content-center">
                    <div className="col-lg-6" style={{padding: "0"}}><img className="img-fluid" src="img/project3.png" alt="..." /></div>
                    <div className="col-lg-6 order-lg-first" style={{padding: "0"}}>
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 className="text-white">BALANCE</h4>
                                    <p className="mb-0 text-white-50">Здесь вы найдете коллекции, которые отражают его характерный стиль и творческую энергию.</p>
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
