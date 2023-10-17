import React from 'react';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../slices/auth';

export const TovarElement = ({
  _id,
  title,
  imageUrl,
  price,
  category,
}) => {
  //const onClickRemove = () => {};

  const [isImageAvailable, setIsImageAvailable] = React.useState(true);

  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setIsImageAvailable(true);
    };
    img.onerror = () => {
      setIsImageAvailable(false);
    };
  }, [imageUrl]);

  const [cart, setCart] = React.useState([]);

  const addToCart = () => {
    const newItem = {
      title: title,
      price: price,
      ImageUrl: imageUrl,
      id: _id,
      count: 1,
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
  };

  React.useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(existingCart);
  }, []);

  return ( 
    <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="product__item">
            <div className="product__item__pic set-bg" style={{ backgroundImage: `url("${isImageAvailable ? imageUrl : '/img/NotPhoto.png'}")` }}>
                <ul className="product__item__pic__hover">
                    <li><Link to={`/shop/${_id}`}><i className="fa fa-eye"></i></Link></li>
                    {isAuth ? (
                      <li><a onClick={addToCart}><i className="fa fa-shopping-cart"></i></a></li>
                    ) : ("")}
                </ul>
            </div>
            <div className="product__item__text">
                <h6><Link to={`/shop/${_id}`}>{title}</Link></h6>
                <h5>${price}</h5>
            </div>
        </div>
    </div>
    )
}