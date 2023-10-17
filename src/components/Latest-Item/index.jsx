import React from 'react';
import {Link} from 'react-router-dom'

export const LatestElement = ({
  _id,
  title,
  imageUrl,
  price,
  category,
}) => {
  //const onClickRemove = () => {};

  const [isImageAvailable, setIsImageAvailable] = React.useState(true);

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

  return ( 
    <Link to={`/shop/${_id}`} className="latest-product__item">
        <div className="latest-product__item__pic">
            <img src={`${isImageAvailable ? imageUrl : '/img/NotPhoto.png'}`} alt=""/>
        </div>
        <div className="latest-product__item__text">
            <h6>{title}</h6>
            <span>${price}</span>
        </div>
    </Link>
    
    )
}