import Button from "../button/Button.component";
import "./cartDropDown.styles.scss";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
