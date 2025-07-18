import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from '../../context/storeContext'

const cart = () => {
  const{cartItems,food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext)
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id] > 0){
            return(
              <div><div className="cart-items-title cart-items-item">
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>${item.price * cartItems[item._id]}</p>
              <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
              </div>
              <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()+2}</b>
            </div>
            
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>

      </div>
    </div>
  )
}

export default cart
