import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthenticateImage from "../AuthenticateImage";
import "./signup.css";

const UserSignUpProfile2 = () => {
  const [email, setEmail] = useState("");
  const [selectedInterest, setSelectedInterest] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedgender, setSelectedgender] = useState("");
  const [isDropdowngenderOpen, setIsDropdowngenderOpen] = useState(false);
  const [selectedgoal, setSelectedgoal] = useState("");
  const [isDropdowngoalOpen, setIsDropdowngoalOpen] = useState(false);
  const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleInterestChange = (value) => {
    setSelectedInterest(value);
    setIsDropdownOpen(false);
  };

  const handleContinue = () => {
    navigate("/forgotpasswordotp");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handlegenderChange = (value) => {
    setSelectedgender(value);
    setIsDropdowngenderOpen(false);
  };
  const toggleDropdowngender = () => {
    setIsDropdowngenderOpen(!isDropdowngenderOpen);
  };
  const handlegoalChange = (value) => {
    setSelectedgoal(value);
    setIsDropdowngoalOpen(false);
  };
  const toggleDropdowngoal = () => {
    setIsDropdowngoalOpen(!isDropdowngoalOpen);
  };
  const [selectedweight, setSelectedweight] = useState("kg ");

  const handleweightClick = (item, e) => {
    e.preventDefault();
    setSelectedweight(item);
  };
  const [selectedheight, setSelectedheight] = useState("cm ");

  const handleheightClick = (item, e) => {
    e.preventDefault();
    setSelectedheight(item);
  };

  const handleAccountSuccessful = () => {
    setShowModal(true);
  };

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let timer;
    if (showModal) {
      timer = setTimeout(() => {
        setShowModal(false);
        navigate("/login");
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [showModal]);

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
                  <div className="px-xl-5 ms-xl-4 mt-4 mb-4">
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
                  <div className="d-flex flex-column align-items-center align-items-sm-start h-custom-2 px-xl-5 ms-xl-4 ">
                    <form style={{ maxWidth: "100%", width: "100%" }}>
                      <h4 className="fw-bold mb-1 pb-1">Build Your Profile</h4>
                      <div className="col-md-9">
                        <p className="text-secondary eighteenfont mt-3">
                          Check your email inbox for the OTP code we sent you.
                          Please enter it below to proceed.
                        </p>
                      </div>
                      <div className="form-group mb-3">
                        <label
                          className="form-label fw-bold"
                          htmlFor="interestSelect"
                        >
                          Select Your Interest
                        </label>
                        <div className="position-relative">
                          <div className="custom-dropdown">
                            <div
                              className=" rounded-4 py-3 px-2 border-0"
                              style={{
                                backgroundColor: "#FAFAFA",
                                height: "52px",
                              }}
                            >
                              {selectedInterest
                                ? selectedInterest
                                : <span className="text-low">Dropdown to select</span>}
                              <span
                                className="position-absolute top-50 end-0 translate-middle-y pe-3 dropdown-label"
                                onClick={toggleDropdown}
                              >
                                <img
                                  src="./img/user/signup/Arrow - Down 2.png"
                                  alt=""
                                />
                              </span>
                            </div>
                            {isDropdownOpen && (
                              <div className="options p-2">
                                <div className="row">
                                  <div className="col-12">
                                    <label className="d-flex justify-content-between align-items-center border-bottom">
                                      <span>UI/UX Designer</span>
                                      <input
                                        type="radio"
                                        name="interest"
                                        value="UI/UX Designer"
                                        checked={
                                          selectedInterest === "UI/UX Designer"
                                        }
                                        style={{
                                          accentColor: "#1D191C",
                                          width: "20px",
                                          height: "20px",
                                          marginRight: "8px",
                                        }}
                                        onChange={() =>
                                          handleInterestChange("UI/UX Designer")
                                        }
                                      />
                                    </label>
                                  </div>
                                  <div className="col-12">
                                    <label className="d-flex justify-content-between align-items-center border-bottom">
                                      <span>Graphic Designer</span>
                                      <input
                                        type="radio"
                                        name="interest"
                                        value="Graphic Designer"
                                        checked={
                                          selectedInterest ===
                                          "Graphic Designer"
                                        }
                                        style={{
                                          accentColor: "#1D191C",
                                          width: "20px",
                                          height: "20px",
                                          marginRight: "8px",
                                        }}
                                        onChange={() =>
                                          handleInterestChange(
                                            "Graphic Designer"
                                          )
                                        }
                                      />
                                    </label>
                                  </div>
                                  <div className="col-12">
                                    <label className="d-flex justify-content-between align-items-center border-bottom">
                                      <span>Web Designing</span>
                                      <input
                                        type="radio"
                                        name="interest"
                                        value="Web Designing"
                                        checked={
                                          selectedInterest === "Web Designing"
                                        }
                                        style={{
                                          accentColor: "#1D191C",
                                          width: "20px",
                                          height: "20px",
                                          marginRight: "8px",
                                        }}
                                        onChange={() =>
                                          handleInterestChange("Web Designing")
                                        }
                                      />
                                    </label>
                                  </div>
                                  <div className="col-12">
                                    <label className="d-flex justify-content-between align-items-center border-bottom">
                                      <span>Web Development</span>
                                      <input
                                        type="radio"
                                        name="interest"
                                        value="Web Development"
                                        checked={
                                          selectedInterest === "Web Development"
                                        }
                                        style={{
                                          accentColor: "#1D191C",
                                          width: "20px",
                                          height: "20px",
                                          marginRight: "8px",
                                        }}
                                        onChange={() =>
                                          handleInterestChange(
                                            "Web Development"
                                          )
                                        }
                                      />
                                    </label>
                                  </div>
                                  <div className="col-12">
                                    <label className="d-flex justify-content-between align-items-center">
                                      <span>Illustrator</span>
                                      <input
                                        type="radio"
                                        name="interest"
                                        value="Illustrator"
                                        checked={
                                          selectedInterest === "Illustrator"
                                        }
                                        style={{
                                          accentColor: "#1D191C",
                                          width: "20px",
                                          height: "20px",
                                          marginRight: "8px",
                                        }}
                                        onChange={() =>
                                          handleInterestChange("Illustrator")
                                        }
                                      />
                                    </label>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <label
                          className="form-label fw-bold"
                          htmlFor="interestSelect"
                        >
                          Select Your Gender
                        </label>
                        <div className="position-relative">
                          <div className="custom-dropdown">
                            <div
                              className=" rounded-4 py-3 px-2 border-0"
                              style={{
                                backgroundColor: "#FAFAFA",
                                height: "52px",
                              }}
                            >
                              {selectedgender
                                ? selectedgender
                                : <span className="text-low">Dropdown to select</span>}
                              <span
                                className="position-absolute top-50 end-0 translate-middle-y pe-3 dropdown-label"
                                onClick={toggleDropdowngender}
                              >
                                <img
                                  src="./img/user/signup/Arrow - Down 2.png"
                                  alt=""
                                />
                              </span>
                            </div>
                            {isDropdowngenderOpen && (
                              <div className="options p-2">
                                <div className="row">
                                  <div className="col-12">
                                    <label className="d-flex justify-content-between align-items-center border-bottom">
                                      <span>Male</span>
                                      <input
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        checked={selectedgender === "Male"}
                                        style={{
                                          accentColor: "#1D191C",
                                          width: "20px",
                                          height: "20px",
                                          marginRight: "8px",
                                        }}
                                        onChange={() =>
                                          handlegenderChange("Male")
                                        }
                                      />
                                    </label>
                                  </div>
                                  <div className="col-12">
                                    <label className="d-flex justify-content-between align-items-center ">
                                      <span>Female</span>
                                      <input
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                        checked={selectedgender === "Female"}
                                        style={{
                                          accentColor: "#1D191C",
                                          width: "20px",
                                          height: "20px",
                                          marginRight: "8px",
                                        }}
                                        onChange={() =>
                                          handlegenderChange("Female")
                                        }
                                      />
                                    </label>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <label
                          className="form-label fw-bold"
                          htmlFor="form2Example18"
                        >
                          Enter Your Age
                        </label>
                        <div className="position-relative">
                          <input
                            type="number"
                            className="form-control rounded-4 py-2 px-2 border-0"
                            id="age"
                            placeholder="Age"
                            style={{
                              backgroundColor: "#FAFAFA",
                              height: "52px",
                            }}
                          />
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label
                              className="form-label fw-bold"
                              htmlFor="form2Example18"
                            >
                              Your Weight
                            </label>
                            <div className="col-md-12">
                              <div className="d-flex align-items-center">
                                <div className="position-relative col-md-7">
                                  <input
                                    type="number"
                                    step="0.01"
                                    className="form-control rounded-4 py-2 px-2 border-0"
                                    id="weight"
                                    placeholder="Weight"
                                    style={{
                                      backgroundColor: "#FAFAFA",
                                      height: "52px",
                                    }}
                                  />
                                </div>
                                <div className="btn-group col-md-3 mx-3">
                                  <button
                                    type="button"
                                    className="btn dropdown-toggle rounded-4 border-0 "
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{
                                      backgroundColor: "#FAFAFA",
                                      height: "52px",
                                      fontWeight:'600'
                                    }}
                                  >
                                    {selectedweight}
                                  </button>
                                  <ul className="dropdown-menu">
      <li>
        <button
          className="dropdown-item"
          onClick={(e) => handleweightClick("t ", e)}
        >
          t
        </button>
      </li>
      <li>
        <button
          className="dropdown-item"
          onClick={(e) => handleweightClick("kg ", e)}
        >
          kg
        </button>
      </li>
      <li>
        <button
          className="dropdown-item"
          onClick={(e) => handleweightClick("g ", e)}
        >
          g
        </button>
      </li>
      <li>
        <button
          className="dropdown-item"
          onClick={(e) => handleweightClick("mg ", e)}
        >
          mg
        </button>
      </li>
      <li>
        <button
          className="dropdown-item"
          onClick={(e) => handleweightClick("lb ", e)}
        >
          lb
        </button>
      </li>
      <li>
        <button
          className="dropdown-item"
          onClick={(e) => handleweightClick("oz ", e)}
        >
          oz
        </button>
      </li>
    </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label
                              className="form-label fw-bold"
                              htmlFor="form2Example18"
                            >
                              Your Height
                            </label>
                            <div className="col-md-12">
                              <div className="d-flex align-items-center">
                                <div className="position-relative col-md-7">
                                  <input
                                    type="number"
                                    step="0.01"
                                    className="form-control rounded-4 py-2 px-2 border-0"
                                    id="height"
                                    placeholder="Height"
                                    style={{
                                      backgroundColor: "#FAFAFA",
                                      height: "52px",
                                    }}
                                  />
                                </div>
                                <div className="btn-group col-md-3 mx-3">
                                  <button
                                    type="button"
                                    className="btn dropdown-toggle rounded-4 border-0"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{
                                      backgroundColor: "#FAFAFA",
                                      height: "52px",
                                      fontWeight:'600'
                                    }}
                                  >
                                    {selectedheight}
                                  </button>
                                  <ul className="dropdown-menu">
  <li>
    <button
      className="dropdown-item"
      onClick={(e) => handleheightClick("m ", e)}
    >
      m
    </button>
  </li>
  <li>
    <button
      className="dropdown-item"
      onClick={(e) => handleheightClick("yd ", e)}
    >
      yd
    </button>
  </li>
  <li>
    <button
      className="dropdown-item"
      onClick={(e) => handleheightClick("ft ", e)}
    >
      ft
    </button>
  </li>
  <li>
    <button
      className="dropdown-item"
      onClick={(e) => handleheightClick("in ", e)}
    >
      in
    </button>
  </li>
  <li>
    <button
      className="dropdown-item"
      onClick={(e) => handleheightClick("cm ", e)}
    >
      cm
    </button>
  </li>
</ul>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <label
                          className="form-label fw-bold"
                          htmlFor="interestSelect"
                        >
                          Select Your Goals
                        </label>
                        <div className="position-relative">
                          <div className="custom-dropdown">
                            <div
                              className=" rounded-4 py-3 px-2 border-0"
                              style={{
                                backgroundColor: "#FAFAFA",
                                height: "52px",
                              }}
                            >
                              {selectedgoal
                                ? selectedgoal
                                : <span className="text-low">Dropdown to select</span>}
                              <span
                                className="position-absolute top-50 end-0 translate-middle-y pe-3 dropdown-label"
                                onClick={toggleDropdowngoal}
                              >
                                <img
                                  src="./img/user/signup/Arrow - Down 2.png"
                                  alt=""
                                />
                              </span>
                            </div>
                            {isDropdowngoalOpen && (
                              <div className="options p-2">
                                <div className="row">
                                  <div className="col-12">
                                    <label className="d-flex justify-content-between align-items-center border-bottom">
                                      <span>Lose Weight</span>
                                      <input
                                        type="radio"
                                        name="goal"
                                        value="Lose Weight"
                                        checked={selectedgoal === "Lose Weight"}
                                        style={{
                                          accentColor: "#1D191C",
                                          width: "20px",
                                          height: "20px",
                                          marginRight: "8px",
                                        }}
                                        onChange={() =>
                                          handlegoalChange("Lose Weight")
                                        }
                                      />
                                    </label>
                                  </div>
                                  <div className="col-12">
                                    <label className="d-flex justify-content-between align-items-center border-bottom">
                                      <span>Build Muscles</span>
                                      <input
                                        type="radio"
                                        name="goal"
                                        value="Build Muscles"
                                        checked={
                                          selectedgoal === "Build Muscles"
                                        }
                                        style={{
                                          accentColor: "#1D191C",
                                          width: "20px",
                                          height: "20px",
                                          marginRight: "8px",
                                        }}
                                        onChange={() =>
                                          handlegoalChange("Build Muscles")
                                        }
                                      />
                                    </label>
                                  </div>
                                  <div className="col-12">
                                    <label className="d-flex justify-content-between align-items-center border-bottom">
                                      <span>Improve Health</span>
                                      <input
                                        type="radio"
                                        name="goal"
                                        value="Improve Health"
                                        checked={
                                          selectedgoal === "Improve Health"
                                        }
                                        style={{
                                          accentColor: "#1D191C",
                                          width: "20px",
                                          height: "20px",
                                          marginRight: "8px",
                                        }}
                                        onChange={() =>
                                          handlegoalChange("Improve Health")
                                        }
                                      />
                                    </label>
                                  </div>
                                  <div className="col-12">
                                    <label className="d-flex justify-content-between align-items-center border-bottom">
                                      <span>Improve Endurance</span>
                                      <input
                                        type="radio"
                                        name="goal"
                                        value="Improve Endurance"
                                        checked={
                                          selectedgoal === "Improve Endurance"
                                        }
                                        style={{
                                          accentColor: "#1D191C",
                                          width: "20px",
                                          height: "20px",
                                          marginRight: "8px",
                                        }}
                                        onChange={() =>
                                          handlegoalChange("Improve Endurance")
                                        }
                                      />
                                    </label>
                                  </div>
                                  <div className="col-12">
                                    <label className="d-flex justify-content-between align-items-center ">
                                      <span>Others</span>
                                      <input
                                        type="radio"
                                        name="goal"
                                        value="Others"
                                        checked={selectedgoal === "Others"}
                                        style={{
                                          accentColor: "#1D191C",
                                          width: "20px",
                                          height: "20px",
                                          marginRight: "8px",
                                        }}
                                        onChange={() =>
                                          handlegoalChange("Others")
                                        }
                                      />
                                    </label>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <label
                          className="form-label fw-bold"
                          htmlFor="form2Example18"
                        >
                          Physical Activity Level
                        </label>
                        <div className="position-relative">
                          <input
                            type="text"
                            className="form-control rounded-4 py-2 px-2 border-0"
                            id="physical"
                            placeholder="Enter"
                            style={{
                              backgroundColor: "#FAFAFA",
                              height: "52px",
                            }}
                          />
                        </div>
                      </div>
                      <div className="">
                        <div className="text-center align-items-center">
                          <div className="mb-5 mt-4 mx-auto">
                            <button
                              className="btn rounded-pill px-5 py-3 shadow w-100"
                              onClick={(e) => {
                                e.preventDefault();
                                handleAccountSuccessful();
                              }}
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
                    {showModal && (
                      <div
                        className="modal show d-flex align-items-center justify-content-center"
                        id="paymentModal"
                        tabIndex="-1"
                        aria-labelledby="paymentModalLabel"
                        style={{
                          display: "block",
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                        }}
                      >
                        <div
                          className="modal-dialog "
                          // style={{ marginTop: "5%" }}
                        >
                          <div className="modal-content my-1">
                            <div className="modal-body text-center">
                              <img
                                src="./img/courses/coursepayment/coursepaymentsuccessfull.png"
                                alt=""
                                height="100"
                                width="100"
                              />
                              <h4 className="my-3">
                                <b>Account Setup Successfully!</b>
                              </h4>
                              <h6>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Pellentesque vulputate placerat
                                porta. Ut commodo nulla vitae eleifend sodales.
                                Fusce ornare.
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
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

export default UserSignUpProfile2;
