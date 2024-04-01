import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './instructorhome.css';
import InstructorSidebar from './InstructorSidebar';
import InstructoreHeader from './InstructoreHeader';
const InstructorCreateCourseDetails = () => {
    const navigate = useNavigate();
    const handleContinue =() =>{
      navigate('/instructorhome')
    }
    const handleCourseCreateSuccessful = () => {
        setShowModal(true);
        // Perform payment processing logic here
    };
  
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        let timer;
        if (showModal) {
          timer = setTimeout(() => {
            handleContinue();
          }, 2000);
        }
        return () => clearTimeout(timer);
      }, [showModal]);
      
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
              <h3 className='fw-bold'>Create Course</h3>
              <div className="row clearfix mt-3">
              <div className=" col-lg-6 col-md-6 col-12">
              <div className=" single_post ">
                    <div className="px-md-4 ">
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
    <div className='mt-4 mb-5'>
                    <button className='btn rounded-pill px-5 py-3 shadow w-100'  onClick={(e) => { e.preventDefault(); handleCourseCreateSuccessful(); }} style={{backgroundColor:'#1D191C', color:'white'}}>Continue</button>
                    </div>
                    {showModal && (
                    <div className="modal show" id="paymentModal" tabIndex="-1" aria-labelledby="paymentModalLabel" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog " style={{marginTop: '5%'}}>
                        <div className="modal-content my-1">
                            {/* <div className="modal-header">
                                <h5 className="modal-title" id="paymentModalLabel">Payment Successful</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
                            </div> */}
                            <div className="modal-body text-center">
                                
                                <img src="./img/courses/coursepayment/coursepaymentsuccessfull.png" alt="" height='100' width='100'/>
                                <h4 className='my-3'><b>Course Created Successful!</b></h4>
                                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate placerat porta. Ut commodo nulla vitae eleifend sodales. Fusce ornare.</h6>
                            </div>
                            {/* <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                            </div> */}
                        </div>
                    </div>
                </div>
                
                )}
                    </div>                        
                </div>
        </div>
            <div className="col-lg-5 col-md-5 col-12 left-box">
                
                
                
            </div>
        
        </div>
            </div>
          
          </div>
          
        </div>
      </div>
    
    </>
  )
}

export default InstructorCreateCourseDetails