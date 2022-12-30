import Button from "../button/Button.component";
import CartItem from "../cart-item/cartItem.component";
import "./cartDropDown.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={() => navigate("./checkout")}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
