import React from 'react';


export const CartItem = ({
  _id,
  title,
  ImageUrl,
  price,
  count,
  setCart,
}) => {
    const [localCount, setLocalCount] = React.useState(count);

    const handleIncrement = () => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = storedCart.map((item) => {
            if (item.id === _id) {
                return { ...item, count: item.count + 1 };
            }
            return item;
        });
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setLocalCount(localCount + 1);
        setCart(updatedCart);
    };

    const handleDecrement = () => {
        if (localCount > 1) {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = storedCart.map((item) => {
            if (item.id === _id) {
            return { ...item, count: item.count - 1 };
            }
            return item;
        });
    
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setLocalCount(localCount - 1);
        setCart(updatedCart);
        }
    };

    const handleRemoveItem = () => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = storedCart.filter((item) => item.id !== _id);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
    };
  
  return ( 
    <>
      <hr className="my-4" />
      <div className="row mb-4 d-flex justify-content-between align-items-center">
        <div className="col-md-2 col-lg-2 col-xl-2">
          <img src={ImageUrl} className="img-fluid rounded-3" alt={title} />
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3">
          <h6 className="text-muted white">{title}</h6>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
          <button className="btn btn-link px-2" onClick={handleDecrement}>
            <i className="fa fa-minus"></i>
          </button>
          <input
            min="0"
            name="quantity"
            value={localCount}
            type="number"
            className="form-control-sm"
            style={{ width: '60px' }}
          />
          <button className="btn btn-link px-2" onClick={handleIncrement}>
            <i className="fa fa-plus"></i>
          </button>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          <h6 className="mb-0" style={{ color: 'white', fontSize: '15px' }}>
            ${price}
          </h6>
        </div>
        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
          <button className="btn btn-link px-2" onClick={handleRemoveItem}>
            <i className="fa fa-times"></i>
          </button>
        </div>
      </div>
    </>
    )
}