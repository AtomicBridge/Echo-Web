import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../CourseInstructor/Dashboard/instructorhome.css';
import InstructoreHeader from '../../CourseInstructor/Dashboard/InstructoreHeader'
import InstructorSidebar from '../../CourseInstructor/Dashboard/InstructorSidebar'

const TrainerCreateWorkoutDetails = () => {
    const navigate = useNavigate();
    const handleContinue =() =>{
      navigate('/trainerhome')
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
      <div className="row " style={{marginBottom:'5%'}}>
        {/* Sidebar */}
        <InstructorSidebar/>
        {/* Main Content */}
        <div className="col-md-10">
          <InstructoreHeader/>
          <div className='container-fluid my-4'>
            <h3 className='fw-bold'>Create Workout Plan</h3>
            <div className='row'>
           <div className="col-md-6 col-12 ">
           <div class=" single_post ">
                    <div class="">
                    <div className=" mt-3">
                    <div class="img-post">
    <img class="d-block img-fluid w-100" src="./img/courses/workoutdetails/workoutdetail.png" alt="First slide"/>
</div>
<div className="d-flex justify-content-between">
<div className=" eighteenfont my-2 "><h5  style={{ textDecoration: 'none',color:'black' }}><b>Yoga Body Stretching</b></h5>

</div>
<div className=" p-price mt-3"><h6><b>$48.00</b></h6></div>
</div>
                                        <div className="d-flex justify-content-start  border-bottom">
                                        <div>
<span className="badge py-2 my-3 px-3 mx-1 rounded-pill" style={{ fontSize: '12px', background: 'rgba(29, 25, 28, 0.1)', color: 'black', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <span className='py-1'>Beginners</span>
                                        </span>
</div>
<div>
<span className="badge py-2 my-3 px-3 mx-1 rounded-pill" style={{ fontSize: '12px', background: 'rgba(29, 25, 28, 0.1)', color: 'black', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <span className='py-1'><i className="fa-solid fa-circle-play fa-lg mx-1"></i>10 workout</span>
                                        </span>
</div>
<div>
<span className="badge py-2 my-3 px-3 mx-1 rounded-pill" style={{ fontSize: '12px', background: 'rgba(29, 25, 28, 0.1)', color: 'black', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span className='py-1'><i className="fa-solid fa-clock fa-lg mx-1"></i>10 minutes</span>
                                        </span>
</div>
                                        </div>
                                        
                                      
                                          <div className="col-md-12">
                                          <div className="d-flex justify-content-center  mt-3 ">
        <div className="card   border-0 rounded-4 d-flex flex-row align-items-center w-100" style={{backgroundColor:'#1D191C1A'}}>
            <div className="">
                <img className='img-fluid rounded-start-4' src="./img/courses/workoutdetails/Rectangle 148441.png" width="124" height='130' />
            </div>
            <div className="stats  flex-grow-1">
                <div className="px-3">
                
                    <Link to='/workoutstart' style={{ textDecoration: 'none', color:'black' }}>
                        <h5 className="my-3"><b>Warrior 1</b></h5>
                    </Link>
                    
                    
                    <p className='text-secondary'>30 seconds</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="col-md-12">
                                          <div className="d-flex justify-content-center  mt-3 ">
        <div className="card   border-0 rounded-4 d-flex flex-row align-items-center w-100" style={{backgroundColor:'#1D191C1A'}}>
            <div className="">
                <img className='img-fluid rounded-start-4' src="./img/courses/workoutdetails/Rectangle 148441 (1).png" width="124" height='130' />
            </div>
            <div className="stats  flex-grow-1">
                <div className="px-3">
                
                    <Link to='/workoutstart' style={{ textDecoration: 'none', color:'black' }}>
                        <h5 className="my-3"><b>Stark Pose</b></h5>
                    </Link>
                    
                    
                    <p className='text-secondary'>30 seconds</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="col-md-12">
                                          <div className="d-flex justify-content-center  mt-3 ">
        <div className="card   border-0 rounded-4 d-flex flex-row align-items-center w-100" style={{backgroundColor:'#1D191C1A'}}>
            <div className="">
                <img className='img-fluid rounded-start-4' src="./img/courses/workoutdetails/Rectangle 148441 (2).png" width="124" height='130' />
            </div>
            <div className="stats  flex-grow-1">
                <div className="px-3">
                
                    <Link to='/workoutstart' style={{ textDecoration: 'none', color:'black' }}>
                        <h5 className="my-3"><b>Side Plank</b></h5>
                    </Link>
                    
                    
                    <p className='text-secondary'>30 seconds</p>
                </div>
            </div>
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
           
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  </>
  )
}

export default TrainerCreateWorkoutDetails