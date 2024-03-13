import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const WorkoutDetails = () => {

    const navigate = useNavigate();
  const courseenroll =() =>{
    navigate('/coursepayment')
  }
  return (
    <>
    <div class="container-fluid">
    <div class="row my-4">
    <div class="col-md-5 col-12 ">
        <div class="banner-container">
            <h1 class="banner-employes ">Yoga Body Stretching</h1>
            <div class="banner-employes-underline"></div>
        </div>
        <h5 class="banner-employes "> for Absolute Beginners</h5>
    </div>
<div className="col-md-5 col-12 mx-auto">
<h5 class="text-secondary mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur. adipi elit, sed do eiusmod tempor incididunt ut labore consectetur.</h5>

</div>
</div>

</div>
<div  class="blog-page">
    <div class="container-fluid">
        <div class="row clearfix">
            <div class="col-lg-7 col-md-7 col-12 left-box">
                <div class=" single_post ">
                    <div class="">
                    <div className="px-md-4 coursedetailsmidborder">
                    <div class="img-post">
    <img class="d-block img-fluid w-100" src="./img/courses/workoutdetails/workoutdetail.png" alt="First slide"/>
</div>
<div className=" eighteenfont my-2 "><span  style={{ textDecoration: 'none',color:'black' }}><b>Yoga Body Stretching for Absolute Beginners (Zero to Hero)</b></span>

                                        </div>
                                        <div className=" p-price mt-3"><span><b>$48</b></span></div>
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
                                        
                                        <div className="row">
                                          <div className="col-md-6">
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
<div className="col-md-6">
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
<div className="col-md-6">
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
<div className="col-md-6">
                                          <div className="d-flex justify-content-center  mt-3 ">
        <div className="card   border-0 rounded-4 d-flex flex-row align-items-center w-100" style={{backgroundColor:'#1D191C1A'}}>
            <div className="">
                <img className='img-fluid rounded-start-4' src="./img/courses/workoutdetails/Rectangle 148441 (3).png" width="124" height='130' />
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
<div className="col-md-6">
                                          <div className="d-flex justify-content-center  mt-3 ">
        <div className="card   border-0 rounded-4 d-flex flex-row align-items-center w-100" style={{backgroundColor:'#1D191C1A'}}>
            <div className="">
                <img className='img-fluid rounded-start-4' src="./img/courses/workoutdetails/Rectangle 148441 (4).png" width="124" height='130' />
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
<div className="col-md-6">
                                          <div className="d-flex justify-content-center  mt-3 ">
        <div className="card   border-0 rounded-4 d-flex flex-row align-items-center w-100" style={{backgroundColor:'#1D191C1A'}}>
            <div className="">
                <img className='img-fluid rounded-start-4' src="./img/courses/workoutdetails/Rectangle 148441 (5).png" width="124" height='130' />
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
                    </div>
    
    
    
    
    <div className='mt-4 mb-5 col-md-5 mx-3'>
                    <button className='btn rounded-pill px-5 py-3 shadow w-100' onClick={courseenroll} style={{backgroundColor:'#1D191C', color:'white'}}>Enroll Course</button>
                    </div>
                    </div>                        
                </div>
                
                
            </div>
        <div className="col-lg-5 col-md-5 col-12">
        <section class="" >
  <div class="container-fluid">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="">

        
          <div class=" text-center">
            <div class="mt-3 mb-2">
              <img src="./img/courses/workoutdetails/Ellipse 2328.png"
                class="rounded-circle img-fluid" height='80' width='80' />
            </div>
            <h6 class=""><b>Arnold Strong</b></h6>
            <p className='text-secondary'>GYM Trainer</p>
            <div class="d-flex justify-content-center text-center mt-3 mb-2 text-secondary">
              <div class="px-3 " style={{ borderRight:"1px solid #E2E2E2"}}>
                <p class="mb-2 h5">25</p>
                <p class="text-muted mb-0">Courses</p>
              </div>
              <div class="px-3">
                <p class="mb-2 h5">22,253</p>
                <p class="text-muted mb-0">Students</p>
              </div>
             
            </div>
           
            <div className="col-md-7 mx-auto mb-3 ">
            <button type="button" class="btn btn-primary rounded-pill btn-info btn-lg w-100 py-3 shadow" style={{fontSize:'16px', fontWeight:'500'}}>
            Chat with Instructor
            </button>
            </div>
            
          </div>
          <span className='eighteenfont '><b>About Instructor</b></span>
          <p className='text-secondary my-2'>Lorem ipsum dolor sit amet, consectetur adipi el sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur.</p>
          
          <div className='mt-3'>
          <span className='eighteenfont '><b>Workout Session</b></span>
          </div>
          
            <div className=" my-3">
    <div className="col-md-10 mx-auto">
    <div className="workout-card" >
              <div className="workout-card-image" style={{ backgroundImage: "url('./img/workout/workout1.png')" }}>
                {/* <div className="workout-card-category">City</div> */}
              <div className="workout-card-description">
                <h2>Squat Management Exercise</h2>
                <p>12 minutes | Intermediate</p>
              </div>
              {/* <img className="workout-card-user workout-card-avatar workout-card-avatar-large" src="https://github.com/lewagon/bootstrap-challenges/blob/master/11-Airbnb-search-form/images/anne.jpg?raw=true" alt="User" /> */}
              <Link className="workout-card-link" to='/workoutdetails'></Link>
              </div>
            </div>
            <div className="workout-card" >
              <div className="workout-card-image" style={{ backgroundImage: "url('./img/courses/workoutdetails/Rectangle 148438.png')" }}>
                {/* <div className="workout-card-category">City</div> */}
              <div className="workout-card-description">
                <h2>Squat Management Exercise</h2>
                <p>12 minutes | Intermediate</p>
              </div>
              {/* <img className="workout-card-user workout-card-avatar workout-card-avatar-large" src="https://github.com/lewagon/bootstrap-challenges/blob/master/11-Airbnb-search-form/images/anne.jpg?raw=true" alt="User" /> */}
              <Link className="workout-card-link" to='/workoutdetails'></Link>
              </div>
            </div>
            <div className="workout-card" >
              <div className="workout-card-image" style={{ backgroundImage: "url('./img/courses/workoutdetails/Rectangle 148438 (1).png')" }}>
                {/* <div className="workout-card-category">City</div> */}
              <div className="workout-card-description">
                <h2>Squat Management Exercise</h2>
                <p>12 minutes | Intermediate</p>
              </div>
              {/* <img className="workout-card-user workout-card-avatar workout-card-avatar-large" src="https://github.com/lewagon/bootstrap-challenges/blob/master/11-Airbnb-search-form/images/anne.jpg?raw=true" alt="User" /> */}
              <Link className="workout-card-link" to='/workoutdetails'></Link>
              </div>
            </div>
    </div>

          

        </div>

      </div>
    </div>
  </div>
</section>
        </div>
        </div>
    </div>
</div>

    </>
  )
}

export default WorkoutDetails