import React, { useEffect } from 'react'
import Header from '../Header/Header'
import "./home.css";
import Footer from '../Footer/Footer';
import HomeCarousel from './HomeCarousel';
import PopularCourses from './PopularCourses';
import PopularWorkout from './PopularWorkout';
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
        <>
         
            
<HomeCarousel/>

            <div className="container-fluid">
                <section className="how-it-works">
                    <h1 className="how-it-works-title mt-md-5">How It Works</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 mx-auto text-center my-4">
                                <p className="text-low">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore</p>
                            </div>
                        </div>
                    </div>


                    <div className="">
                        <div className="row justify-content-center">
                            <div className="col-md-3 mx-1 my-2">
                                <div className="card d-flex flex-column justify-content-center align-items-center border-0 shadow rounded-5" >
                                    <div style={{ maxWidth: '324px' }}>
                                        <img src="./img/home/Group 1.png" className="card-img-top rounded-circle mx-auto d-block mt-4" style={{ height: '136px', width: '136px' }} alt="..." />
                                        <div className="card-body text-center" style={{ maxWidth: '324px' }}>
                                            <h5 className="card-title mt-2"><b>Find Flexible, affordable best options</b></h5>
                                            <span className="card-text my-3 text-subheading ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore elit, sed do eiusmod tempor incididun</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mx-1 my-2" >
                                <div className="card d-flex flex-column justify-content-center align-items-center border-0 shadow rounded-5" >
                                    <div style={{ maxWidth: '324px' }}>
                                        <img src="./img/home/Group 1 (1).png" className="card-img-top rounded-circle mx-auto d-block mt-4" style={{ height: '136px', width: '136px' }} alt="..." />
                                        <div className="card-body text-center" style={{ maxWidth: '324px' }}>
                                            <h5 className="card-title mt-2"><b>Earn industry-recognized credentials</b></h5>
                                            <span className="card-text my-3 text-subheading" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore elit, sed do eiusmod tempor incididun</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 mx-1 my-2">
                                <div className="card d-flex flex-column justify-content-center align-items-center border-0 shadow rounded-5" >
                                    <div style={{ maxWidth: '324px' }}>
                                        <img src="./img/home/Group 1 (2).png" className="card-img-top rounded-circle mx-auto d-block mt-4" style={{ height: '136px', width: '136px' }} alt="..." />
                                        <div className="card-body text-center" style={{ maxWidth: '324px' }}>
                                            <h5 className="card-title mt-2"><b>Master skills with in depth learning</b></h5>
                                            <span className="card-text my-3 text-subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore elit, sed do eiusmod tempor incididun</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <PopularCourses/>
                
    <PopularWorkout/>
    <div className="">
    <div className="row ">
    <div className="col-md-5 col-12 ">
        <div className="banner-container">
            <h1 className="banner-employes ">What our Employees</h1>
            <div className="banner-employes-underline"></div>
        </div>
        <h5 className="banner-employes ">saying about us</h5>
    </div>
<div className="col-md-5 col-12 mx-auto mt-md-4">
<span className="text-subheading ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur. adipi elit, sed do eiusmod tempor incididunt ut labore consectetur.</span>

</div>
</div>

