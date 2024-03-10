import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="">
  <footer
          className="text-center text-lg-start text-white"
          style={{backgroundColor: "#1D191C"}}
          >
    <div className="container-fluid p-4 pb-0">
      <section className="">
        <div className="row">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto my-3">
            {/* <h6 className="text-uppercase mb-4 font-weight-bold">
              Company name
            </h6> */}
            <img className='mb-4' src="./img/footer/logo 1 1.png" alt="" />
            <h5 style={{fontWeight:'300'}} className='mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            </h5>
            <a className=" mx-1" href="#!"><img src="./img/footer/twitterfooter.png" alt="" /></a>
            <a className=" mx-1" href="#!"><img src="./img/footer/instafooter.png" alt="" /></a>
            <a className=" mx-1" href="#!"><img src="./img/footer/linkfooter.png" alt="" /></a>
            <a className=" mx-1" href="#!"><img src="./img/footer/ballfooter.png" alt="" /></a>
              
            
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className=" mb-4 "><b>Quick Links</b></h5>
            <p>
              <a className="text-white">Home</a>
            </p>
            <p>
              <a className="text-white">About Us</a>
            </p>
            <p>
              <a className="text-white">Contact Us</a>
            </p>
            <p>
              <a className="text-white">Our Courses</a>
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className=" mb-4 "><b>Quick Access</b></h5>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className=" mb-4 "><b>Support</b></h5>

            <p><i class="fa-solid fa-phone" style={{ marginRight:'15px'}}></i>+1 - 202 -55-0179</p>
            <p><i className="fa-regular fa-envelope fa-lg" style={{ marginRight:'15px'}}></i>support@smartinterion.com</p>
            <p><i className="fa-solid fa-location-dot fa-lg" style={{ marginRight:'15px'}}></i>1840 E Garvey Avenue Street West Covina, CA 91791, US</p>
          </div>
        </div>
      </section>
    </div>

    <div
         className="text-center p-3 container border-top mt-3" style={{fontFamily:'Poppins'}} >
      <i class="fa-regular fa-copyright"></i> 2023 Digital Craft. All Right Reserved
    </div>
  </footer>
</div>
    </>
  )
}

export default Footer