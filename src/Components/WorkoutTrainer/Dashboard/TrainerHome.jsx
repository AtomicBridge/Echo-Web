import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../CourseInstructor/Dashboard/instructorhome.css';
import InstructorSidebar from '../../CourseInstructor/Dashboard/InstructorSidebar';
import InstructoreHeader from '../../CourseInstructor/Dashboard/InstructoreHeader';

const TrainerHome = () => {
  return (
    <>
    <div className="overflow-hidden">
      <div className="row">
        {/* Sidebar */}
        <InstructorSidebar/>
        {/* Main Content */}
        <div className="col-md-10">
          <InstructoreHeader/>
          <div className='container-fluid my-4'>
            <h3 className='fw-bold'>My Courses</h3>
            <div className='row'>
            {[...Array(6)].map((_, index) => ( <div className="col-xl-4 col-lg-6">
              <div className="d-flex justify-content-center  my-3 mx-1">
      <div className="card p-3 bg-white border-0 shadow rounded-4 w-100">
      <div className="  d-flex flex-row align-items-center ">
          <div className="about-product text-center">
              <img className='img-fluid rounded-4' src="./img/workouttrainer/home/Rectangle 148438 (2).png" width="80" height='80' />
          </div>
          <div className="stats  flex-grow-1">
              <div className="px-3">
              <div className=" p-price ">
                  <Link to='/trainercoursedetails' style={{ textDecoration: 'none', color:'black' }}>
                      <h6 className="mb-0"><b>Squat Management Exercise</b></h6>
                  </Link>
                  
                  </div>
                  <div className=" p-price mt-2">
                      <span style={{color:'#7F7F7F'}}>12 minutes | Intermediate</span>
                      
                  </div>
              </div>
          </div>
          
      </div>
      <div className='border-bottom border-top my-3'>
        <div className="d-flex justify-content-between p-price mt-3">
        <div class="d-flex flex-start ">
        <a class="me-3" href="#">
                        <img class="rounded-circle shadow-1-strong mb-3"
                          src="./img/user/profile/profile.png" alt="avatar"
                          width="48" height="48" />
                      </a>
                      
                            <p class="my-2">
                            <b>John Duo</b>
                            </p>
                          
                    </div>
                    
            </div>

    </div>
    <div className="d-flex justify-content-center">
                            <button className="btn mx-2 rounded-pill my-1 w-100" style={{ height: '48px', width: '100px', backgroundColor:'#1D191C1A',color:'#1D191C' }}><b>Reject</b></button>
                            <button className="btn btn-dark rounded-pill mx-2 my-1 w-100" style={{ height: '48px', width: '100px' }}>Accept</button>
                        </div>
      </div>
      
  </div>
              </div>))}
            </div>
          </div>
          <Link to='/trainercreateworkout' className="plus-img">
          <img className='img-fluid' src="./img/courseinstructor/home/plusimg.png" alt="plus" />
        </Link>
        </div>
        
      </div>
    </div>
  </>
  )
}

export default TrainerHome