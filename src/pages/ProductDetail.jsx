import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/product-detail.scss";
import ProductsList from "../components/UI/ProductsList";

const ProductDetail = () => {
     const [tab, setTab] = useState("desc");
     const reviewUser = useRef("");
     const reviewMsg = useRef("");
     const dispatch = useDispatch();
     const [rating, setRating] = useState(null);
     const { id } = useParams();
     const product = products.find((item) => item.id === id);
     const { imgUrl, productName, price, avgRating, shortDesc, reviews, description, category } =
          product;
     const ralatedProducts = products.filter((item) => item.category === category);
     const submitHandler = (e) => {
          e.preventDefault();
          const reviewUserName = reviewUser.current.value;
          const reviewUserMsg = reviewMsg.current.value;
          const reviewObj = {
               author: reviewUserName,
               text: reviewUserMsg,
               rating,
          };
          toast.success("Review submitted ");
     };
     const addToCart = () => {
          dispatch(
               cartActions.addItem({
                    id,
                    productName,
                    imgUrl,
                    price,
               })
          );

          toast.success("Product added successfully");
     };
     useEffect(() => {
          window.scrollTo(0, 0);
     }, [product]);
     return (
          <Helmet title={productName}>
               <CommonSection title={productName} />
               <section className="pt-0">
                    <Container>
                         <Row>
                              <Col lg="6">
                                   <img src={imgUrl} alt="" />
                              </Col>
                              <Col lg="6">
                                   <div className="product__details">
                                        <h2>{productName}</h2>
                                        <div className="product__rating d-flex align-item-center gap-5 mb-3 rating__group">
                                             <div>
                                                  <span>
                                                       <i className="ri-star-s-fill"></i>
                                                  </span>
                                                  <span>
                                                       <i className="ri-star-s-fill"></i>
                                                  </span>
                                                  <span>
                                                       <i className="ri-star-s-fill"></i>
                                                  </span>
                                                  <span>
                                                       <i className="ri-star-s-fill"></i>
                                                  </span>
                                                  <span>
                                                       <i className="ri-star-s-fill"></i>
                                                  </span>
                                             </div>
                                             <p>
                                                  (<span>{avgRating}</span> rating)
                                             </p>
                                        </div>
                                        <div className="d-flex align-items-center gap-5">
                                             <span className="product__price">${price}</span>
                                             <span> Category: {category.toUpperCase()}</span>
                                        </div>
                                        <p className="mt-3">{shortDesc}</p>
                                        <motion.button
                                             whileTap={{ scale: 1.1 }}
                                             className="shop__btn"
                                             onClick={addToCart}
                                        >
                                             Add to Cart
                                        </motion.button>
                                   </div>
                              </Col>
                         </Row>
                    </Container>
               </section>
               <section>
                    <Container>
                         <Row>
                              <Col lg="12">
                                   <div className="tab__wrapper d-flex align-item-center gap-5">
                                        <h6
                                             className={`${tab === "desc" ? "active__tab" : ""}`}
                                             onClick={() => setTab("desc")}
                                        >
                                             Description
                                        </h6>
                                        <h6
                                             className={`${tab === "rev" ? "active__tab" : ""}`}
                                             onClick={() => setTab("rev")}
                                        >
                                             Review ({reviews.length})
                                        </h6>
                                   </div>
                                   {tab === "desc" ? (
                                        <div className="tab__content mt-5">
                                             <p>{description}</p>
                                        </div>
                                   ) : (
                                        <div className="product__review">
                                             <div className="review__wrapper mt-5">
                                                  <ul>
                                                       {reviews?.map((item, index) => (
                                                            <li key={index} className="mb-4">
                                                                 <h6>John Doe</h6>
                                                                 <span>{item.rating}(rating)</span>
                                                                 <p>{item.text}</p>
                                                            </li>
                                                       ))}
                                                  </ul>
                                                  <div className="review__form">
                                                       <h4>Leave Your experience</h4>
                                                       <form action="" onSubmit={submitHandler}>
                                                            <div className="form__group">
                                                                 <input
                                                                      type="text"
                                                                      placeholder="Enter name"
                                                                      ref={reviewUser}
                                                                      required
                                                                 />
                                                            </div>
                                                            <div className="form__group  d-flex align-items-center gap-5">
                                                                 <motion.span
                                                                      whileTap={{ scale: 1.2 }}
                                                                      onClick={() => setRating(1)}
                                                                 >
                                                                      1
                                                                      <i className="ri-star-s-fill"></i>
                                                                 </motion.span>
                                                                 <motion.span
                                                                      whileTap={{ scale: 1.2 }}
                                                                      onClick={() => setRating(2)}
                                                                 >
                                                                      2
                                                                      <i className="ri-star-s-fill"></i>
                                                                 </motion.span>
                                                                 <motion.span
                                                                      whileTap={{ scale: 1.2 }}
                                                                      onClick={() => setRating(3)}
                                                                 >
                                                                      3
                                                                      <i className="ri-star-s-fill"></i>
                                                                 </motion.span>
                                                                 <motion.span
                                                                      whileTap={{ scale: 1.2 }}
                                                                      onClick={() => setRating(4)}
                                                                 >
                                                                      4
                                                                      <i className="ri-star-s-fill"></i>
                                                                 </motion.span>
                                                                 <motion.span
                                                                      whileTap={{ scale: 1.2 }}
                                                                      onClick={() => setRating(5)}
                                                                 >
                                                                      5
                                                                      <i className="ri-star-s-fill"></i>
                                                                 </motion.span>
                                                            </div>
                                                            <div className="form__group">
                                                                 <textarea
                                                                      rows={4}
                                                                      type="text"
                                                                      placeholder="Review Message..."
                                                                      ref={reviewMsg}
                                                                      required
                                                                 />
                                                            </div>
                                                            <motion.button
                                                                 whileTap={{ scale: 1.2 }}
                                                                 type="submit"
                                                                 className="shop__btn"
                                                            >
                                                                 Submit
                                                            </motion.button>
                                                       </form>
                                                  </div>
                                             </div>
                                        </div>
                                   )}
                              </Col>
                              <Col lg="12" className="mt-5">
                                   <h2 className="related__title">You might also like</h2>
                              </Col>
                              <ProductsList data={ralatedProducts} />
                         </Row>
                    </Container>
               </section>
          </Helmet>
     );
};

export default ProductDetail;
