import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import AuthenticateImage from "../AuthenticateImage";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [newpassword, setnewPassword] = useState("");
  const [shownewPassword, setShownewPassword] = useState(false);
  const [confirmnewpassword, setconfirmnewPassword] = useState("");
  const [showconfirmnewPassword, setShowconfirmnewPassword] = useState(false);
  const navigate = useNavigate();

  const handlesignup = () => {
    navigate("/signupotp");
  };
  const handleChangeemail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangenewPassword = (e) => {
    setnewPassword(e.target.value);
  };
  const togglenewPasswordVisibility = () => {
    setShownewPassword(!shownewPassword);
  };
  const handleChangeconfirmnewPassword = (e) => {
    setconfirmnewPassword(e.target.value);
  };
  const toggleconfirmnewPasswordVisibility = () => {
    setShowconfirmnewPassword(!showconfirmnewPassword);
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
                  <div className="px-xl-5 ms-xl-4 mt-4 mb-3">
                    <img
                      className="mb-2"
                      src="./img/user/login/logo 1 (1).png"
                      alt=""
                    />
                    <span className="fw-bold eighteenfont mx-2">
                      Powering Your Platform
                    </span>
                  </div>
                  <div className="d-flex flex-column align-items-center align-items-sm-start h-custom-2 px-xl-5 ms-xl-4  pt-xl-0 mt-xl-n5">
                    <form style={{ maxWidth: "100%", width: "100%" }}>
                      <h4 className="fw-bold mb-2 pb-2">Create Your Account</h4>
                      <p className="text-secondary eighteenfont">
                        Elevate your ECHO account with this App.
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
                          className="form-label fw-bold"
                          htmlFor="form2Example19"
                        >
                          New Password
                        </label>
                        <div className="position-relative d-flex align-items-center">
                          <input
                            type={shownewPassword ? "text" : "password"}
                            className="form-control rounded-4 py-2 px-2 border-0"
                            id="newpassword"
                            placeholder=" "
                            style={{
                              backgroundColor: "#FAFAFA",
                              height: "52px",
                            }}
                            value={newpassword}
                            onChange={handleChangenewPassword}
                          />
                          {newpassword === "" && (
                            <label
                              htmlFor="newpassword"
                              className="position-absolute top-0 start-0 bottom-0 py-3 px-2 text-secondary"
                            >
                              <img
                                src="./img/user/login/lock.png"
                                alt=""
                                className="mx-2"
                              />
                              New Password
                            </label>
                          )}
                          <div className="position-absolute text-secondary top-0 end-0 bottom-0 py-3 px-2">
                            <FontAwesomeIcon
                              icon={shownewPassword ? faEyeSlash : faEye}
                              onClick={togglenewPasswordVisibility}
                              style={{ cursor: "pointer", userSelect: "none" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-outline mb-2">
                        <label
                          className="form-label fw-bold"
                          htmlFor="form2Example18"
                        >
                          Re-Enter Password
                        </label>
                        <div className="position-relative d-flex align-items-center">
                          <input
                            type={showconfirmnewPassword ? "text" : "password"}
                            className="form-control rounded-4 py-2 px-2 border-0"
                            id="confirmnewpassword"
                            placeholder=" "
                            style={{
                              backgroundColor: "#FAFAFA",
                              height: "52px",
                            }}
                            value={confirmnewpassword}
                            onChange={handleChangeconfirmnewPassword}
                          />
                          {confirmnewpassword === "" && (
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
                              icon={showconfirmnewPassword ? faEyeSlash : faEye}
                              onClick={toggleconfirmnewPasswordVisibility}
                              style={{ cursor: "pointer", userSelect: "none" }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="container">
                        <div className="text-center align-items-center">
                          <p>
                            Already have an account?{" "}
                            <Link to="/login" className="text-default">
                              <b>Login</b>
                            </Link>
                          </p>
                          <div class=" text-secondary">
                            <div class="row">
                              <div class="col">
                                <hr class="my-3" />
                              </div>
                              <div class="col-auto">
                                <h5 class="text-center">Or Continue with</h5>
                              </div>
                              <div class="col">
                                <hr class="my-3" />
                              </div>
                            </div>
                          </div>
                          <div class="mb-3 my-1">
                            <button class="btn rounded-pill px-0 py-3 border w-100 d-flex align-items-center justify-content-center">
                              <img
                                src="./img/user/login/google.png"
                                alt=""
                                class="mx-2"
                              />
                              <span class="mx-auto">Continue with Google</span>
                            </button>
                          </div>
                          <div class="mb-3 my-1">
                            <button class="btn rounded-pill px-0 py-3 border w-100 d-flex align-items-center justify-content-center">
                              <img
                                src="./img/user/login/Vector (1).png"
                                alt=""
                                class="mx-2"
                              />
                              <span class="mx-auto">Continue with Apple</span>
                            </button>
                          </div>
                          <div class="mb-3 my-1">
                            <button class="btn rounded-pill px-0 py-3 border w-100 d-flex align-items-center justify-content-center">
                              <img
                                src="./img/user/login/Vector (2).png"
                                alt=""
                                class="mx-2"
                              />
                              <span class="mx-auto">
                                Continue with Facebook
                              </span>
                            </button>
                          </div>

                          <div className="mt-3 mt-xxl-4  mx-auto">
                            <button
                              className="btn rounded-pill px-5 py-3 shadow w-100"
                              onClick={handlesignup}
                              style={{
                                backgroundColor: "#1D191C",
                                color: "white",
                              }}
                            >
                              Sign Up
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

export default SignUp;
