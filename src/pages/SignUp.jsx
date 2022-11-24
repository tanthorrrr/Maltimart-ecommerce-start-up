import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { auth, storage, db } from "../firebase.config";
import { useNavigate } from "react-router-dom";

import Helmet from "../components/Helmet/Helmet";
import "../styles/login.scss";

const SignUp = () => {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [username, setUsername] = useState("");
     const [file, setFile] = useState(null);
     const [loading, setLoading] = useState(false);
     const navigate = useNavigate();
     const signup = async (e) => {
          e.preventDefault();
          setLoading(true);
          try {
               const userCredential = await createUserWithEmailAndPassword(auth, email, password);
               const user = userCredential.user;
               const storageRef = ref(storage, `images/${Date.now() + username}`);
               const uploadTask = uploadBytesResumable(storageRef, file);
               uploadTask.on(
                    (error) => {
                         toast.error(error.message);
                    },
                    () => {
                         getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                              //update user profile
                              await updateProfile(user, {
                                   displayName: username,
                                   photoURL: downloadURL,
                              });
                              //store user data in firestore database
                              await setDoc(doc(db, "users", user.uid), {
                                   uid: user.uid,
                                   displayName: username,
                                   email,
                                   photoURL: downloadURL,
                              });
                         });
                    }
               );
               setLoading(false);
               toast.success("Account created");
               navigate("/login");
          } catch (error) {
               setLoading(false);
               toast.error("something went wrong ");
          }
     };
     return (
          <Helmet title="Sign up">
               <section>
                    <Container>
                         <Row>
                              {loading ? (
                                   <Col className="text-center">
                                        <h5 className="fw-bold">Loading...</h5>
                                   </Col>
                              ) : (
                                   <Col lg="6" className="m-auto text-center ">
                                        <h3 className="fw-bold mb-4">Register</h3>
                                        <Form className="auth__form" onSubmit={signup}>
                                             <FormGroup className="form__group">
                                                  <input
                                                       type="email"
                                                       placeholder="Enter your email"
                                                       value={email}
                                                       onChange={(e) => setEmail(e.target.value)}
                                                  />
                                             </FormGroup>
                                             <FormGroup className="form__group">
                                                  <input
                                                       type="text"
                                                       placeholder="Enter your Username"
                                                       value={username}
                                                       onChange={(e) => setUsername(e.target.value)}
                                                  />
                                             </FormGroup>

                                             <FormGroup className="form__group">
                                                  <input
                                                       type="password"
                                                       placeholder="Enter your  password"
                                                       value={password}
                                                       onChange={(e) => setPassword(e.target.value)}
                                                  />
                                             </FormGroup>

                                             <FormGroup className="form__group">
                                                  <input
                                                       type="file"
                                                       onChange={(e) => setFile(e.target.value)}
                                                  />
                                             </FormGroup>
                                             <motion.button
                                                  whileTap={{ scale: 1.1 }}
                                                  type="submit"
                                                  className="shop__btn login__btn"
                                             >
                                                  Create an Account
                                             </motion.button>
                                             <p>
                                                  Already have an account ?
                                                  <Link to="/login">Login</Link>
                                             </p>
                                        </Form>
                                   </Col>
                              )}
                         </Row>
                    </Container>
               </section>
          </Helmet>
     );
};

export default SignUp;
