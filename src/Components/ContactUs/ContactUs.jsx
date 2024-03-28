import React, { useState } from 'react'
import HomeCarousel from '../Home/HomeCarousel'

const ContactUs = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
    <HomeCarousel/>
    <div className='container my-5'>
    <div class="">
  <div class="row">
  <div class="col-md-5">
  <div class="container position-relative">
    <img src="./img/home/3lines.png" alt="" class='position-absolute top-0 end-0 '/>
    <div class="text">
      <h1 style={{fontSize:'48px', fontWeight:600, fontFamily:'Poppins', color:'black',paddingTop:'40px'}}>Lorem Ipsum Dolor Set Amet Consecteur Utisem</h1>
    </div>
  </div>
  <h5 className='text-secondary my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ipsum urna, rhoncus et malesuada eget, finibus eget ex.</h5>
  <h5 className='text-secondary '>company@info.pk.com</h5>
  <h5 className='text-secondary my-4'>+92-305-4597792</h5>
<u><h5><b>Contact Support</b></h5></u>
  <div class="">
    <div class="d-flex flex-wrap justify-content-start mt-4">
      <div className='col-md-5  my-2'>
        <h6><b>Contact Support</b></h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ipsum urna, rhoncus et malesuada eget, finibus eget ex.</p>
      </div>
      <div className='col-md-5  my-2'>
        <h6><b>Feedback & Suggestion</b></h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ipsum urna, rhoncus et malesuada eget, finibus eget ex.</p>
      </div>
    </div>
  </div>
</div>

    <div class="col-md-7">
    <div class="row">
    <div class="col-md-8 offset-md-3">
    <div class="form-container shadow p-4 rounded-5">
        <h4 class="mb-3"><b>Get In Touch</b></h4>
        <p class="text-secondary mb-4">Get in touch</p>
        <form>
            <div class="row mb-3">
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <input type="text" class="form-control rounded-5 py-3 px-2" id="firstName" placeholder="First Name"/>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <input type="text" class="form-control rounded-5 py-3 px-2" id="lastName" placeholder="Last Name"/>
                    </div>
                </div>
            </div>
            <div class="form-group mb-3">
    <div class="position-relative">
        <input type="email" class="form-control rounded-5 py-3 px-2" id="email" placeholder=" " onChange={handleChange}/>
        {email === '' && (<label for="email" class="position-absolute top-0 start-0 bottom-0 py-3 px-2 text-secondary">
        <i class="fa-regular fa-envelope fa-lg mx-2"></i> Your Email
        </label>)}
    </div>
</div>

            <div class="form-group mb-3">
                <textarea class="form-control rounded-5 py-3 px-2" id="message" placeholder="Message" rows="9"></textarea>
            </div>
            <div class="text-center">
        <button type="submit" class="btn  rounded-pill py-3 px-2 w-100" style={{backgroundColor:'#1D191C', color:'white'}}>Submit</button>
    </div>
            <div class=" mt-3 text-center mx-4">
                <label class="form-check-label" for="terms">By contacting us, you agree to our <b>Terms of Service</b> and <b>Privacy Policy</b>.</label>
            </div>
        </form>
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

export default ContactUs