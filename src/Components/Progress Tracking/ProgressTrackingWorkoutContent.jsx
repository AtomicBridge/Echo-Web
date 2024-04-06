import React from 'react';
import { Link } from 'react-router-dom';

const ProgressTrackingWorkoutContent = () => {
    const numCards = 10; // Number of cards to display

    return (
        <div className="container-fluid" style={{ minHeight: '488px' }}>
            <div className='mt-5'>
                <h1 className="how-it-works-title">Progress Tracking</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mx-auto text-center my-4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className="col-md-9 mx-auto">
                    <div className="row" style={{marginBottom:'10%'}}>
                        {[...Array(numCards)].map((_, index) => (
                            <div className="col-md-6" key={index}>
                                <div className="d-flex justify-content-start align-items-center">
                                    <div className="px-3">
                                        <input
                                            className="form-check-input shadow rounded-2"
                                            type="checkbox"
                                            value=""
                                            id={`flexCheckDefault${index}`}
                                            style={{ width: '24px', height: '24px' }}
                                        />
                                    </div>
                                    <div className="d-flex justify-content-center w-100 mt-3">
                                        <div className="card border-0 rounded-4 d-flex flex-row align-items-center w-100 shadow" >
                                            <div>
                                                <img className='img-fluid rounded-start-4' src="./img/courses/workoutdetails/Rectangle 148441 (1).png" width="124" height='130' alt="Workout" />
                                            </div>
                                            <div className="stats flex-grow-1">
                                                <div className="px-3">
                                                    <Link to='/workoutstart' style={{ textDecoration: 'none', color: 'black' }}>
                                                        <h5 className="my-3"><b>Stark Pose</b></h5>
                                                    </Link>
                                                    <p className='text-secondary'>30 seconds</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressTrackingWorkoutContent;
