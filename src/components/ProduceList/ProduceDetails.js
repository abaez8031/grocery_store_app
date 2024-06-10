import { addToCart } from "../../store/cart";
import { useDispatch } from "react-redux";
import { toggleLiked } from "../../store/produce";

function ProduceDetails({ produce }) {
  const dispatch = useDispatch();
  const addItemToCart = (id) => {
    dispatch(addToCart(id))
  }
  const cartItem = {};

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          onClick={() => {dispatch(toggleLiked(produce.id))}}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
        onClick={() => {
          addItemToCart(produce.id)
        }}>
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;