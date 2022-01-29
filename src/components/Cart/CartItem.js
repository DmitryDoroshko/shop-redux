import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { addItemToCart, removeItemFromCart } from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, totalPrice, price, id, description } = props;

  const addItemToCartHandler = () => {
    const itemToAdd = {
      id: id,
      title: title,
      description: description,
      quantity: 1,
      totalPrice: price * quantity,
      price: price
    };
    dispatch(addItemToCart(itemToAdd));
  };
  const removeItemFromCartHandler = (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => removeItemFromCartHandler(id)}>-</button>
          <button onClick={addItemToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
