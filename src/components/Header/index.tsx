import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import logo from "../../img/logo.svg";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <nav className="nav">
            <ul className="menu">
              <NavLink to={"/"}>
                <img src={logo} alt="" />
              </NavLink>
              <li className="menu__item">
                <NavLink to={"/popular"}>popular</NavLink>
              </li>
              <li className="menu__item">
                <NavLink to={"/topRated"}>top_rated</NavLink>
              </li>
              <li className="menu__item">
                <NavLink to={"/podborki"}>Подборки</NavLink>
              </li>
            </ul>
            <div>
              <input type="search" placeholder="поиск..." />
              <button>Найти</button>
            </div>
            <div className="icons">
              <Link to={"/favorite"}>
                <AiOutlineHeart className="icon" />
                <sup className="length">0</sup>
              </Link>
              <AiOutlineUser className="icon" />
            </div>
          </nav>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Header;