</div>
<section style={{color: "#000"}}>
  <div className=" py-5">

    <div className="row scrolling-wrapper-flexbox">
      <div className="col mb-3 employes-card-margin-set">
        <div className="card rounded-4 employes-card" style={{minWidth:'384px'}} >
          <div className="card-body py-4 mt-2">
            
            <h5 className="font-weight-bold" style={{fontSize:'18px'}}>Great Platform</h5>
            
            <div className="row ">
                <div className="col-md-1">
                <i className="fa-solid fa-quote-left p-1 rounded-circle employes-card-quote" ></i>
           
                </div>
                <div className="col-md-12 ">
                <p className="mb-2 border-bottom pb-2">
              Lorem ipsum dolor sit amet, conse adi elit, sed do eiusmod tempor incididunt ut labore consectetur. eiusmod tem incididunt ut labore consectetur eius tem incididunt ut labore cons .eiusme tem incididunt labore consecte.Lorem ipsum dolor sit amet, conse adi elit, sed do eiusmod tempor incididunt ut labore consectetur. eiusm
            </p>
            <div className="d-flex flex-start mt-4">
                      <a className="me-3" href="#">
                        <img className="rounded-circle shadow-1-strong"
                          src="./img/Employees/employe1.png" alt="avatar"
                          width="60" height="60" />
                      </a>
                      <div className="flex-grow-1 flex-shrink-1">
                        <div>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-1">
                            Kyle Mayers
                            </p>
                          </div>
                          <ul className="list-unstyled d-flex justify-content-start">
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star-half-alt fa-sm text-warning"></i>
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
      <div className="col mb-3">
        <div className="card rounded-4 employes-card" style={{minWidth:'400px'}} >
          <div className="card-body py-4 mt-2">
            
            <h5 className="font-weight-bold" style={{fontSize:'18px'}}>Great Platform</h5>
            
            <div className="row ">
                <div className="col-md-1">
                <i className="fa-solid fa-quote-left p-1 rounded-circle employes-card-quote" ></i>
           
                </div>
                <div className="col-md-12 ">
                <p className="mb-2 border-bottom pb-2">
              Lorem ipsum dolor sit amet, conse adi elit, sed do eiusmod tempor incididunt ut labore consectetur. eiusmod tem incididunt ut labore consectetur eius tem incididunt ut labore cons .eiusme tem incididunt labore consecte.Lorem ipsum dolor sit amet, conse adi elit, sed do eiusmod tempor incididunt ut labore consectetur. eiusm
            </p>
            <div className="d-flex flex-start mt-4">
                      <a className="me-3" href="#">
                        <img className="rounded-circle shadow-1-strong"
                          src="./img/Employees/employe2.png" alt="avatar"
                          width="60" height="60" />
                      </a>
                      <div className="flex-grow-1 flex-shrink-1">
                        <div>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-1">
                            Kyle Mayers
                            </p>
                          </div>
                          <ul className="list-unstyled d-flex justify-content-start">
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star-half-alt fa-sm text-warning"></i>
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
      <div className="col mb-3">
        <div className="card rounded-4 employes-card" style={{minWidth:'400px'}} >
          <div className="card-body py-4 mt-2">
            
            <h5 className="font-weight-bold" style={{fontSize:'18px'}}>Great Platform</h5>
            
            <div className="row ">
                <div className="col-md-1">
                <i className="fa-solid fa-quote-left p-1 rounded-circle employes-card-quote" ></i>
           
                </div>
                <div className="col-md-12 ">
                <p className="mb-2 border-bottom pb-2">
              Lorem ipsum dolor sit amet, conse adi elit, sed do eiusmod tempor incididunt ut labore consectetur. eiusmod tem incididunt ut labore consectetur eius tem incididunt ut labore cons .eiusme tem incididunt labore consecte.Lorem ipsum dolor sit amet, conse adi elit, sed do eiusmod tempor incididunt ut labore consectetur. eiusm
            </p>
            <div className="d-flex flex-start mt-4">
                      <a className="me-3" href="#">
                        <img className="rounded-circle shadow-1-strong"
                          src="./img/Employees/employe3.png" alt="avatar"
                          width="60" height="60" />
                      </a>
                      <div className="flex-grow-1 flex-shrink-1">
                        <div>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-1">
                            Kyle Mayers
                            </p>
                          </div>
                          <ul className="list-unstyled d-flex justify-content-start">
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star-half-alt fa-sm text-warning"></i>
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
      <div className="col mb-3">
        <div className="card rounded-4 employes-card" style={{minWidth:'400px'}} >
          <div className="card-body py-4 mt-2">
            
            <h5 className="font-weight-bold" style={{fontSize:'18px'}}>Great Platform</h5>
            
            <div className="row ">
                <div className="col-md-1">
                <i className="fa-solid fa-quote-left p-1 rounded-circle employes-card-quote" ></i>
           
                </div>
                <div className="col-md-12 ">
                <p className="mb-2 border-bottom pb-2">
              Lorem ipsum dolor sit amet, conse adi elit, sed do eiusmod tempor incididunt ut labore consectetur. eiusmod tem incididunt ut labore consectetur eius tem incididunt ut labore cons .eiusme tem incididunt labore consecte.Lorem ipsum dolor sit amet, conse adi elit, sed do eiusmod tempor incididunt ut labore consectetur. eiusm
            </p>
            <div className="d-flex flex-start mt-4">
                      <a className="me-3" href="#">
                        <img className="rounded-circle shadow-1-strong"
                          src="./img/Employees/employe2.png" alt="avatar"
                          width="60" height="60" />
                      </a>
                      <div className="flex-grow-1 flex-shrink-1">
                        <div>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-1">
                            Kyle Mayers
                            </p>
                          </div>
                          <ul className="list-unstyled d-flex justify-content-start">
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star-half-alt fa-sm text-warning"></i>
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
      <div className="col mb-3">
        <div className="card rounded-4 employes-card" style={{minWidth:'400px'}} >
          <div className="card-body py-4 mt-2">
            
            <h5 className="font-weight-bold" style={{fontSize:'18px'}}>Great Platform</h5>
            
            <div className="row ">
                <div className="col-md-1">
                <i className="fa-solid fa-quote-left p-1 rounded-circle employes-card-quote" ></i>
           
                </div>
                <div className="col-md-12 ">
                <p className="mb-2 border-bottom pb-2">
              Lorem ipsum dolor sit amet, conse adi elit, sed do eiusmod tempor incididunt ut labore consectetur. eiusmod tem incididunt ut labore consectetur eius tem incididunt ut labore cons .eiusme tem incididunt labore consecte.Lorem ipsum dolor sit amet, conse adi elit, sed do eiusmod tempor incididunt ut labore consectetur. eiusm
            </p>
            <div className="d-flex flex-start mt-4">
                      <a className="me-3" href="#">
                        <img className="rounded-circle shadow-1-strong"
                          src="./img/Employees/employe1.png" alt="avatar"
                          width="60" height="60" />
                      </a>
                      <div className="flex-grow-1 flex-shrink-1">
                        <div>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-1">
                            Kyle Mayers
                            </p>
                          </div>
                          <ul className="list-unstyled d-flex justify-content-start">
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star-half-alt fa-sm text-warning"></i>
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

<div className="">
  <div className="row">
  <div className="col-md-5">
  <div className="container position-relative">
    <img src="./img/home/3lines.png" alt="" className='position-absolute top-0 end-0 '/>
    <div className="text">
      <h1 style={{fontSize:'48px', fontWeight:600, fontFamily:'Poppins', color:'black',paddingTop:'40px'}}>Lorem Ipsum Dolor Set Amet Consecteur Utisem</h1>
    </div>
  </div>
  <h5 className='text-secondary mx-3 my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ipsum urna, rhoncus et malesuada eget, finibus eget ex.</h5>
  <div className="mx-2">
    <div className="d-flex flex-wrap justify-content-start mt-4">
      <img src="./img/home/image 133.png" alt="" className='img-fluid mx-2 my-2'/>
      <img src="./img/home/image 134.png" alt="" className='img-fluid mx-2 my-2'/>
    </div>
  </div>
</div>

    <div className="col-md-7">
      <img src="./img/home/mobileapp.png" className="img-fluid float-md-end" alt="Mobile Image"/>
    </div>
  </div>
</div>




            </div>
          
        </>
    )
}

export default Home