import React, { useEffect, useState } from 'react';
import AuthenticateImage from '../User/AuthenticateImage';
import { useNavigate } from 'react-router-dom';

const TrainerSignUpProfile2 = () => {
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
    }, [showModal, navigate]);

    const accountTypes = [
        'Affective Exercise',
        'Fitness Testing',
        'Flexibility',
        'Fitness',
        'Fitness Testing',
        'Flexibility',
        'Arij',
        'Amish',
        'Fitness Testing'
    ];

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
                                            <h4 className="fw-bold mb-2 pb-2">Select Expertise</h4>
                                            <div className='col-md-9'>
                                                <p className='text-secondary eighteenfont'>Check your email inbox for the OTP code we sent you. Please enter it below to proceed.</p>
                                            </div>
                                            <div className='container'>
                                                {accountTypes.map((type, index) => (
                                                    <div key={index} className="d-flex justify-content-between my-1">
                                                        <div>
                                                            <p className='fw-bold'>{type}</p>
                                                        </div>
                                                        <div>
                                                            <input className="form-check-input" style={{ height: '24px', width: '24px', borderRadius: '50%' }} type="checkbox" value="" id={`defaultCheck${index + 1}`} />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="">
                                                <div className="text-center align-items-center">
                                                    <div className='mb-3 mt-5 mx-auto'>
                                                        <button className='btn rounded-pill px-5 py-3 shadow w-100' onClick={(e) => { e.preventDefault(); handleAccountSuccessful(); }} style={{ backgroundColor: '#1D191C', color: 'white' }}>Continue</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        {showModal && (
                                            <div className="modal show" id="paymentModal" tabIndex="-1" aria-labelledby="paymentModalLabel" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                                <div className="modal-dialog " style={{ marginTop: '5%' }}>
                                                    <div className="modal-content my-1">
                                                        <div className="modal-body text-center">
                                                            <img src="./img/courses/coursepayment/coursepaymentsuccessfull.png" alt="" height='100' width='100' />
                                                            <h4 className='my-3'><b>Account Setup Successfully!</b></h4>
                                                            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate placerat porta. Ut commodo nulla vitae eleifend sodales. Fusce ornare.</h6>
                                                        </div>
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
    );
}

export default TrainerSignUpProfile2;
