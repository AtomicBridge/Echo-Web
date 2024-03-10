import React from 'react'
import Header from '../Header/Header'
import "./home.css";
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <>
            <Header />
            
<div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="./img/home/echowebheader.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-md-block text-start position-absolute carousel-text-adjust  start-0 translate-middle-y" >
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-6">
                            <h4 class="banner-text"style={{fontSize: "1.6vw", fontWeight: "400"}}>The Future is Now</h4>
                            <h1 class="banner-text " style={{fontSize: "3.7vw", fontWeight: "600", lineHeight: "1.3"}}>The World’s Fastest <br />Digital Courses</h1>
                            <h5 class="banner-text" style={{fontSize: "1.3vw", fontWeight: "400"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum mi ut nunc pulvinar, sit amet tincidunt odio semper. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget a libero.</h5>
                            <a href="#" class="btn btn-light mt-md-3 rounded-pill px-1 px-md-4 py-md-2 py-1 mb-5" style={{fontSize:'1vw'}}>Explore Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


            <div className="container-fluid">
                <section className="how-it-works">
                    <h1 className="how-it-works-title">How It Works</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 mx-auto text-center my-4">
                                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore</p>
                            </div>
                        </div>
                    </div>


                    <div className="">
                        <div className="row justify-content-center">
                            <div className="col-md-4 mx-2 my-2" style={{ maxWidth: '384px' }}>
                                <div className="card d-flex flex-column justify-content-center align-items-center border-0 shadow rounded-5" >
                                    <div style={{ maxWidth: '324px' }}>
                                        <img src="./img/home/Group 1.png" className="card-img-top rounded-circle mx-auto d-block mt-4" style={{ height: '136px', width: '136px' }} alt="..." />
                                        <div className="card-body text-center" style={{ maxWidth: '324px' }}>
                                            <h5 className="card-title mt-2"><b>Find Flexible, affordable best options</b></h5>
                                            <h5 className="card-text my-3 text-secondary" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore elit, sed do eiusmod tempor incididun</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mx-2 my-2" style={{ maxWidth: '384px' }}>
                                <div className="card d-flex flex-column justify-content-center align-items-center border-0 shadow rounded-5" >
                                    <div style={{ maxWidth: '324px' }}>
                                        <img src="./img/home/Group 1 (1).png" className="card-img-top rounded-circle mx-auto d-block mt-4" style={{ height: '136px', width: '136px' }} alt="..." />
                                        <div className="card-body text-center" style={{ maxWidth: '324px' }}>
                                            <h5 className="card-title mt-2"><b>Earn industry-recognized credentials</b></h5>
                                            <h5 className="card-text my-3 text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore elit, sed do eiusmod tempor incididun</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mx-2 my-2" style={{ maxWidth: '384px' }}>
                                <div className="card d-flex flex-column justify-content-center align-items-center border-0 shadow rounded-5" >
                                    <div style={{ maxWidth: '324px' }}>
                                        <img src="./img/home/Group 1 (2).png" className="card-img-top rounded-circle mx-auto d-block mt-4" style={{ height: '136px', width: '136px' }} alt="..." />
                                        <div className="card-body text-center" style={{ maxWidth: '324px' }}>
                                            <h5 className="card-title mt-2"><b>Master skills with in depth learning</b></h5>
                                            <h5 className="card-text my-3 text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore elit, sed do eiusmod tempor incididun</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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
                                        <div className="d-flex justify-content-between p-price my-2"><span><b>UI/UX Designer Course</b></span><span className="badge" style={{ fontSize: '10px', background: 'rgba(29, 25, 28, 0.1)', color: 'black', padding: '5px 10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
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
                                        <div className="d-flex justify-content-between p-price my-2"><span><b>UI/UX Designer Course</b></span><span className="badge" style={{ fontSize: '10px', background: 'rgba(29, 25, 28, 0.1)', color: 'black', padding: '5px 10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
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
                                        <div className="d-flex justify-content-between p-price my-2"><span><b>UI/UX Designer Course</b></span><span className="badge" style={{ fontSize: '10px', background: 'rgba(29, 25, 28, 0.1)', color: 'black', padding: '5px 10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
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
                                        <div className="d-flex justify-content-between p-price my-2"><span><b>UI/UX Designer Course</b></span><span className="badge" style={{ fontSize: '10px', background: 'rgba(29, 25, 28, 0.1)', color: 'black', padding: '5px 10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
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
                                        <div className="d-flex justify-content-between p-price my-2"><span><b>UI/UX Designer Course</b></span><span className="badge" style={{ fontSize: '10px', background: 'rgba(29, 25, 28, 0.1)', color: 'black', padding: '5px 10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
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
                                        <div className="d-flex justify-content-between p-price my-2"><span><b>UI/UX Designer Course</b></span><span className="badge" style={{ fontSize: '10px', background: 'rgba(29, 25, 28, 0.1)', color: 'black', padding: '5px 10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
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
                                        <div className="d-flex justify-content-between p-price my-2"><span><b>UI/UX Designer Course</b></span><span className="badge" style={{ fontSize: '10px', background: 'rgba(29, 25, 28, 0.1)', color: 'black', padding: '5px 10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
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
                                        <div className="d-flex justify-content-between p-price my-2"><span><b>UI/UX Designer Course</b></span><span className="badge" style={{ fontSize: '10px', background: 'rgba(29, 25, 28, 0.1)', color: 'black', padding: '5px 10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
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
                
    <div class="col-md-6 col-12 ">
        <div class="banner-container">
            <h1 class="banner ">Popular Workout for you</h1>
            <div class="banner-underline"></div>
        </div>
<h5 class="text-secondary mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur.  </h5>
       
    

</div>
                <div className="workout-card-padded">
      <div className="my-5">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-lg-3">
            <div className="workout-card" >
              <div className="workout-card-image" style={{ backgroundImage: "url('./img/workout/workout1.png')" }}>
                {/* <div className="workout-card-category">City</div> */}
              <div className="workout-card-description">
                <h2>Squat Management Exercise</h2>
                <p>12 minutes | Intermediate</p>
              </div>
              {/* <img className="workout-card-user workout-card-avatar workout-card-avatar-large" src="https://github.com/lewagon/bootstrap-challenges/blob/master/11-Airbnb-search-form/images/anne.jpg?raw=true" alt="User" /> */}
              <a className="workout-card-link" href="#"></a>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-3">
            <div className="workout-card" >
              <div className="workout-card-image" style={{ backgroundImage: "url('./img/workout/workout2.jpg')" }}>
                {/* <div className="workout-card-category">City</div> */}
              <div className="workout-card-description">
                <h2>Squat Management Exercise</h2>
                <p>12 minutes | Intermediate</p>
              </div>
              {/* <img className="workout-card-user workout-card-avatar workout-card-avatar-large" src="https://github.com/lewagon/bootstrap-challenges/blob/master/11-Airbnb-search-form/images/anne.jpg?raw=true" alt="User" /> */}
              <a className="workout-card-link" href="#"></a>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-3">
            <div className="workout-card" >
              <div className="workout-card-image" style={{ backgroundImage: "url('./img/workout/workout3.png')" }}>
                {/* <div className="workout-card-category">City</div> */}
              <div className="workout-card-description">
                <h2>Squat Management Exercise</h2>
                <p>12 minutes | Intermediate</p>
              </div>
              {/* <img className="workout-card-user workout-card-avatar workout-card-avatar-large" src="https://github.com/lewagon/bootstrap-challenges/blob/master/11-Airbnb-search-form/images/anne.jpg?raw=true" alt="User" /> */}
              <a className="workout-card-link" href="#"></a>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-3">
            <div className="workout-card" >
              <div className="workout-card-image" style={{ backgroundImage: "url('./img/workout/workout4.png')" }}>
                {/* <div className="workout-card-category">City</div> */}
              <div className="workout-card-description">
                <h2>Squat Management Exercise</h2>
                <p>12 minutes | Intermediate</p>
              </div>
              {/* <img className="workout-card-user workout-card-avatar workout-card-avatar-large" src="https://github.com/lewagon/bootstrap-challenges/blob/master/11-Airbnb-search-form/images/anne.jpg?raw=true" alt="User" /> */}
              <a className="workout-card-link" href="#"></a>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-3">
            <div className="workout-card" >
              <div className="workout-card-image" style={{ backgroundImage: "url('./img/workout/workout5.png')" }}>
                {/* <div className="workout-card-category">City</div> */}
              <div className="workout-card-description">
                <h2>Squat Management Exercise</h2>
                <p>12 minutes | Intermediate</p>
              </div>
              {/* <img className="workout-card-user workout-card-avatar workout-card-avatar-large" src="https://github.com/lewagon/bootstrap-challenges/blob/master/11-Airbnb-search-form/images/anne.jpg?raw=true" alt="User" /> */}
              <a className="workout-card-link" href="#"></a>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-3">
            <div className="workout-card" >
              <div className="workout-card-image" style={{ backgroundImage: "url('./img/workout/workout6.png')" }}>
                {/* <div className="workout-card-category">City</div> */}
              <div className="workout-card-description">
                <h2>Squat Management Exercise</h2>
                <p>12 minutes | Intermediate</p>
              </div>
              {/* <img className="workout-card-user workout-card-avatar workout-card-avatar-large" src="https://github.com/lewagon/bootstrap-challenges/blob/master/11-Airbnb-search-form/images/anne.jpg?raw=true" alt="User" /> */}
              <a className="workout-card-link" href="#"></a>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-3">
            <div className="workout-card" >
              <div className="workout-card-image" style={{ backgroundImage: "url('./img/workout/workout1.png')" }}>
                {/* <div className="workout-card-category">City</div> */}
              <div className="workout-card-description">
                <h2>Squat Management Exercise</h2>
                <p>12 minutes | Intermediate</p>
              </div>
              {/* <img className="workout-card-user workout-card-avatar workout-card-avatar-large" src="https://github.com/lewagon/bootstrap-challenges/blob/master/11-Airbnb-search-form/images/anne.jpg?raw=true" alt="User" /> */}
              <a className="workout-card-link" href="#"></a>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-3">
            <div className="workout-card" >
              <div className="workout-card-image" style={{ backgroundImage: "url('./img/workout/workout3.png')" }}>
                {/* <div className="workout-card-category">City</div> */}
              <div className="workout-card-description">
                <h2>Squat Management Exercise</h2>
                <p>12 minutes | Intermediate</p>
              </div>
              {/* <img className="workout-card-user workout-card-avatar workout-card-avatar-large" src="https://github.com/lewagon/bootstrap-challenges/blob/master/11-Airbnb-search-form/images/anne.jpg?raw=true" alt="User" /> */}
              <a className="workout-card-link" href="#"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="">
    <div class="row ">
    <div class="col-md-5 col-12 ">
        <div class="banner-container">
            <h1 class="banner-employes ">What our Employees</h1>
            <div class="banner-employes-underline"></div>
        </div>
        <h5 class="banner-employes ">saying about us</h5>
    </div>
<div className="col-md-5 col-12 mx-auto">
<h5 class="text-secondary mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur. adipi elit, sed do eiusmod tempor incididunt ut labore consectetur.</h5>

</div>
</div>

</div>
<section style={{color: "#000"}}>
  <div class=" py-5">

    <div class="row scrolling-wrapper-flexbox">
      <div class="col-10 col-md-5 col-lg-3 mb-3">
        <div class="card rounded-4 employes-card" >
          <div class="card-body py-4 mt-2">
            
            <h5 class="font-weight-bold" style={{fontSize:'18px'}}>Great Platform</h5>
            
            <div className="row ">
                <div className="col-md-1">
                <i class="fa-solid fa-quote-left p-1 rounded-circle employes-card-quote" ></i>
           
                </div>
                <div className="col-md-10 ">
                <p class="mb-2 border-bottom pb-2">
              Lorem ipsum dolor sit amet, conse adi elit, sed do eiusmod tempor incididunt ut labore consectetur. eiusmod tem incididunt ut labore consectetur eius tem incididunt ut labore cons .eiusme tem incididunt labore consecte.Lorem ipsum dolor sit amet, conse adi elit, sed do eiusmod tempor incididunt ut labore consectetur. eiusm
            </p>
            <div class="d-flex flex-start mt-4">
                      <a class="me-3" href="#">
                        <img class="rounded-circle shadow-1-strong"
                          src="./img/Employees/employe1.png" alt="avatar"
                          width="60" height="60" />
                      </a>
                      <div class="flex-grow-1 flex-shrink-1">
                        <div>
                          <div class="d-flex justify-content-between align-items-center">
                            <p class="mb-1">
                            Kyle Mayers
                            </p>
                          </div>
                          <ul class="list-unstyled d-flex justify-content-start">
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star-half-alt fa-sm text-warning"></i>
              </li>
            </ul>
                        </div>
                      </div>
                    </div>
                </div>
                
            </div>
          </div>
        </div>
      </div>
      <div class="col-10 col-md-5 col-lg-3 mb-3">
        <div class="card rounded-4 employes-card" >
          <div class="card-body py-4 mt-2">
            
            <h5 class="font-weight-bold" style={{fontSize:'18px'}}>Great Platform</h5>
            
            <div className="row ">
                <div className="col-md-1">
                <i class="fa-solid fa-quote-left p-1 rounded-circle employes-card-quote" ></i>
           
                </div>
                <div className="col-md-10 ">
                <p class="mb-2 border-bottom pb-2">
              Lorem ipsum dolor sit amet, conse adi elit, sed do eiusmod tempor incididunt ut labore consectetur. eiusmod tem incididunt ut labore consectetur eius tem incididunt ut labore cons .eiusme tem incididunt labore consecte.Lorem ipsum dolor sit amet, conse adi elit, sed do eiusmod tempor incididunt ut labore consectetur. eiusm
            </p>
            <div class="d-flex flex-start mt-4">
                      <a class="me-3" href="#">
                        <img class="rounded-circle shadow-1-strong"
                          src="./img/Employees/employe2.png" alt="avatar"
                          width="60" height="60" />
                      </a>
                      <div class="flex-grow-1 flex-shrink-1">
                        <div>
                          <div class="d-flex justify-content-between align-items-center">
                            <p class="mb-1">
                            Kyle Mayers
                            </p>
                          </div>
                          <ul class="list-unstyled d-flex justify-content-start">
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star-half-alt fa-sm text-warning"></i>
              </li>
            </ul>
                        </div>
                      </div>
                    </div>
                </div>
                
            </div>
          </div>
        </div>
      </div>
      <div class="col-10 col-md-5 col-lg-3 mb-3">
        <div class="card rounded-4 employes-card" >
          <div class="card-body py-4 mt-2">
            
            <h5 class="font-weight-bold" style={{fontSize:'18px'}}>Great Platform</h5>
            
            <div className="row ">
                <div className="col-md-1">
                <i class="fa-solid fa-quote-left p-1 rounded-circle employes-card-quote" ></i>
           
                </div>
                <div className="col-md-10 ">
                <p class="mb-2 border-bottom pb-2">
              Lorem ipsum dolor sit amet, conse adi elit, sed do eiusmod tempor incididunt ut labore consectetur. eiusmod tem incididunt ut labore consectetur eius tem incididunt ut labore cons .eiusme tem incididunt labore consecte.Lorem ipsum dolor sit amet, conse adi elit, sed do eiusmod tempor incididunt ut labore consectetur. eiusm
            </p>
            <div class="d-flex flex-start mt-4">
                      <a class="me-3" href="#">
                        <img class="rounded-circle shadow-1-strong"
                          src="./img/Employees/employe3.png" alt="avatar"
                          width="60" height="60" />
                      </a>
                      <div class="flex-grow-1 flex-shrink-1">
                        <div>
                          <div class="d-flex justify-content-between align-items-center">
                            <p class="mb-1">
                            Kyle Mayers
                            </p>
                          </div>
                          <ul class="list-unstyled d-flex justify-content-start">
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star-half-alt fa-sm text-warning"></i>
              </li>
            </ul>
                        </div>
                      </div>
                    </div>
                </div>
                
            </div>
          </div>
        </div>
      </div>
      <div class="col-10 col-md-5 col-lg-3 mb-3">
        <div class="card rounded-4 employes-card" >
          <div class="card-body py-4 mt-2">
            
            <h5 class="font-weight-bold" style={{fontSize:'18px'}}>Great Platform</h5>
            
            <div className="row ">
                <div className="col-md-1">
                <i class="fa-solid fa-quote-left p-1 rounded-circle employes-card-quote" ></i>
           
                </div>
                <div className="col-md-10 ">
                <p class="mb-2 border-bottom pb-2">
              Lorem ipsum dolor sit amet, conse adi elit, sed do eiusmod tempor incididunt ut labore consectetur. eiusmod tem incididunt ut labore consectetur eius tem incididunt ut labore cons .eiusme tem incididunt labore consecte.Lorem ipsum dolor sit amet, conse adi elit, sed do eiusmod tempor incididunt ut labore consectetur. eiusm
            </p>
            <div class="d-flex flex-start mt-4">
                      <a class="me-3" href="#">
                        <img class="rounded-circle shadow-1-strong"
                          src="./img/Employees/employe2.png" alt="avatar"
                          width="60" height="60" />
                      </a>
                      <div class="flex-grow-1 flex-shrink-1">
                        <div>
                          <div class="d-flex justify-content-between align-items-center">
                            <p class="mb-1">
                            Kyle Mayers
                            </p>
                          </div>
                          <ul class="list-unstyled d-flex justify-content-start">
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star-half-alt fa-sm text-warning"></i>
              </li>
            </ul>
                        </div>
                      </div>
                    </div>
                </div>
                
            </div>
          </div>
        </div>
      </div>
      <div class="col-10 col-md-5 col-lg-3 mb-3">
        <div class="card rounded-4 employes-card" >
          <div class="card-body py-4 mt-2">
            
            <h5 class="font-weight-bold" style={{fontSize:'18px'}}>Great Platform</h5>
            
            <div className="row ">
                <div className="col-md-1">
                <i class="fa-solid fa-quote-left p-1 rounded-circle employes-card-quote" ></i>
           
                </div>
                <div className="col-md-10 ">
                <p class="mb-2 border-bottom pb-2">
              Lorem ipsum dolor sit amet, conse adi elit, sed do eiusmod tempor incididunt ut labore consectetur. eiusmod tem incididunt ut labore consectetur eius tem incididunt ut labore cons .eiusme tem incididunt labore consecte.Lorem ipsum dolor sit amet, conse adi elit, sed do eiusmod tempor incididunt ut labore consectetur. eiusm
            </p>
            <div class="d-flex flex-start mt-4">
                      <a class="me-3" href="#">
                        <img class="rounded-circle shadow-1-strong"
                          src="./img/Employees/employe1.png" alt="avatar"
                          width="60" height="60" />
                      </a>
                      <div class="flex-grow-1 flex-shrink-1">
                        <div>
                          <div class="d-flex justify-content-between align-items-center">
                            <p class="mb-1">
                            Kyle Mayers
                            </p>
                          </div>
                          <ul class="list-unstyled d-flex justify-content-start">
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star-half-alt fa-sm text-warning"></i>
              </li>
            </ul>
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

<div class="container-fluid">
  <div class="row">
  <div class="col-md-5">
  <div class="container position-relative">
    <img src="./img/home/3lines.png" alt="" class='position-absolute top-0 end-0 '/>
    <div class="text">
      <h1 style={{fontSize:'48px', fontWeight:600, fontFamily:'Poppins', color:'black',paddingTop:'40px'}}>Lorem Ipsum Dolor Set Amet Consecteur Utisem</h1>
    </div>
  </div>
  <h5 className='text-secondary my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ipsum urna, rhoncus et malesuada eget, finibus eget ex.</h5>
  <div class="container-fluid">
    <div class="d-flex flex-wrap justify-content-start mt-4">
      <img src="./img/home/image 133.png" alt="" class='img-fluid mx-2 my-2'/>
      <img src="./img/home/image 134.png" alt="" class='img-fluid mx-2 my-2'/>
    </div>
  </div>
</div>

    <div class="col-md-7">
      <img src="./img/home/mobileapp.png" class="img-fluid float-md-end" alt="Mobile Image"/>
    </div>
  </div>
</div>




            </div>
            <Footer />
        </>
    )
}

export default Home