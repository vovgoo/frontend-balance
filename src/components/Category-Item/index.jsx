import React from 'react';
import {Link} from 'react-router-dom'


export const CategoryItem = ({
  _id,
  title,
  ImageUrl,
}) => {
  //const onClickRemove = () => {};

  return ( 
    <div className="col-lg-3">
        <div className="categories__item set-bg" style={{ backgroundImage: `url("${ImageUrl}")` }}>
            <h5><Link to={`shop/${_id}`}>{title}</Link></h5>
        </div>
    </div>
    )
}