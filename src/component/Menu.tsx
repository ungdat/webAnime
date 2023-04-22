import { Link } from "react-router-dom";
import "../style/menu.css";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
export const Menu = () => {
  const data = useSelector((state: RootState) => state.cart);
  return (
    <div className="menu">
      <Link to="/home" className="itemMenu">
        {" "}
        HOME
      </Link>
      <Link to="/product" className="itemMenu">
        {" "}
        PRODUCT
      </Link>
      <Link to="/cart" className="itemMenu">
        {" "}
        CART [{data.length}]{" "}
      </Link>
    </div>
  );
};
