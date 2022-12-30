import "./cartIcon.styles.scss";
import CartLogo from "./../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <div className="shopping-icon">
        <img src={CartLogo} alt="" />
      </div>
      <span className="item-count ">{cartCount}</span>
    </div>
  );
};
export default CartIcon;
