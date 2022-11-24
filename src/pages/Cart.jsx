import React from "react";

import { Container, Row, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import CommonSection from "../components/UI/CommonSection";
import tdImg from "../assets/images/arm-chair-01.jpg";
import Helmet from "../components/Helmet/Helmet";
import { cartActions } from "../redux/slices/cartSlices";
import "../styles/cart.scss";

const Cart = () => {
     const cartItems = useSelector((state) => state.cart.cartItems);
     const totalAmount = useSelector((state) => state.cart.totalAmount);
     return (
          <Helmet title={" Cart"}>
               <CommonSection title={"Shopping Cart"} />
               <section>
                    <Container>
                         <Row>
                              <Col lg="9">
                                   {cartItems.length === 0 ? (
                                        <h2 className="fs-4 text-center">
                                             No item added to the cart
                                        </h2>
                                   ) : (
                                        <table className="table bordered">
                                             <thead>
                                                  <tr>
                                                       <th>Image</th>
                                                       <th>Title</th>
                                                       <th>Price</th>
                                                       <th>Quantity</th>
                                                       <th>Delete</th>
                                                  </tr>
                                             </thead>
                                             <tbody>
                                                  {cartItems.map((item, index) => (
                                                       <Tr item={item} key={index} />
                                                  ))}
                                             </tbody>
                                        </table>
                                   )}
                              </Col>
                              <Col lg="3">
                                   {cartItems.length === 0 ? (
                                        <>
                                             <h6 className="fs-6 mt-2">
                                                  you need to add the product to the cart
                                             </h6>
                                             <div className="">
                                                  <button className="shop__btn w-100">
                                                       <Link to="/shop">Continue Shopping</Link>
                                                  </button>
                                             </div>
                                        </>
                                   ) : (
                                        <>
                                             <div>
                                                  <h4 className="d-flex align-items-center justify-content-between">
                                                       Subtotal
                                                       <span className="fs-4 fw-bold">
                                                            ${totalAmount}
                                                       </span>
                                                  </h4>
                                             </div>
                                             <p className="fs-6 mt-2">
                                                  taxes and shipping will caculator in checkout
                                             </p>
                                             <div className="">
                                                  <button className="shop__btn  w-100">
                                                       <Link to="/checkout">Checkout</Link>
                                                  </button>
                                             </div>
                                        </>
                                   )}
                              </Col>
                         </Row>
                    </Container>
               </section>
          </Helmet>
     );
};
const Tr = ({ item }) => {
     const dispatch = useDispatch();
     const DeleteProduct = () => {
          dispatch(cartActions.deleteItem(item.id));
     };
     return (
          <tr>
               <td>
                    <img src={item.imgUrl} />
               </td>
               <td>{item.productName}</td>
               <td>${item.price * Number(item.quantity)}</td>
               <td>{item.quantity} px</td>
               <td>
                    <span>
                         <i onClick={DeleteProduct} className="ri-close-circle-line"></i>
                    </span>
               </td>
          </tr>
     );
};
export default Cart;
