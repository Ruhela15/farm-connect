import React, { useContext } from 'react';
import './Cart.css';
import { Storecontext } from '../../components/context/Storecontext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, foodList, removeFromCart, getTotalAmount, url } = useContext(Storecontext); // Changed food_list to foodList
  const navigate = useNavigate();

  return (
    <div className='Cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Image</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {foodList.map((item,index) => { // Changed food_list to foodList
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id} className='cart-items-title cart-items-item'>
                <img src={`${url}/images/${item.image}`} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price * cartItems[item._id]}</p>
                <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                <hr />
              </div>
            );
          }
          return null; // Ensure that no elements are returned if condition fails
        })}
      </div>
      <div className='cart-bottom'>
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalAmount() + (getTotalAmount() === 0 ? 0 : 2)}</b>
            </div>
            <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
