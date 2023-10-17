import React from 'react';

export const NotFound = () => {
  return (
    <div class="d-flex align-items-center justify-content-center vh-10">
    <div class="text-center">
      <div class="col-md-6 mx-auto"> 
        <img src="/img/404.png" class="img-fluid" alt="404 Error" style={{ width: '1000px' }}/>
      </div>
      <div class="col-md-6 mt-4 mx-auto">
        <h3 class="fs-3 text-white" ><span class="text-danger">Опана!</span> Страница не найдена.</h3>
        <p class="lead text-white my-5">
          Вернитесь на главную страницу. И больше не теряйтесь.
        </p>
        <a href="/" class="primary-btn">Домой</a>
      </div>
    </div>
  </div>
  );
};
