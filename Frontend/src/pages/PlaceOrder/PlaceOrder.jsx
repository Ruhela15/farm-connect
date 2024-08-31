import React, { useContext } from 'react'
import './PlaceOrder.css'
import { Storecontext } from '../../components/context/Storecontext'

const PlaceOrder = () => {
  const {getTotalAmount}=useContext(Storecontext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-field">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div className="multi-field">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-field">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
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
                <p>${getTotalAmount()===0?0:2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalAmount()+getTotalAmount()===0?0:2}</b>
              </div>
            <button  onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder