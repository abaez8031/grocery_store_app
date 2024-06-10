import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart, removeOneFromCart } from '../../store/cart';

// When the number in the input field next to a cart item is changed and clicked off of, it should update the count for that cart item in the Redux store state.

// If clicking the minus button or changing the number in the input field ever updates to a count lower than 1, remove the cart item.

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
        />
        <button
          className="cart-item-button"
          onClick={() => {dispatch(addToCart(item.id))}}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={() => {dispatch(removeOneFromCart(item.id))}}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={() => {dispatch(removeFromCart(item.id))}}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;