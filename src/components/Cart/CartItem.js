import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart, removeOneFromCart, updateItemCount } from '../../store/cart';

// Handle putting an empty string in the number input

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
          onBlur={() => {dispatch(updateItemCount(item.id, count))}}
          onChange={(e) => {setCount(parseInt(e.target.value))}}
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