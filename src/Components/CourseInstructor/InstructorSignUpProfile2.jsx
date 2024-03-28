import React, { useEffect, useState } from 'react'
import AuthenticateImage from '../User/AuthenticateImage'
import { useNavigate } from 'react-router-dom';

const InstructorSignUpProfile2 = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const handleAccountSuccessful = () => {
        setShowModal(true);
        // Perform payment processing logic here
    };
    useEffect(() => {
        let timer;
        if (showModal) {
          timer = setTimeout(() => {
            setShowModal(false);
            navigate('/login');
          }, 2000);
        }
        return () => clearTimeout(timer);
    }, [showModal]);
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
                                            <div className="">
                                            <div className="d-flex justify-content-between  my-3">
                                                <div>
                                                    <img src="./img/courseinstructor/signup/Frame 1686553983.png" alt="" />
                                                </div>
                                                <div className='w-100'>
                                                    <input
                                                        type="text"
                                                        className="form-control rounded-4 py-2 px-2 border-0 mx-3"
                                                        id="whatsappLink"
                                                        placeholder="Add WhatsApp Link"
                                                        style={{ backgroundColor: '#FAFAFA', height: '48px' }}
                                                        pattern="^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$"
                                                        title="Please enter a valid URL"

                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between  my-3">
                                                <div>
                                                    <img src="./img/courseinstructor/signup/Frame 1686553983 (1).png" alt="" />
                                                </div>
                                                <div className='w-100'>
                                                    <input
                                                        type="text"
                                                        className="form-control rounded-4 py-2 px-2 border-0 mx-3"
                                                        id="facebookLink"
                                                        placeholder="Add Facebook Link"
                                                        style={{ backgroundColor: '#FAFAFA', height: '48px' }}
                                                        pattern="^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$"
                                                        title="Please enter a valid URL"

                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between  my-3">
                                                <div>
                                                    <img src="./img/courseinstructor/signup/Frame 1686553983 (2).png" alt="" />
                                                </div>
                                                <div className='w-100'>
                                                    <input
                                                        type="text"
                                                        className="form-control rounded-4 py-2 px-2 border-0 mx-3"
                                                        id="twitterLink"
                                                        placeholder="Add Twitter Link"
                                                        style={{ backgroundColor: '#FAFAFA', height: '48px' }}
                                                        pattern="^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$"
                                                        title="Please enter a valid URL"

                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between  my-3">
                                                <div>
                                                    <img src="./img/courseinstructor/signup/Frame 1686553983 (3).png" alt="" />
                                                </div>
                                                <div className='w-100'>
                                                    <input
                                                        type="text"
                                                        className="form-control rounded-4 py-2 px-2 border-0 mx-3"
                                                        id="instagramLink"
                                                        placeholder="Add Instagram Link"
                                                        style={{ backgroundColor: '#FAFAFA', height: '48px' }}
                                                        pattern="^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$"
                                                        title="Please enter a valid URL"

                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between  my-3">
                                                <div>
                                                    <img src="./img/courseinstructor/signup/Frame 1686553983 (4).png" alt="" />
                                                </div>
                                                <div className='w-100'>
                                                    <input
                                                        type="text"
                                                        className="form-control rounded-4 py-2 px-2 border-0 mx-3"
                                                        id="websiteLink"
                                                        placeholder="Add Webiste Link"
                                                        style={{ backgroundColor: '#FAFAFA', height: '48px' }}
                                                        pattern="^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$"
                                                        title="Please enter a valid URL"

                                                    />
                                                </div>
                                            </div>
                                            </div>


                                            <div className="">
                                                <div className="text-center align-items-center">
                                                    <div className='mb-3 mt-5  mx-auto'>
                                                        <button className='btn rounded-pill px-5 py-3 shadow w-100' onClick={(e) => { e.preventDefault(); handleAccountSuccessful(); }} style={{ backgroundColor: '#1D191C', color: 'white' }}>Continue</button>
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
                                <h4 className='my-3'><b>Account Setup Successfully!</b></h4>
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
                        <AuthenticateImage />
                    </div>
                </div>
            </section>
        </>
    )
}

export default InstructorSignUpProfile2