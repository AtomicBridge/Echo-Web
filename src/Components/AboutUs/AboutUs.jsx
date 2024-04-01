import React from 'react'
import HomeCarousel from '../Home/HomeCarousel'
import PopularCourses from '../Home/PopularCourses'
import PopularWorkout from '../Home/PopularWorkout'

const AboutUs = () => {
  return (
    <>
<HomeCarousel/>

<div className="container-fluid">
<section className="how-it-works">
                    <h1 className="how-it-works-title">How Can You reach to Us</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 mx-auto text-center my-4">
                                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            </div>
                        </div>
                    </div>


                    <div className="">
                        <div className="row justify-content-center">
                            <div className="col-md-4 mx-2 my-2" style={{ maxWidth: '384px' }}>
                                <div className="card d-flex flex-column container border-0 shadow rounded-5" >
                                    <div style={{ maxWidth: '324px' }}>
                                        <img src="./img/aboutus/Group 1 (3).png" className="card-img-top rounded-circle mx-2 d-block mt-4" style={{ height: '80px', width: '80px' }} alt="..." />
                                        <div className="card-body " style={{ maxWidth: '324px' }}>
                                            <h5 className="card-title mt-2"><b>Lorem Ipsum Dolor Set Amet Ipsum & Suficient</b></h5>
                                            <h5 className="card-text my-3 text-secondary" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore elit, sed do eiusmod tempor incididun</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mx-2 my-2" style={{ maxWidth: '384px' }}>
                                <div className="card d-flex flex-column container border-0 shadow rounded-5" >
                                    <div style={{ maxWidth: '324px' }}>
                                        <img src="./img/aboutus/Group 1 (4).png" className="card-img-top rounded-circle mx-2 d-block mt-4" style={{ height: '80px', width: '80px' }} alt="..." />
                                        <div className="card-body " style={{ maxWidth: '324px' }}>
                                            <h5 className="card-title mt-2"><b>Lorem Ipsum Dolor Set Amet Ipsum & Suficient</b></h5>
                                            <h5 className="card-text my-3 text-secondary" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore elit, sed do eiusmod tempor incididun</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mx-2 my-2" style={{ maxWidth: '384px' }}>
                                <div className="card d-flex flex-column container border-0 shadow rounded-5" >
                                    <div style={{ maxWidth: '324px' }}>
                                        <img src="./img/aboutus/Group 1 (5).png" className="card-img-top rounded-circle mx-2 d-block mt-4" style={{ height: '80px', width: '80px' }} alt="..." />
                                        <div className="card-body " style={{ maxWidth: '324px' }}>
                                            <h5 className="card-title mt-2"><b>Lorem Ipsum Dolor Set Amet Ipsum & Suficient</b></h5>
                                            <h5 className="card-text my-3 text-secondary" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore elit, sed do eiusmod tempor incididun</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
</div>
<div style={{background: "rgba(29, 25, 28, 0.1)"}} className='mb-5 mt-3'>
  <div className="container-fluid d-flex align-items-center" style={{minHeight: "67vh"}}>
    <div className="row">
      <div className="col-md-4 mx-auto my-3">
        <img src="./img/aboutus/aboutvedio.png" style={{height:'436px', width:'436px'}} className="img-fluid rounded-5 " alt="Paris Image"/>
      </div>
      <div className="col-md-8 mx-auto">
      <div className="col-md-10">
      <h5><span className="badge py-3 px-3 rounded-3 mt-3" style={{backgroundColor:'#FAFAFA',color:'black'}}><b>Our Mission</b></span></h5>
        <div className="text my-4">
          <h1 style={{fontWeight:'600', fontSize:'3.38vw'}}>Attend every class whereever your are staying at.</h1>
          <h5 className='text-secondary my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed.</h5>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>

<div className="container-fluid">
    <PopularCourses/>
    <PopularWorkout/>
</div>
    </>
  )
}

export default AboutUs