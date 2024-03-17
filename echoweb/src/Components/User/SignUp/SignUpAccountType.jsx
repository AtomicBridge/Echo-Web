import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthenticateImage from '../AuthenticateImage';

const SignUpAccountType = () => {
    const [selectedAccountType, setSelectedAccountType] = useState(null);
    const navigate = useNavigate();

    const handleContinue = () => {
        switch (selectedAccountType) {
            case 'user':
                navigate('/usersignupprofile1');
                break;
            case 'instructor':
                // navigate('/instructorsignup');
                break;
            case 'trainer':
                // navigate('/trainersignup');
                break;
            default:
                // Handle default case or error
                break;
        }
    };

    const handleAccountTypeSelect = (accountType) => {
        setSelectedAccountType(accountType);
    };

    return (
        <>
            <section className="overflow-hidden">
                <div className="">
                    <div className="row">
                        <div className="col-md-6 text-center text-sm-start" style={{ color: '#1D191C' }}>
                            <div className="container-fluid d-flex justify-content-center align-items-center">
                                <div className="w-100">
                                    <div className="px-xl-5 ms-xl-4 mt-4 mb-5">
                                        <img className='mb-2' src="./img/user/login/logo 1 (1).png" alt="" />
                                        <span className="fw-bold eighteenfont mx-2">Powering Your Platform</span>
                                    </div>
                                    <div className="d-flex flex-column align-items-center align-items-sm-start h-custom-2 px-xl-5 ms-xl-4" style={{ marginTop: '25%' }}>
                                        <form style={{ maxWidth: '100%', width: '100%' }}>
                                            <h4 className="fw-bold mb-2 pb-2">Choose Your Account Type</h4>
                                            <div className='col-md-9'>
                                                <p className='text-secondary eighteenfont'>Check your email inbox for the OTP code we sent you. Please enter it below to proceed.</p>
                                            </div>
                                            <div className="container p-price mt-3 border rounded-3" onClick={() => handleAccountTypeSelect('user')} style={{ cursor: 'pointer', opacity: selectedAccountType === 'user' ? 1 : 0.5 }}>
                                            <div class="d-flex flex-start p-2">
                      <a class="me-3" href="#">
                        <img class="rounded-circle shadow-1-strong "
                          src="./img/user/signup/Profile (1).png" alt="avatar"
                          width="52" height="52" />
                      </a>
                      <div class="flex-grow-1 flex-shrink-1">
                        <div className='text-start'>
                        
                            <p class="mb-0">
                            <b>I am User</b>
                            </p>
                          
                          <span style={{fontSize:'14px'}}>Lorem ipsum dolor sit amet, consectetur adipi elit eclipe</span>
                        </div>
                      </div>
                    </div>
                                            </div>
                                            <div className="container p-price mt-3 border rounded-3" onClick={() => handleAccountTypeSelect('instructor')} style={{ cursor: 'pointer', opacity: selectedAccountType === 'instructor' ? 1 : 0.5 }}>
                                            <div class="d-flex flex-start p-2">
                      <a class="me-3" href="#">
                        <img class="rounded-circle shadow-1-strong "
                          src="./img/user/signup/Profile (1).png" alt="avatar"
                          width="52" height="52" />
                      </a>
                      <div class="flex-grow-1 flex-shrink-1">
                        <div className='text-start'>
                        
                            <p class="mb-0">
                            <b>I am Instructor</b>
                            </p>
                          
                          <span style={{fontSize:'14px'}}>Lorem ipsum dolor sit amet, consectetur adipi elit eclipe</span>
                        </div>
                      </div>
                    </div>
                                            </div>
                                            <div className="container p-price mt-3 border rounded-3" onClick={() => handleAccountTypeSelect('trainer')} style={{ cursor: 'pointer', opacity: selectedAccountType === 'trainer' ? 1 : 0.5 }}>
                                            <div class="d-flex flex-start p-2">
                      <a class="me-3" href="#">
                        <img class="rounded-circle shadow-1-strong "
                          src="./img/user/signup/Profile (1).png" alt="avatar"
                          width="52" height="52" />
                      </a>
                      <div class="flex-grow-1 flex-shrink-1">
                        <div className='text-start'>
                        
                            <p class="mb-0">
                            <b>I am Trainer</b>
                            </p>
                          
                          <span style={{fontSize:'14px'}}>Lorem ipsum dolor sit amet, consectetur adipi elit eclipe</span>
                        </div>
                      </div>
                    </div>
                                            </div>
                                            <div className="">
                                                <div className="text-center align-items-center">
                                                    <div className='mb-3 mt-5  mx-auto'>
                                                        <button className='btn rounded-pill px-5 py-3 shadow w-100' onClick={handleContinue} style={{ backgroundColor: '#1D191C', color: 'white' }} disabled={!selectedAccountType}>Continue</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <AuthenticateImage />
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUpAccountType;