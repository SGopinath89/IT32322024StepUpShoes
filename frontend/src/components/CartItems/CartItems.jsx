import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './CartItems.css';

const CartItems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cart-items'>
      <div className="cart-item-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Size</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          const quantity = cartItems[product.id];
          const price = parseFloat(product.new_price);
          const total = price * quantity;
          return (
            <div key={product.id} className='cart-item'>
              <div className="item-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="item-title">{product.name}</div>
              <div className="item-price">${price.toFixed(2)}</div>
              <div className="item-size">{product.size}</div> {/* Add shoe size */}
              <div className="item-quantity">{quantity}</div>
              <div className="item-total">${total.toFixed(2)}</div>
              <div className="item-remove">
                <button onClick={() => removeFromCart(product.id)}>Remove</button>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};


export default CartItems;
