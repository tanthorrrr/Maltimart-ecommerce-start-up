import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/checkout.scss";
const CheckOut = () => {
     const totalQty = useSelector((state) => state.cart.totalQuantity);
     const totalAmount = useSelector((state) => state.cart.totalAmount);
     return (
          <Helmet title="Checkout">
               <CommonSection tilte="Checkout" />
               <section>
                    <Container>
                         <Row>
                              <Col lg="8">
                                   <h6 className="mb-4 fw-bold">Billing Informaiton</h6>
                                   <Form className="billing__form">
                                        <FormGroup className="form__group">
                                             <input type="text" placeholder="Enter your name" />
                                        </FormGroup>
                                        <FormGroup className="form__group">
                                             <input type="email" placeholder="Enter your email" />
                                        </FormGroup>
                                        <FormGroup className="form__group">
                                             <input type="text" placeholder="Phone Number" />
                                        </FormGroup>
                                        <FormGroup className="form__group">
                                             <input type="text" placeholder="Street address" />
                                        </FormGroup>
                                        <FormGroup className="form__group">
                                             <input type="text" placeholder="Postal Code" />
                                        </FormGroup>
                                        <FormGroup className="form__group">
                                             <input type="text" placeholder="Country" />
                                        </FormGroup>
                                   </Form>
                              </Col>
                              <Col lg="4">
                                   <div className="checkout__cart">
                                        <h6>
                                             Total Qty : <span>{totalQty} items</span>
                                        </h6>
                                        <h6>
                                             Subtotal : <span>$ {totalAmount}</span>
                                        </h6>
                                        <h6>
                                             <span>
                                                  Shipping
                                                  <br />
                                                  Free Shipping:
                                             </span>
                                             <span>$0</span>
                                        </h6>

                                        <h4>
                                             Total Cost :<span>&{totalAmount}</span>
                                        </h4>
                                        <motion.button
                                             whileTap={{ scale: 1.05 }}
                                             className="shop__btn auth__btn w-100"
                                        >
                                             Place an order
                                        </motion.button>
                                   </div>
                              </Col>
                         </Row>
                    </Container>
               </section>
          </Helmet>
     );
};

export default CheckOut;
