import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../assets/data/products";

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.scss";
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/UI/Clock";

const Home = () => {
     const [filterTrendingProduct, setFilterTrendingProduct] = useState([]);
     const [filterBestSaleProduct, setFilterBestSaleProduct] = useState([]);
     const [mobileProducts, setMobileProducts] = useState([]);
     const [wirelessProducts, setWirelessProducts] = useState([]);
     const [popularProducts, setPopularProducts] = useState([]);
     const year = new Date().getFullYear();
     useEffect(() => {
          const filterTrending = products.filter((item) => item.category === "chair");
          const filterBestSale = products.filter((item) => item.category === "sofa");
          const filterMobileProduct = products.filter((item) => item.category === "mobile");
          const filterWirelessProducts = products.filter((item) => item.category === "wireless");
          const filterPopularProducts = products.filter((item) => item.category === "watch");
          setFilterTrendingProduct(filterTrending);
          setFilterBestSaleProduct(filterBestSale);
          setMobileProducts(filterMobileProduct);
          setWirelessProducts(filterWirelessProducts);
          setPopularProducts(filterPopularProducts);
     }, []);
     return (
          <Helmet title={" Home"}>
               <section className="hero__section">
                    <Container>
                         <Row>
                              <Col lg="6" md="6">
                                   <div className="hero_content">
                                        <p className="hero__subtitle">Trending Product in {year}</p>
                                        <h2>Make Your Interior More Minimalistic & Modern</h2>
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetur adipisicing
                                             elit. Eos, provident, illo optio id ex harum cum magnam
                                             maxime a sint, nobis quas suscipit est qui eum ullam.
                                             Odit, error unde.
                                        </p>
                                        <motion.button
                                             whileTap={{ scale: 1.1 }}
                                             className="shop__btn"
                                        >
                                             <Link to="/shop">Shop Now</Link>
                                        </motion.button>
                                   </div>
                              </Col>
                              <Col lg="6" md="6">
                                   <img src={heroImg} alt="" />{" "}
                              </Col>
                         </Row>
                    </Container>
               </section>
               <Services />
               <section className="trending__products">
                    <Container>
                         <Row>
                              <Col lg="12" className="text-center mb-5">
                                   <h2 className="section__title">Trending Products</h2>
                              </Col>
                              <ProductsList data={filterTrendingProduct} />
                         </Row>
                    </Container>
               </section>
               <section className="bestsales__products">
                    <Container>
                         <Row>
                              <Col lg="12" className="text-center mb-5 ">
                                   <h2 className="section__title">Best Sales Products</h2>
                              </Col>
                              <ProductsList data={filterBestSaleProduct} />
                         </Row>
                    </Container>
               </section>
               <section className="timer_count">
                    <Container>
                         <Row>
                              <Col lg="6" md="12" className="count__down-col">
                                   <div className="clock__top-content">
                                        <h4 className="text-white fs-6 mb-2">Limited Offer</h4>
                                        <h3 className="text-white fs-5 mb-3">Quanlity Armchair</h3>
                                   </div>
                                   <Clock />
                                   <motion.button
                                        whileTap={{ scale: 1.1 }}
                                        className="shop__btn store__btn"
                                   >
                                        <Link to="/shop">Visit Store</Link>
                                   </motion.button>
                              </Col>
                              <Col lg="6" md="12" className="text-end couter_img">
                                   <img src={counterImg} alt="" />
                              </Col>
                         </Row>
                    </Container>
               </section>
               <section className="new__arrivals">
                    <Container>
                         <Row>
                              <Col lg="12" className="text-center mb-5">
                                   <h2 className="section__title">New Arrivals</h2>
                              </Col>
                              <ProductsList data={mobileProducts} />
                              <ProductsList data={wirelessProducts} />
                         </Row>
                    </Container>
               </section>
               <section className="popular__category">
                    <Container>
                         <Row>
                              <Col lg="12" className="text-center mb-5">
                                   <h2 className="section__title">Popular in Category</h2>
                              </Col>
                              <ProductsList data={popularProducts} />
                         </Row>
                    </Container>
               </section>
          </Helmet>
     );
};

export default Home;
