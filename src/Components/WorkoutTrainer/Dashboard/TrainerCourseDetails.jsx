import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InstructorSidebar from '../../CourseInstructor/Dashboard/InstructorSidebar';
import InstructoreHeader from '../../CourseInstructor/Dashboard/InstructoreHeader';
import '../../CourseInstructor/Dashboard/instructorhome.css';

const TrainerCourseDetails = () => {
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
              <div class="row clearfix">
              <div className="col-lg-5 col-md-5 col-12">
        <section class="" >
  <div class="mx-3">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="">

    
          
            <div className=" my-3">
    <div className="col-md-12">
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
    
    </div>

          

        </div>

      </div>
    </div>
  </div>
</section>
        </div>
            <div class="col-lg-7 col-md-7 col-12 left-box">
                <div class=" single_post ">
                    <div class="px-md-4 instructorcoursedetailsmidborder">
                    <div className="text-center h-custom-2  mt-4">
                <img src="./img/user/profile/profile.png" alt="avatar" className="rounded-circle img-fluid mt-md-3" style={{ width: '120px', height:'120px' }} />
                <h5 className="mt-3 mb-2 eighteenfont"><b>John Duo</b></h5>
                <p className=" mb-1"><i class="fa-solid fa-location-dot fa-lg mx-2"></i>Time Square NYC, Ney York USA.</p>
                <div className='border-bottom col-md-11 mx-auto my-4'></div>
                </div>
                <div className="col-md-11 mx-auto">
                <p className='fw-bold eighteenfont'>Personal Info</p>
                <div className="row">
                <div className="col-md-6">
<div>
<p><b>Gender</b></p>
<p className='text-muted'>Male</p>
</div>
<div>
<p><b>Weight</b></p>
<p className='text-muted'>72kg</p>
</div>
<div>
<p><b>Goal</b></p>
<p className='text-muted'>Build Muscles, Improve Fitness</p>
</div>
                </div>
                <div className="col-md-6">
                <div>
<p><b>Age</b></p>
<p className='text-muted'>27 years</p>
</div>
<div>
<p><b>Height</b></p>
<p className='text-muted'>172 cm</p>
</div>
<div>
<p><b>Physical Activity Level</b></p>
<p className='text-muted'>Intermediate</p>
</div>
                </div>
                </div>
                <div className="d-flex justify-content-center">
                            <button className="btn mx-2 rounded-pill my-1 w-100" style={{ height: '60px', width: '100px', backgroundColor:'#1D191C1A',color:'#1D191C' }}><b>Reject</b></button>
                            <button className="btn btn-dark rounded-pill mx-3 my-1 w-100" style={{ height: '60px' }}>Accept</button>
                        </div>
                </div>
    {/* <div className='mt-4 mb-5 col-md-5'>
                    <button className='btn rounded-pill px-5 py-3 shadow w-100'  style={{backgroundColor:'#1D191C', color:'white'}}>Enroll Course</button>
                    </div> */}
                    </div>                        
                </div>
                
                
            </div>
        
        </div>
            </div>
          
          </div>
          
        </div>
      </div>
    </>
  )
}

export default TrainerCourseDetails