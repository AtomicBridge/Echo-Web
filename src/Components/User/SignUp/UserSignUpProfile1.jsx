import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthenticateImage from "../AuthenticateImage";
const UserSignUpProfile1 = () => {
  const [fullName, setFullName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [accounttype, setaccounttype] = useState(
    localStorage.getItem("accountType")
  );

  const navigate = useNavigate();

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContinue = () => {
    if (fullName && location && description && avatar) {
      switch (accounttype) {
        case "user":
          navigate("/usersignupprofile2");
          break;
        case "instructor":
          navigate("/instructorsignupprofile2");
          break;
        case "trainer":
          navigate("/trainersignupprofile2");
          break;
        default:
          // Handle default case or error
          break;
      }
    }
  };

  return (
    <>
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
                        className="mb-2"
                        src="./img/user/login/logo 1 (1).png"
                        alt=""
                      />
                      <span className="fw-bold eighteenfont mx-2">
                        Powering Your Platform
                      </span>
                    </div>
                    <div className="d-flex flex-column align-items-center align-items-sm-start h-custom-2 px-xl-5 ms-xl-4 mt-4">
                      <form style={{ maxWidth: "100%", width: "100%" }}>
                        <div className="text-center mb-2 mt-md-3 position-relative">
                          <img
                            src={avatar || "./img/user/signup/image 6 (1).png"}
                            alt="avatar"
                            className="rounded-circle img-fluid"
                            width="140"
                            style={{ width: "140px", height: "140px" }}
                          />
                          <div className="position-absolute bottom-0 start-50 translate-middle-x mx-5">
                            <label
                              htmlFor="avatarInput"
                              className="btn btn-link"
                            >
                              <img
                                src="./img/user/signup/Edit Square.png"
                                alt=""
                              />
                            </label>
                            <input
                              type="file"
                              id="avatarInput"
                              accept="image/*"
                              style={{ display: "none" }}
                              onChange={handleFileInputChange}
                            />
                          </div>
                        </div>
                        <div className="text-center">
                          <span className="eighteenfont">
                            <b>Profile Picture</b>
                          </span>
                        </div>
                        <div className="form-group mb-3 mt-1">
                          <label
                            className="form-label fw-bold"
                            htmlFor="fullName"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="form-control rounded-4 py-2 px-2 border-0"
                            id="fullName"
                            placeholder="Full Name"
                            style={{
                              backgroundColor: "#FAFAFA",
                              height: "52px",
                            }}
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                          />
                        </div>
                        <div className="form-group mb-3 mt-3">
                          <label
                            className="form-label fw-bold"
                            htmlFor="location"
                          >
                            Location
                          </label>
                          <div className="position-relative">
                            <input
                              type="text"
                              className="form-control rounded-4 py-2 px-2 border-0"
                              id="location"
                              placeholder="Location"
                              style={{
                                backgroundColor: "#FAFAFA",
                                height: "52px",
                              }}
                              value={location}
                              onChange={(e) => setLocation(e.target.value)}
                            />
                            <span className="position-absolute top-50 end-0 translate-middle-y pe-3">
                              <i className="fas fa-map-marker-alt fa-lg"></i>
                            </span>
                          </div>
                        </div>
                        <div className="form-group mb-3 mt-3">
                          <label
                            className="form-label fw-bold"
                            htmlFor="description"
                          >
                            Description
                          </label>
                          <textarea
                            className="form-control rounded-4 py-3 px-2"
                            id="description"
                            placeholder="Description"
                            rows="7"
                            style={{ backgroundColor: "#FAFAFA" }}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          ></textarea>
                        </div>
                        <div className="text-center mb-3">
                          <button
                            className="btn rounded-pill px-5 py-3 shadow w-100"
                            onClick={handleContinue}
                            style={{
                              backgroundColor: "#1D191C",
                              color: "white",
                            }}
                            disabled={
                              !fullName || !location || !description || !avatar
                            }
                          >
                            Continue
                          </button>
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
    </>
  );
};

export default UserSignUpProfile1;
