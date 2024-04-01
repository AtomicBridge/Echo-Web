import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./coursedetails.css";
const CourseDetails = () => {
  const navigate = useNavigate();
  const courseenroll =() =>{
    navigate('/coursepayment')
  }
  return (
    <>
    <div className="container-fluid">
    <div className="row my-4">
    <div className="col-md-5 col-12 ">
        <div className="banner-container">
            <h1 className="banner-employes ">UI UX Designer Course</h1>
            <div className="banner-employes-underline"></div>
        </div>
        <h5 className="banner-employes "> for Absolute Beginners</h5>
    </div>
<div className="col-md-5 col-12 mx-auto">
<h5 className="text-secondary mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur. adipi elit, sed do eiusmod tempor incididunt ut labore consectetur.</h5>

</div>
</div>

</div>
<div  className="blog-page">
    <div className="container-fluid">
        <div className="row clearfix">
            <div className="col-lg-7 col-md-7 col-12 left-box">
                <div className=" single_post ">
                    <div className="">
                    <div className="px-md-4 coursedetailsmidborder">
                    <div className="img-post">
    <img className="d-block img-fluid w-100" src="./img/courses/coursedetails/coursedetail.png" alt="First slide"/>
</div>
<div className="d-flex justify-content-between eighteenfont my-2 "><span  style={{ textDecoration: 'none',color:'black' }}><b>UI UX Design Course for Absolute Beginners (Zero to Hero)</b></span>
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
                    <div className='mt-2'>
                    <button className='btn rounded-pill px-5 py-2 shadow' onClick={courseenroll} style={{backgroundColor:'#1D191C', color:'white'}}>Buy Now</button>
                    </div>
            </div>

    </div>
                    </div>
    <div className='border-bottom my-3'>
        <h6 className='eighteenfont'><b>Course Instructor</b></h6>
        <div className="d-flex justify-content-between p-price mt-3">
        <div className="d-flex flex-start ">
                      <a className="me-3" href="#">
                        <img className="rounded-circle shadow-1-strong mb-3"
                          src="./img/courses/coursedetails/courseinstructor.png" alt="avatar"
                          width="60" height="60" />
                      </a>
                      <div className="flex-grow-1 flex-shrink-1">
                        <div>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-1">
                            <b>Jonathan Williams</b>
                            </p>
                          </div>
                          <span>Senior 3D Designer at Google</span>
                        </div>
                      </div>
                    </div>
                    <div className='mt-2'>
                    <i className="fa-solid fa-comment-dots fa-xl"></i>
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
    <div className='mt-4 mb-5 col-md-5'>
                    <button className='btn rounded-pill px-5 py-3 shadow w-100' onClick={courseenroll} style={{backgroundColor:'#1D191C', color:'white'}}>Enroll Course</button>
                    </div>
                    </div>                        
                </div>
                
                
            </div>
        <div className="col-lg-5 col-md-5 col-12">
        <section className="" >
  <div className="container-fluid">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="">

        
          <div className=" text-center">
            <div className="mt-3 mb-2">
              <img src="./img/courses/coursedetails/courseinstructor.png"
                className="rounded-circle img-fluid" height='80' width='80' />
            </div>
            <h6 className=""><b>Jonatham William</b></h6>
            <p className='text-secondary'>Senior 3D Designer at Google</p>
            <div className="d-flex justify-content-center text-center mt-3 mb-2 text-secondary">
              <div className="px-3 " style={{ borderRight:"1px solid #E2E2E2"}}>
                <p className="mb-2 h5">22</p>
                <p className="text-muted mb-0">Courses</p>
              </div>
              <div className="px-3">
                <p className="mb-2 h5">22,253</p>
                <p className="text-muted mb-0">Students</p>
              </div>
             
            </div>
           
            <div className="col-md-7 mx-auto mb-3 ">
            <button type="button" className="btn btn-primary rounded-pill btn-info btn-lg w-100 py-3 shadow" style={{fontSize:'16px', fontWeight:'500'}}>
            Chat with Instructor
            </button>
            </div>
            
          </div>
          <span className='eighteenfont '><b>About Instructor</b></span>
          <p className='text-secondary my-2'>Lorem ipsum dolor sit amet, consectetur adipi el sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur.</p>
          <div className='my-4' style={{color:'#1D191C'}}>
          <p><i className="fa-brands fa-whatsapp fa-xl" style={{ marginRight:'15px'}}></i>https://www.webwhatsapp.com/ECHO</p>
          <p><i className="fa-brands fa-facebook fa-xl" style={{ marginRight:'15px'}}></i>https://www.facebook.com/ECHO</p>
          <p><i className="fa-brands fa-twitter fa-xl" style={{ marginRight:'15px'}}></i>https://www.twitter.com/ECHO</p>
          <p><i className="fa-brands fa-instagram fa-xl" style={{ marginRight:'15px'}}></i>https://www.instagram.com/ECHO</p>
          <p><i className="fa-solid fa-globe fa-xl" style={{ marginRight:'15px'}}></i>https://www.echo.com</p>

          </div>
          <span className='eighteenfont '><b>Courses</b></span>
          
            <div className=" my-3">
    <div className="col-md-10">
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
    <div className="d-flex justify-content-center  mt-3 ">
        <div className="card p-3 bg-white border-0 shadow rounded-4 d-flex flex-row align-items-center w-100">
            <div className="about-product text-center">
                <img className='img-fluid rounded-4' src="./img/courses/coursedetails/Rectangle 148464 (1).png" width="80" height='80' />
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
        </div>
    </div>
</div>

    </>
  )
}

export default CourseDetails