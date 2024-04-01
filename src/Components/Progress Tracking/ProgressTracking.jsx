import React, { useState } from "react";
import "./progresstracking.css";
import { Link } from "react-router-dom";
import ProgressTrackingCourseOngoing from "./ProgressTrackingCourseOngoing";
import ProgressTrackingCourseCompleted from "./ProgressTrackingCourseCompleted";
import ProgressTrackingWorkoutOngoing from "./ProgressTrackingWorkoutOngoing";
import ProgressTrackingWorkoutCompleted from "./ProgressTrackingWorkoutCompleted";
const ProgressTracking = () => {
  const [activeButton, setActiveButton] = useState("ongoing");

  const handleButtonClick = (type) => {
    setActiveButton(type);
  };
  const [activecourseButton, setActivecourseButton] = useState("course");

  const handlecourseButtonClick = (type) => {
    setActivecourseButton(type);
  };
  return (
    <>
      <div className="container-fluid" style={{ minHeight: "488px" }}>
        <div className="mt-5">
          <h1 className="how-it-works-title">Progress Tracking</h1>
          <div className="container">
            <div className="row">
              <div className="col-md-12 mx-auto text-center my-4">
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  consectetur adipiscing elit, consectetur adipiscing elit,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore consectetur adipiscing elit,sed do eiusmod tempor
                  incididunt ut labore
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className={`btn  mx-2 rounded-pill my-1 ${
              activecourseButton === "course"
                ? "btn-dark "
                : "btn-outline-dark "
            } `}
            onClick={() => handlecourseButtonClick("course")}
            style={{ height: "48px", width: "150px" }}
          >
            {" "}
            Course
          </button>

          <button
            className={`btn  mx-2 rounded-pill my-1 ${
              activecourseButton === "course" ? "btn-outline-dark" : "btn-dark "
            } `}
            onClick={() => handlecourseButtonClick("workout")}
            style={{ height: "48px", width: "150px" }}
          >
            Workout Sessions
          </button>
        </div>
        <div className="d-flex justify-content-center container">
          <button
            type="button"
            className={`w-100 border-0 toggle-button ${
              activeButton === "ongoing" ? "progressactive" : "border-bottom"
            }`}
            style={{ backgroundColor: "white" }}
            onClick={() => handleButtonClick("ongoing")}
          >
            Ongoing
          </button>

          <button
            type="button"
            className={`w-100 border-0 toggle-button ${
              activeButton === "completed" ? "progressactive" : "border-bottom"
            }`}
            style={{ backgroundColor: "white" }}
            onClick={() => handleButtonClick("completed")}
          >
            Completed
          </button>
        </div>
        {activecourseButton === "course" ? (
          <>
            <div>
              {activeButton === "ongoing" && (
                <>
                  <ProgressTrackingCourseOngoing />
                </>
              )}
              {activeButton === "completed" && (
                <>
                  <ProgressTrackingCourseCompleted />
                </>
              )}
            </div>
          </>
        ) : (
          <>
            <div>
              {activeButton === "ongoing" && <ProgressTrackingWorkoutOngoing />}
              {activeButton === "completed" && (
                <ProgressTrackingWorkoutCompleted />
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProgressTracking;
