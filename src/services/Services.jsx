import React from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";

import "./Services.scss";
import servicesData from "../assets/data/serviceData";

const Services = () => {
     return (
          <section className="services">
               <Container>
                    <Row>
                         {servicesData.map((item, index) => (
                              <Col lg="3" md="4" key={index}>
                                   <motion.div
                                        className="services__item"
                                        style={{ background: `${item.bg}` }}
                                        whileTap={{ scale: 1.1 }}
                                   >
                                        <span>
                                             <i className={item.icon}></i>
                                        </span>
                                        <div>
                                             <h3>{item.title}</h3>
                                             <p>{item.subtitle}</p>
                                        </div>
                                   </motion.div>
                              </Col>
                         ))}
                    </Row>
               </Container>
          </section>
     );
};

export default Services;
