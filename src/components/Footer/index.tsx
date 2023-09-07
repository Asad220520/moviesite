import logo from "../../img/logo.svg";
import { Link } from "react-router-dom";
import "./index.scss";
const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer__top">
            <ul className="footer__top-card">
              <li>
                <Link to={"/"}></Link>
                <img src={logo} alt="" />
              </li>
            </ul>
            <ul className="footer__top-card">
              <li>
                <Link to={"/"}> Главная</Link>
              </li>
              <li>
                <Link to={"/"}> О проекте</Link>
              </li>
              <li>
                <Link to={"/"}>Для партнеров</Link>
              </li>
              <li>
                <Link to={"/"}>Контакты</Link>
              </li>
            </ul>
            <ul className="footer__top-card">
              <li className="foot">Телефон:</li>
              <li>
                <Link to={"tel:996550771189"}>+996 550 771 189</Link>
              </li>
              <li className="foot">Email:</li>
              <li>
                <Link to={''}>omorkulova01@gmail.com</Link>
              </li>
            </ul>
            <ul className="footer__top-card">
              <li className="foot">Мы в соц. сетях:</li>
              <li>
                <Link to={"tel:996550771189"}>+996 550 771 189</Link>
              </li>
              <li>
                <Link to={''}>omorkulova01@gmail.com</Link>
              </li>
            </ul>
          </div>
          <hr className="hr" />
          <div className="footer__bottom">
            <h1>2023 © Example</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
