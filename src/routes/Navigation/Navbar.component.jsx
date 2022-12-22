import { Outlet, Link } from "react-router-dom";
import crown from "../../assets/crown.svg";
import "./navigation.styles.scss";

const Navbar = () => {
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
          <Link className="nav-link" to="/signIn">
            SIGN IN
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
