import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import AuthenticateImage from "./AuthenticateImage";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleChangeemail = (e) => {
    setEmail(e.target.value);
  };
  const handlecontinue = () => {
    navigate("/forgotpasswordotp");
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
                    <span className="fw-bold eighteenfont mx-2">
                      Powering Your Platform
                    </span>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center align-items-sm-start h-custom-2 px-xl-5 ms-xl-4 "
                    style={{ marginTop: "25%" }}
                  >
                    <form style={{ maxWidth: "100%", width: "100%" }}>
                      <h4 className="fw-bold mb-2 pb-2">Reset Your Password</h4>
                      <div className="col-md-9">
                        <p className="text-secondary eighteenfont">
                          Please enter the email associated with your this app
                          account. We’ll send you an OTP code to reset your
                          password.
                        </p>
                      </div>
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

                      <div className="">
                        <div className="text-center align-items-center">
                          <div className="mb-5 mt-5  mx-auto">
                            <button
                              className="btn rounded-pill px-5 py-3 shadow w-100"
                              onClick={handlecontinue}
                              style={{
                                backgroundColor: "#1D191C",
                                color: "white",
                              }}
                            >
                              Continue
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

export default ForgotPassword;
