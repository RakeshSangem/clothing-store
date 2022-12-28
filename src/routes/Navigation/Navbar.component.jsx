import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "./../../contexts/user.context";
import { signOutUser } from "./../../utils/firebase/firebase.utils";
import CartIcon from "./../../components/cart-icon/cartIcon.component";
import "./navigation.styles.scss";
import crown from "../../assets/crown.svg";
import CartDropDown from "./../../components/cart-dropdown/CartDropDown.component";
import { CartContext } from "../../contexts/cart.context";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <nav className="navigation">
        <div>
          <img src={crown} alt="" />
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              {" "}
              SIGN OUT{" "}
            </span>
          ) : (
            <Link className="nav-link" to="/authentication">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
