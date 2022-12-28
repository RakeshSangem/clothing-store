import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "./../../contexts/user.context";
import { signOutUser } from "./../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";
import crown from "../../assets/crown.svg";

const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  // console.log(currentUser);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
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
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
