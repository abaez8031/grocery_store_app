import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart, removeOneFromCart, updateItemCount } from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  const handleBlur = () => {
    if (count === "" || isNaN(count) || count < 1) {
      dispatch(removeFromCart(item.id))
    } else {
      dispatch(updateItemCount(item.id, count))
    }
  }

  const handleInputChange = (e) => {
    const value = e.target.value
    setCount(value === "" ? "" : parseInt(value))
  }

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
          onBlur={handleBlur}
          onChange={handleInputChange}
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