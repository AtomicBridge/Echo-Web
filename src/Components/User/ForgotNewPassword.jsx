import React, { useState } from 'react';
import "./login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom'
import AuthenticateImage from './AuthenticateImage';
import { useEffect } from 'react';
const ForgotNewPassword = () => {
    const [newpassword, setnewPassword] = useState('');
    const [shownewPassword, setShownewPassword] = useState(false);
    const [confirmnewpassword, setconfirmnewPassword] = useState('');
    const [showconfirmnewPassword, setShowconfirmnewPassword] = useState(false);
    const navigate = useNavigate();
    const handleChangenewPassword = (e) => {
        setnewPassword(e.target.value);
      };
      const togglenewPasswordVisibility = () => {
        setShownewPassword(!shownewPassword);
      };
      const handleChangeconfirmnewPassword = (e) => {
        setconfirmnewPassword(e.target.value);
      };
      const toggleconfirmnewPasswordVisibility = () => {
        setShowconfirmnewPassword(!showconfirmnewPassword);
      };
      const handlePasswordSuccessful = () => {
        setShowModal(true);
        // Perform payment processing logic here
    };
  
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        let timer;
        if (showModal) {
          timer = setTimeout(() => {
            setShowModal(false);
          }, 2000);
        }
        return () => clearTimeout(timer);
    }, [showModal]);
  return (
    <>
        <section className=" overflow-hidden">
          <div className="">
            <div className="row">
              <div className="col-md-6 text-center text-sm-start " style={{color:'#1D191C'}}>
                <div className="container-fluid d-flex justify-content-center align-items-center">
                  <div className="w-100">
                    <div className="px-xl-5 ms-xl-4 mt-4 mb-5">
                      <img className='mb-2' src="./img/user/login/logo 1 (1).png" alt="" />
                      <span className="fw-bold eighteenfont mx-2">Powering Your Platform</span>
                    </div>
                    <div className="d-flex flex-column align-items-center align-items-sm-start h-custom-2 px-xl-5 ms-xl-4 " style={{marginTop:'25%'}}>
                      <form style={{ maxWidth: '100%', width: '100%' }}>
                        <h4 className="fw-bold mb-2 pb-2">Secure Your Account</h4>
                        <div className='col-md-9'>
                        <p className='text-secondary eighteenfont'>Almost there! Create a new password for your ECHO Account to keep it secure. Remember to choose a strong and unique password.</p>

                        </div>
                        <div>
                            <div className="form-outline mb-2">
                      <label className="form-label fw-bold" htmlFor="form2Example19">New Password</label>
                        <div className="position-relative d-flex align-items-center">
                          <input
                            type={shownewPassword ? "text" : "password"}
                            className="form-control rounded-4 py-2 px-2 border-0"
                            id="newpassword"
                            placeholder=" "
                            style={{
                              backgroundColor: '#FAFAFA',
                              height: '52px',
                              // fontSize: '24px'
                            }}
                            value={newpassword}
                            onChange={handleChangenewPassword}
                          />
                          {newpassword === '' && (<label
                            htmlFor="newpassword"
                            className="position-absolute top-0 start-0 bottom-0 py-3 px-2 text-secondary"
                          >
                            <img src="./img/user/login/lock.png" alt="" className='mx-2'/>New Password
                          </label>)}
                          <div className="position-absolute text-secondary top-0 end-0 bottom-0 py-3 px-2">
                            <FontAwesomeIcon
                              icon={shownewPassword ? faEyeSlash : faEye}
                              onClick={togglenewPasswordVisibility}
                              style={{ cursor: 'pointer', userSelect: 'none' }}
                            />
                          </div>
                        </div>
                      </div> 
                      <div className="form-outline mb-2">
                      <label className="form-label fw-bold" htmlFor="form2Example18">Confirm New Password</label>
                        <div className="position-relative d-flex align-items-center">
                          <input
                            type={showconfirmnewPassword ? "text" : "password"}
                            className="form-control rounded-4 py-2 px-2 border-0"
                            id="confirmnewpassword"
                            placeholder=" "
                            style={{
                              backgroundColor: '#FAFAFA',
                              height: '52px',
                              // fontSize: '24px'
                            }}
                            value={confirmnewpassword}
                            onChange={handleChangeconfirmnewPassword}
                          />
                          {confirmnewpassword === '' && (<label
                            htmlFor="password"
                            className="position-absolute top-0 start-0 bottom-0 py-3 px-2 text-secondary"
                          >
                            <img src="./img/user/login/lock.png" alt="" className='mx-2'/> Password
                          </label>)}
                          <div className="position-absolute text-secondary top-0 end-0 bottom-0 py-3 px-2">
                            <FontAwesomeIcon
                              icon={showconfirmnewPassword ? faEyeSlash : faEye}
                              onClick={toggleconfirmnewPasswordVisibility}
                              style={{ cursor: 'pointer', userSelect: 'none' }}
                            />
                          </div>
                        </div>
                      </div>
                        </div>
                        
                        <div className="">
                        <div className="text-center align-items-center">
                        
  
  <div className='mb-3 mt-5  mx-auto'>
      <button className='btn rounded-pill px-5 py-3 shadow w-100' onClick={(e) => { e.preventDefault(); handlePasswordSuccessful(); }} style={{backgroundColor:'#1D191C', color:'white'}} >Continue</button>
  </div>
  
                        </div>
                        </div>
  
                      </form>
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
                                <h4 className='my-3'><b>Reset Password Successful!</b></h4>
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
  <AuthenticateImage/>
  
            </div>
          </div>
        </section>
      </>
  )
}

export default ForgotNewPassword