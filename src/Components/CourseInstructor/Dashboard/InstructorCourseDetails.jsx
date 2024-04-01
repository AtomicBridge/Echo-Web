import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './instructorhome.css';
import InstructorSidebar from './InstructorSidebar';
import InstructoreHeader from './InstructoreHeader';
const InstructorCourseDetails = () => {
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
              <div className="row clearfix">
              <div className="col-lg-5 col-md-5 col-12">
        <section className="" >
  <div className="mx-3">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="">

    
          
            <div className=" my-3">
    <div className="col-md-12">
    <div className="d-flex justify-content-center  mt-3 ">
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
                    <div>
                    <span className="badge py-2" style={{ fontSize: '10px', background: 'rgba(29, 25, 28, 0.1)', color: 'black', padding: '5px 10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginLeft: '10px' }}>
                        Beginners
                    </span>
                    </div>
                    </div>
                    <div className="d-flex justify-content-between p-price mt-3">
                        <span style={{fontSize:'13px'}}><b>$48</b> <del style={{fontSize:'12px'}}>$60</del></span>
                        <span style={{fontSize:'14px'}}><b>3 Month Course</b></span>
                    </div>
                </div>
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
            <div className="col-lg-7 col-md-7 col-12 left-box">
                <div className=" single_post ">
                    <div className="px-md-4 instructorcoursedetailsmidborder">
                    <div className=" ">
                    <div className="img-post">
    <img className="d-block img-fluid w-100" src="./img/courses/coursedetails/coursedetail.png" alt="First slide"/>
</div>
<div className="d-flex justify-content-between eighteenfont my-2 "><span  style={{ textDecoration: 'none',color:'black' }}><b>UI UX Design</b></span>
<div>
<span className="badge py-2" style={{ fontSize: '14px', background: 'rgba(29, 25, 28, 0.1)', color: 'black', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                                            Beginners
                                        </span>
</div>
                                        </div>
                                        <div className="d-flex justify-content-between p-price mt-3"><span><b>$48</b></span><span><b>3 Month Course</b></span></div>
                                        <div className="d-flex flex-wrap justify-content-start my-4 border-bottom">
      <div className='col-md-5  my-2'>
        <div className="d-flex justify-content-start">
        <i className="fa-solid fa-users fa-lg mt-2"></i>
        <p className='mx-2'>8,289 Students</p>
        </div>
      </div>
      <div className='col-md-5  my-2'>
        <div className="d-flex justify-content-start">
        <i className="fa-solid fa-clock fa-lg  mt-2"></i>
        <p className='mx-2'>3 Month Course</p>
        </div>
      </div>
    </div>
    <div className='border-bottom my-2'>
        <h6 className='eighteenfont'><b>Course Description</b></h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec orci lacinia orci fermentum dapibus id sit amet ligula. Phasellus in placerat leo. Sed ut lorem volutpat, faucibus velit quis, convallis eros. Vestibulum tempor, erat a pulvinar gravida.</p>
    </div>
    <div className='border-bottom my-2'>
        <h6 className='eighteenfont'><b>Course Objective</b></h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec orci lacinia orci fermentum dapibus id sit amet ligula. Phasellus in placerat leo. Sed ut lorem volutpat, faucibus velit quis, convallis eros. Vestibulum tempor, erat a pulvinar gravida.</p>
    </div>
    <div className='border-bottom my-3'>
        <h6 className='eighteenfont'><b>Digital Book</b></h6>
        <div className="d-flex justify-content-between p-price mt-3">
        <div className="d-flex flex-start ">
                      <a className="me-3" href="#">
                        <img className="rounded shadow-1-strong mb-3"
                          src="./img/courses/coursedetails/digitalbook.png" alt="avatar"
                          width="60" height="60" />
                      </a>
                      <div className="flex-grow-1 flex-shrink-1">
                        <div>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-1">
                            <b>Basic of UI/UX Design for...</b>
                            </p>
                          </div>
                          <span><b>$100.00</b></span>
                        </div>
                      </div>
                    </div>
                    {/* <div className='mt-2'>
                    <button className='btn rounded-pill px-5 py-2 shadow'  style={{backgroundColor:'#1D191C', color:'white'}}>Buy Now</button>
                    </div> */}
            </div>

    </div>
                    </div>
    
    <div className='border-bottom my-3'>
        <h6 className='eighteenfont'><b>Course Assignment</b></h6>
        <div className="d-flex justify-content-between p-price mt-3">
        <div className="d-flex flex-start ">
                      <a className="me-3" href="#">
                        <img className="rounded shadow-1-strong mb-3"
                          src="./img/courses/coursedetails/courseassignment.png" alt="avatar"
                          width="60" height="60" />
                      </a>
                      
                            <p className="my-3">
                            <b>Basic of UI/UX Design for Beginners</b>
                            </p>
                          
                    </div>
                    
            </div>

    </div>
    <div className='border-bottom my-3'>
        <h6 className='eighteenfont'><b>Course Quiz</b></h6>
        <div className="d-flex justify-content-between p-price mt-3">
        <div className="d-flex flex-start ">
                      <a className="me-3" href="#">
                        <img className="rounded shadow-1-strong mb-3"
                          src="./img/courses/coursedetails/coursequiz.png" alt="avatar"
                          width="60" height="60" />
                      </a>
                      
                            <p className="my-3">
                            <b>Basic of UI/UX Design for Beginners</b>
                            </p>
                          
                    </div>
                    
            </div>

    </div>
    <div className=' my-3'>
        <h6 className='eighteenfont'><b>Course Content</b></h6>
        <div className="my-3 py-2 shadow rounded-2">
    <div className="d-flex justify-content-between align-items-center px-3 py-1">
        <div className="d-flex flex-start">
            <p className="m-0"><b>Why Using Figma</b></p>
        </div>
        <div>
        <i className="fa-solid fa-circle-play fa-lg"></i>
        </div>
    </div>
</div>
<div className="my-3 py-2 shadow rounded-2">
    <div className="d-flex justify-content-between align-items-center px-3 py-1">
        <div className="d-flex flex-start">
            <p className="m-0"><b>Why Using Figma</b></p>
        </div>
        <div>
        <i className="fa-solid fa-circle-play fa-lg"></i>
        </div>
    </div>
</div>
<div className="my-3 py-2 shadow rounded-2">
    <div className="d-flex justify-content-between align-items-center px-3 py-1">
        <div className="d-flex flex-start">
            <p className="m-0"><b>Why Using Figma</b></p>
        </div>
        <div>
        <i className="fa-solid fa-circle-play fa-lg"></i>
        </div>
    </div>
</div>
<div className="my-3 py-2 shadow rounded-2">
    <div className="d-flex justify-content-between align-items-center px-3 py-1">
        <div className="d-flex flex-start">
            <p className="m-0"><b>Why Using Figma</b></p>
        </div>
        <div>
        <i className="fa-solid fa-circle-play fa-lg"></i>
        </div>
    </div>
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

export default InstructorCourseDetails