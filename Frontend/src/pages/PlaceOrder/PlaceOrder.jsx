import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import { Storecontext } from '../../components/context/Storecontext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { getTotalAmount, token, foodList, cartItems, url } = useContext(Storecontext);
  const navigate = useNavigate(); // Initialize navigate

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("stripe"); // Added state for payment method

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = foodList
      .filter(item => cartItems[item._id] > 0)
      .map(item => ({ ...item, quantity: cartItems[item._id] }));

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalAmount() + 2,
      paymentMethod: paymentMethod, // Include payment method in the order data
    };

    try {
      let response;
      if (paymentMethod === "stripe") {
        response = await axios.post(
          `${url}/api/order/placeorder`,
          orderData,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        console.log("Backend Response:", response.data);

        if (response.data.success) {
          const { success_url } = response.data;
          console.log("Redirecting to:", success_url);
          window.location.replace(success_url);
        } else {
          alert("Payment Failed!");
        }
      } else if (paymentMethod === "cod") {
        response = await axios.post(
          `${url}/api/order/placeorder/cod`,
          orderData,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        console.log("Backend Response:", response.data);

        if (response.data.success) {
          alert("Order placed successfully. Thank you for choosing Cash on Delivery!");
          navigate("/"); // Redirect to home or order confirmation page
        } else {
          alert("Error placing order!");
        }
      }
    } catch (error) {
      console.error('Error placing order:', error.response ? error.response.data : error);
      alert("Error placing order");
    }
  };

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-field">
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First name' />
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last name' />
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email address' />
        <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' />
        <div className="multi-field">
          <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
          <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' />
        </div>
        <div className="multi-field">
          <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip Code' />
          <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' />
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' />
      </div>
      <div className='place-order-right'>
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
            <div className="payment-method">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="stripe"
                  checked={paymentMethod === "stripe"}
                  onChange={handlePaymentMethodChange}
                />
                Online Payment (Stripe)
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={handlePaymentMethodChange}
                />
                Cash on Delivery
              </label>
            </div>
            <button type='submit'>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
