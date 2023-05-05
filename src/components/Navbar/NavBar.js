import CartWidget from "../Cart/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <div className="nav">
        <div className="siteLogo">
          <Link to={`/`}>
            PC <span>GLO</span>BAL
          </Link>
          <p>Your Trusted Shop</p>
        </div>
        <Link to={"/cart"}>
          <CartWidget />
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
