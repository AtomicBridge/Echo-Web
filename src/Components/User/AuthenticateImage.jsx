import React from 'react'

const AuthenticateImage = () => {
  return (
    <>

<div className="col-md-6 px-0 d-none d-md-block position-relative">
  <img src="./img/user/login/authenticatebackgroound.png"
    alt="Login image" className="w-100 " style={{ objectFit: 'cover', objectPosition: 'left', height:'100vh', minHeight:'100%' }} />
  <div className="position-absolute bottom-0 start-50 translate-middle-x  text-white mb-5">
    <h3 className="fw-bold my-3">Welcome to Your Personalized Fitness Journey!</h3>
    <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius vehicula malesuada. Proin vehicula erat massa, vitae dictum ex bibendum ut. Aenean aliquam hendrerit dui a varius.</p>
    <div className="d-flex justify-content-end mb-5">
      <div className='mx-2'>
        <img src="./img/user/login/leftarrow.png" alt="" />
      </div>
      <div className='mx-2'>
        <img src="./img/user/login/rightarrow.png" alt="" />
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default AuthenticateImage