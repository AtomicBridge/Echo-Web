import React from 'react'
import { Link } from 'react-router-dom'

const PopularCourses = () => {
  return (
    <>
    <div class="col-md-6 col-12 ">
        <div class="banner-container">
            <h1 class="banner ">Popular Courses for you</h1>
            <div class="banner-underline"></div>
        </div>
<h5 class="text-secondary mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur.  </h5>
       
    

</div>



                {/* <div className="jumbotron">
  <div className="container text-center">
    <h1>My Portfolio</h1>      
    <p>Some text that represents "Me"...</p>
  </div>
</div>
   */}
                <div className=" bg-3 text-center">

                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="d-flex justify-content-center container mt-5">
                                <div className="card p-3 bg-white border-0 shadow rounded-4">
                                    <div className="about-product text-center "><img className='img-fluid' src="./img/courses/Rectangle 15.png" width="300" />
                                        {/* <div>
                    <h4>Believing is seeing</h4>
                    <h6 className="mt-0 text-black-50">Apple pro display XDR</h6>
                </div> */}
                                    </div>
                                    <div className="stats mt-2">
                                        <div className="d-flex justify-content-between p-price my-2"><Link to='/coursedetails' style={{ textDecoration: 'none',color:'black' }}><b>UI/UX Designer Course</b></Link><span className="badge" style={{ fontSize: '10px', background: 'rgba(29, 25, 28, 0.1)', color: 'black', padding: '5px 10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                                            Beginners
                                        </span>
                                        </div>
                                        <div className="d-flex justify-content-between p-price mt-3"><span><b>$48</b></span><span><b>3 Month Course</b></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="d-flex justify-content-center container mt-5">
                                <div className="card p-3 bg-white border-0 shadow rounded-4">
                                    <div className="about-product text-center "><img className='img-fluid' src="./img/courses/Rectangle 15.png" width="300" />
                                        {/* <div>
                    <h4>Believing is seeing</h4>
                    <h6 className="mt-0 text-black-50">Apple pro display XDR</h6>
                </div> */}
                                    </div>
                                    <div className="stats mt-2">
                                        <div className="d-flex justify-content-between p-price my-2"><Link to='/coursedetails' style={{ textDecoration: 'none',color:'black' }}><b>UI/UX Designer Course</b></Link><span className="badge" style={{ fontSize: '10px', background: 'rgba(29, 25, 28, 0.1)', color: 'black', padding: '5px 10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                                            Beginners
                                        </span>
                                        </div>
                                        <div className="d-flex justify-content-between p-price mt-3"><span><b>$48</b></span><span><b>3 Month Course</b></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="d-flex justify-content-center container mt-5">
                                <div className="card p-3 bg-white border-0 shadow rounded-4">
                                    <div className="about-product text-center "><img className='img-fluid' src="./img/courses/Rectangle 15 (1).png" width="300" />
                                        {/* <div>
                    <h4>Believing is seeing</h4>
                    <h6 className="mt-0 text-black-50">Apple pro display XDR</h6>
                </div> */}
                                    </div>
                                    <div className="stats mt-2">
                                        <div className="d-flex justify-content-between p-price my-2"><Link to='/coursedetails' style={{ textDecoration: 'none',color:'black' }}><b>UI/UX Designer Course</b></Link><span className="badge" style={{ fontSize: '10px', background: 'rgba(29, 25, 28, 0.1)', color: 'black', padding: '5px 10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                                            Beginners
                                        </span>
                                        </div>
                                        <div className="d-flex justify-content-between p-price mt-3"><span><b>$48</b></span><span><b>3 Month Course</b></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="d-flex justify-content-center container mt-5">
                                <div className="card p-3 bg-white border-0 shadow rounded-4">
                                    <div className="about-product text-center "><img className='img-fluid' src="./img/courses/Rectangle 15 (2).png" width="300" />
                                        {/* <div>
                    <h4>Believing is seeing</h4>
                    <h6 className="mt-0 text-black-50">Apple pro display XDR</h6>
                </div> */}
                                    </div>
                                    <div className="stats mt-2">
                                        <div className="d-flex justify-content-between p-price my-2"><Link to='/coursedetails' style={{ textDecoration: 'none',color:'black' }}><b>UI/UX Designer Course</b></Link><span className="badge" style={{ fontSize: '10px', background: 'rgba(29, 25, 28, 0.1)', color: 'black', padding: '5px 10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                                            Beginners
                                        </span>
                                        </div>
                                        <div className="d-flex justify-content-between p-price mt-3"><span><b>$48</b></span><span><b>3 Month Course</b></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="d-flex justify-content-center container mt-5">
                                <div className="card p-3 bg-white border-0 shadow rounded-4">
                                    <div className="about-product text-center "><img className='img-fluid' src="./img/courses/Rectangle 15 (1).png" width="300" />
                                        {/* <div>
                    <h4>Believing is seeing</h4>
                    <h6 className="mt-0 text-black-50">Apple pro display XDR</h6>
                </div> */}
                                    </div>
                                    <div className="stats mt-2">
                                        <div className="d-flex justify-content-between p-price my-2"><Link to='/coursedetails' style={{ textDecoration: 'none',color:'black' }}><b>UI/UX Designer Course</b></Link><span className="badge" style={{ fontSize: '10px', background: 'rgba(29, 25, 28, 0.1)', color: 'black', padding: '5px 10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                                            Beginners
                                        </span>
                                        </div>
                                        <div className="d-flex justify-content-between p-price mt-3"><span><b>$48</b></span><span><b>3 Month Course</b></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="d-flex justify-content-center container mt-5">
                                <div className="card p-3 bg-white border-0 shadow rounded-4">
                                    <div className="about-product text-center "><img className='img-fluid' src="./img/courses/Rectangle 15 (2).png" width="300" />
                                        {/* <div>
                    <h4>Believing is seeing</h4>
                    <h6 className="mt-0 text-black-50">Apple pro display XDR</h6>
                </div> */}
                                    </div>
                                    <div className="stats mt-2">
                                        <div className="d-flex justify-content-between p-price my-2"><Link to='/coursedetails' style={{ textDecoration: 'none',color:'black' }}><b>UI/UX Designer Course</b></Link><span className="badge" style={{ fontSize: '10px', background: 'rgba(29, 25, 28, 0.1)', color: 'black', padding: '5px 10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                                            Beginners
                                        </span>
                                        </div>
                                        <div className="d-flex justify-content-between p-price mt-3"><span><b>$48</b></span><span><b>3 Month Course</b></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="d-flex justify-content-center container mt-5">
                                <div className="card p-3 bg-white border-0 shadow rounded-4">
                                    <div className="about-product text-center "><img className='img-fluid' src="./img/courses/Rectangle 15.png" width="300" />
                                        {/* <div>
                    <h4>Believing is seeing</h4>
                    <h6 className="mt-0 text-black-50">Apple pro display XDR</h6>
                </div> */}
                                    </div>
                                    <div className="stats mt-2">
                                        <div className="d-flex justify-content-between p-price my-2"><Link to='/coursedetails' style={{ textDecoration: 'none',color:'black' }}><b>UI/UX Designer Course</b></Link><span className="badge" style={{ fontSize: '10px', background: 'rgba(29, 25, 28, 0.1)', color: 'black', padding: '5px 10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                                            Beginners
                                        </span>
                                        </div>
                                        <div className="d-flex justify-content-between p-price mt-3"><span><b>$48</b></span><span><b>3 Month Course</b></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="d-flex justify-content-center container mt-5">
                                <div className="card p-3 bg-white border-0 shadow rounded-4">
                                    <div className="about-product text-center "><img className='img-fluid' src="./img/courses/Rectangle 15 (2).png" width="300" />
                                        {/* <div>
                    <h4>Believing is seeing</h4>
                    <h6 className="mt-0 text-black-50">Apple pro display XDR</h6>
                </div> */}
                                    </div>
                                    <div className="stats mt-2">
                                        <div className="d-flex justify-content-between p-price my-2"><Link to='/coursedetails' style={{ textDecoration: 'none',color:'black' }}><b>UI/UX Designer Course</b></Link><span className="badge" style={{ fontSize: '10px', background: 'rgba(29, 25, 28, 0.1)', color: 'black', padding: '5px 10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                                            Beginners
                                        </span>
                                        </div>
                                        <div className="d-flex justify-content-between p-price mt-3"><span><b>$48</b></span><span><b>3 Month Course</b></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div><br /><br />
    </>
  )
}

export default PopularCourses