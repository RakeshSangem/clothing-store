import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "./../../contexts/user.context";
import { signOutUser } from "./../../utils/firebase/firebase.utils";
import CartIcon from "./../../components/cart-icon/cartIcon.component";
import crown from "../../assets/crown.svg";
import CartDropDown from "./../../components/cart-dropdown/CartDropDown.component";
import { CartContext } from "../../contexts/cart.context";
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={crown} alt="" />
        </LogoContainer>
        <NavLinks>
          <NavLink className="nav-link" to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              {" "}
              SIGN OUT{" "}
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="/authentication">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navbar;
