import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../../styles/product-card.scss";
import { Col } from "reactstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductsCard = ({ item }) => {
     const dispatch = useDispatch();
     const addToCart = () => {
          dispatch(
               cartActions.addItem({
                    id: item.id,
                    productName: item.productName,
                    imgUrl: item.imgUrl,
                    price: item.price,
               })
          );
          toast.success("Product added successfully");
     };
     return (
          <Col lg="3" md="4" className="mb-2">
               <div className="product__item">
                    <motion.div whileHover={{ scale: 1.05 }} className="product__img">
                         <img src={item.imgUrl} alt="" />
                    </motion.div>
                    <div className="p-2 product__info">
                         <h3 className="product__name">
                              <Link to={`/shop/${item.id}`}>{item.productName}</Link>
                         </h3>
                         <span>{item.category}</span>
                    </div>
                    <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
                         <span className="price">$ {item.price}</span>
                         <motion.span whileHover={{ scale: 1.1 }} onClick={addToCart}>
                              <i className="ri-add-line"></i>
                         </motion.span>
                    </div>
               </div>
          </Col>
     );
};

export default ProductsCard;
