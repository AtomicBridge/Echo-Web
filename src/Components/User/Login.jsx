import React, { useState } from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import AuthenticateImage from "./AuthenticateImage";

const Login = ({ setuserlogged }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChangeemail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlelogin = (e) => {
    e.preventDefault();

    // Check if username and password match the criteria for 'seller'
    if (email === "user" && password === "user") {
      localStorage.setItem("loggedInUser", "user");
      setuserlogged("user");
      navigate("/");
    } else if (email === "instructor" && password === "instructor") {
      localStorage.setItem("loggedInUser", "instructor");
      setuserlogged("instructor");
      navigate("/instructorhome");
    } else if (email === "trainer" && password === "trainer") {
      localStorage.setItem("loggedInUser", "trainer");
      setuserlogged("trainer");
      navigate("/trainerhome");
    } else {
      alert("Invalid username or password");
    }
  };
  return (
    <>
      <section className=" overflow-hidden">
        <div className="">
          <div className="row">
            <div
              className="col-md-6 text-center text-sm-start "
              style={{ color: "#1D191C" }}
            >
              <div className="container-fluid d-flex justify-content-center align-items-center">
                <div className="w-100">
                  <div className="px-xl-5 ms-xl-4 mt-4 mb-5">
                    <img
                      className="mb-2 img-fluid"
                      src="./img/user/login/logo 1 (1).png"
                      alt=""
                      height='28'
                      width='66'
                    />
                    <span className="fw-bold eighteenfont mx-3">
                      Powering Your Platform
                    </span>
                  </div>
                  <div className="d-flex flex-column align-items-center align-items-sm-start h-custom-2 px-xl-5 ms-xl-4  pt-xl-0 mt-xl-n5">
                    <form style={{ maxWidth: "100%", width: "100%" }}>
                      <h4 className="fw-bold mb-2 pb-2">Welcome Back!</h4>
                      <p className="text-secondary eighteenfont">
                        Login and manage your ECHO account.
                      </p>

                      <div className="form-group mb-3">
                        <label
                          className="form-label fw-bold"
                          htmlFor="form2Example18"
                        >
                          Email
                        </label>
                        <div className="position-relative">
                          <input
                            type="email"
                            className="form-control rounded-4 py-2 px-2 border-0"
                            id="email"
                            placeholder=" "
                            style={{
                              backgroundColor: "#FAFAFA",
                              height: "52px",
                            }}
                            onChange={handleChangeemail}
                          />
                          {email === "" && (
                            <label
                              htmlFor="email"
                              className="position-absolute top-0 start-0 bottom-0 py-3 px-2 text-secondary"
                            >
                              {/* <i className="fa-regular fa-envelope fa-lg mx-2"></i> Email */}{" "}
                              <img
                                src="./img/user/login/Message.png"
                                alt=""
                                className="mx-2"
                              />{" "}
                              Email
                            </label>
                          )}
                        </div>
                      </div>
                      <div className="form-outline mb-2">
                        <label
                          className="form-label fw-bold mt-1"
                          htmlFor="form2Example18"
                        >
                          Password
                        </label>
                        <div className="position-relative d-flex align-items-center">
                          <input
                            type={showPassword ? "text" : "password"}
                            className="form-control rounded-4 py-2 px-2 border-0"
                            id="password"
                            placeholder=" "
                            style={{
                              backgroundColor: "#FAFAFA",
                              height: "52px",
                              // fontSize: '24px'
                            }}
                            value={password}
                            onChange={handleChangePassword}
                          />
                          {password === "" && (
                            <label
                              htmlFor="password"
                              className="position-absolute top-0 start-0 bottom-0 py-3 px-2 text-secondary"
                            >
                              <img
                                src="./img/user/login/lock.png"
                                alt=""
                                className="mx-2"
                              />{" "}
                              Password
                            </label>
                          )}
                          <div className="position-absolute text-secondary top-0 end-0 bottom-0 py-3 px-2">
                            <FontAwesomeIcon
                              icon={showPassword ? faEyeSlash : faEye}
                              onClick={togglePasswordVisibility}
                              style={{ cursor: "pointer" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row  mt-3">
                        <div className="col d-flex justify-content-start align-items-center">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="form2Example31"
                            />
                            <label
                              className="form-check-label mx-2"
                              for="form2Example31"
                              style={{fontWeight:'600'}}
                            >
                              
                              Remember me
                            </label>
                          </div>
                        </div>

                        <div className="col d-flex justify-content-end align-items-center">
                          <Link
                            to="/forgotpassword"
                            className="text-decoration-none fw-bold"
                            style={{ color: "#1D191C" }}
                          >
                            Forgot password?
                          </Link>
                        </div>
                      </div>

                      <div className="container">
                        <div className="text-center align-items-center">
                          <p className="my-4">
                            Don't have an account?{" "}
                            <Link to="/signup" className="text-default">
                              <b>Sign Up</b>
                            </Link>
                          </p>
                          <div className=" text-secondary">
                            <div className="row">
                              <div className="col">
                                <hr className="my-3" />
                              </div>
                              <div className="col-auto">
                                <h5 className="text-center">Or Continue with</h5>
                              </div>
                              <div className="col">
                                <hr className="my-3" />
                              </div>
                            </div>
                          </div>
                          <div className="mb-3 mt-3 ">
                            <button className="btn rounded-pill px-0 py-3 border w-100 d-flex align-items-center justify-content-center">
                              <img
                                src="./img/user/login/google.png"
                                alt=""
                                className="mx-2 px-2"
                              />
                              <span className="mx-auto fw-bold">Continue with Google</span>
                            </button>
                          </div>
                          <div className="mb-3 my-1">
                            <button className="btn rounded-pill px-0 py-3 border w-100 d-flex align-items-center justify-content-center">
                              <img
                                src="./img/user/login/Vector (1).png"
                                alt=""
                                className="mx-2 px-2"
                              />
                              <span className="mx-auto fw-bold">Continue with Apple</span>
                            </button>
                          </div>
                          <div className="mb-3 my-1">
                            <button className="btn rounded-pill px-0 py-3 border w-100 d-flex align-items-center justify-content-center">
                              <img
                                src="./img/user/login/Vector (2).png"
                                alt=""
                                className="mx-2 px-2"
                              />
                              <span className="mx-auto fw-bold">
                                Continue with Facebook
                              </span>
                            </button>
                          </div>

                          <div className="mb-5 mt-4  mx-auto">
                            <button
                              className="btn rounded-pill px-5 py-3 shadow w-100"
                              onClick={(e) => handlelogin(e)}
                              style={{
                                backgroundColor: "#1D191C",
                                color: "white",
                              }}
                            >
                              Login
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <AuthenticateImage />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
