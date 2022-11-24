import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Container, Row } from "reactstrap";
import { useNavigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";

import "./Header.scss";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";

const nav_links = [
     {
          path: "/",
          display: "Home",
     },
     {
          path: "/shop",
          display: "Shop",
     },
     {
          path: "/cart",
          display: "Cart",
     },
];
const Header = () => {
     const menuRef = useRef(null);
     const navigate = useNavigate();

     const menuToggle = () => {
          menuRef.current.classList.toggle("active__menu");
     };
     const navigateToCart = () => {
          navigate("/cart");
     };
     const navigateToHome = () => {
          navigate("/");
     };
     const { currentUser } = useAuth();
     const totalQuantity = useSelector((state) => state.cart.totalQuantity);

     return (
          <header className="header">
               <Container>
                    <Row>
                         <div className="nav_wrapper">
                              <div className="logo" onClick={navigateToHome}>
                                   <img src={logo} alt="logo" />
                                   <div>
                                        <h1>Multimart</h1>
                                   </div>
                              </div>
                              <div className="navication" ref={menuRef} onClick={menuToggle}>
                                   <ul className="menu">
                                        {nav_links.map((item, index) => (
                                             <li className="nav__item" key={index}>
                                                  <NavLink
                                                       className={(navClass) =>
                                                            navClass.isActive ? "nav__active" : ""
                                                       }
                                                       to={item.path}
                                                  >
                                                       {item.display}
                                                  </NavLink>
                                             </li>
                                        ))}
                                   </ul>
                              </div>
                              <div className="nav__icons">
                                   <span className="fav__icon">
                                        <i className="ri-heart-line"></i>
                                        <span className="badge">1</span>
                                   </span>
                                   <span className="cart__icon" onClick={navigateToCart}>
                                        <i className="ri-shopping-cart-line"></i>
                                        <span className="badge">{totalQuantity}</span>
                                   </span>
                                   <span>
                                        <motion.img
                                             whileTap={{ scale: 1.2 }}
                                             src={currentUser ? currentUser.photoURL : userIcon}
                                             alt=""
                                        />
                                   </span>
                                   <div className="mobile__menu" onClick={menuToggle}>
                                        <i className="ri-menu-line"></i>
                                   </div>
                              </div>
                         </div>
                    </Row>
               </Container>
          </header>
     );
};
export default Header;
