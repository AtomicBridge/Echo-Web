import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './instructorhome.css';
import InstructorSidebar from './InstructorSidebar';
import InstructoreHeader from './InstructoreHeader';
const InstructorProgressTracking = () => {
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
              <h3 className='fw-bold'>Progress Tracking</h3>
              <div className='row'>
              {[...Array(18)].map((_, index) => ( <div className="col-xl-4 col-lg-6">
                <div className="d-flex justify-content-center  my-3 mx-1">
        <div className="card p-3 bg-white border-0 shadow rounded-4 d-flex flex-row align-items-center w-100">
            <div className="about-product text-center">
                <img className='img-fluid rounded-4' src="./img/courses/coursedetails/Rectangle 148464.png" width="80" height='80' />
            </div>
            <div className="stats  flex-grow-1">
                <div className="px-3">
                <div className="d-flex justify-content-between p-price ">
                    <Link to='/coursedetails' style={{ textDecoration: 'none', color:'black' }}>
                        <h6 className="mb-0"><b>UI/UX Designer Course</b></h6>
                    </Link>
                    <div className='d-flex justify-content-center'>
                    <div>
                    <span className="badge py-2 mx-4" style={{ fontSize: '10px', background: 'rgba(29, 25, 28, 0.1)', color: 'black', padding: '5px 10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                        Beginners 
                    </span>
                    </div>
                    <div className='mt-1'>
                    <i class="fa-solid fa-xl  fa-ellipsis-vertical"></i>

                    </div>
                    </div>
                    </div>
                    <div className="d-flex justify-content-between p-price mt-3">
                        <span style={{fontSize:'13px'}}><b>$48</b></span>
                        <span style={{fontSize:'14px'}}><b>3 Month Course</b></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
                </div>))}
              </div>
            </div>
            <div className="plus-img">
            <img className='img-fluid' src="./img/courseinstructor/home/plusimg.png" alt="plus" />
          </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default InstructorProgressTracking