import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { toggleUiCart } from "../../store/ui-slice";

const CartButton = (props) => {
  const quanityOfItems = useSelector(state => state.cart.quantityOfItems);
  const dispatch = useDispatch();

  const cartButtonClickHandler = () => {
    dispatch(toggleUiCart());
  };

  return (
    <button className={classes.button} onClick={cartButtonClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quanityOfItems}</span>
    </button>
  );
};

export default CartButton;
