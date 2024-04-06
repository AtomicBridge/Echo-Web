import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import AuthenticateImage from "../AuthenticateImage";
const SignUpOtp = () => {
  const [otp, setOtp] = useState("");
  const [inputStyle, setInputStyle] = useState({
    width: "90px",
    height: "72px",
    fontSize: "24px",
    margin: "0 10px",
    textAlign: "center",
    borderRadius: "8px",
    border: "1px solid #E2E2E2",
    backgroundColor: "#FAFAFA",
    color: "#1D191C",
    fontWeight: "700",
  });
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/signupaccounttype");
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setInputStyle({
          width: "70px",
          height: "52px",
          fontSize: "18px",
          margin: "0 5px",
          textAlign: "center",
          borderRadius: "8px",
          border: "1px solid #E2E2E2",
          backgroundColor: "#FAFAFA",
          color: "#1D191C",
          fontWeight: "700",
        });
      } else if (width <= 576) {
        setInputStyle({
          width: "50px",
          height: "40px",
          fontSize: "14px",
          margin: "0 3px",
          textAlign: "center",
          borderRadius: "8px",
          border: "1px solid #E2E2E2",
          backgroundColor: "#FAFAFA",
          color: "#1D191C",
          fontWeight: "700",
        });
      } else {
        setInputStyle({
          width: "90px",
          height: "72px",
          fontSize: "24px",
          margin: "0 10px",
          textAlign: "center",
          borderRadius: "8px",
          border: "1px solid #E2E2E2",
          backgroundColor: "#FAFAFA",
          color: "#1D191C",
          fontWeight: "700",
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (otp) => {
    setOtp(otp);
  };

  return (
    <>
      <section className="overflow-hidden">
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
                      height="100"
                      width="100"
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
                      <h4 className="fw-bold mb-2 pb-2">Enter OTP Code</h4>
                      <div className="col-md-9">
                        <p className="text-secondary eighteenfont">
                          Check your email inbox for the OTP code we sent you.
                          Please enter it below to proceed.
                        </p>
                      </div>
                      <div className="form-group mb-3">
                        <OtpInput
                          value={otp}
                          onChange={handleChange}
                          numInputs={4}
                          inputStyle={inputStyle}
                          renderInput={(props) => <input {...props} />}
                        />

                        <div className=" mx-md-5 col-md-6">
                          <div className="text-center">
                            <div className=" mt-3">
                              <p className="text-low">
                                You can resend the code in <b className="text-default">56</b> seconds
                              </p>
                            </div>
                            <div className=" mt-3 text-low">
                              <p>Resend code</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="text-center align-items-center">
                          <div className="mb-3 mt-5 mx-auto">
                            <button
                              className="btn rounded-pill px-5 py-3 shadow w-100"
                              onClick={handleContinue}
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

export default SignUpOtp;
