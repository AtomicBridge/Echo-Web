import React, { useEffect, useState } from 'react'

const CoursePayment = () => {
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
    
    const handleConfirmPayment = () => {
        setShowModal(true);
        // Perform payment processing logic here
    };
  return (
    <>
    <div className="container-fluid">
    <div className="row my-4">
    <div className="col-md-5 col-12 ">
        <div className="banner-container">
            <h1 className="banner-employes ">UI UX Designer Course</h1>
            <div className="banner-employes-underline"></div>
        </div>
        <h5 className="banner-employes "> for Absolute Beginners</h5>
    </div>
<div className="col-md-5 col-12 mx-auto">
<h5 className="text-secondary mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur. adipi elit, sed do eiusmod tempor incididunt ut labore consectetur.</h5>

</div>
</div>

</div>
    <div className='container  py-3 col-md-6'>
        <div className="text-center align-items-center">

        
<h4><b>Select Payment Method</b></h4>
<h4 className='text-secondary'>Kindly choose your preferred payment method for making the payment!</h4>
<div className="my-3">
    <div className="my-3 py-2 shadow rounded-4">
        <div className="d-flex justify-content-between align-items-center px-3 ">
            <div className="d-flex flex-start mt-1">
                <h6>
                    <img src="./img/courses/coursepayment/credit-card (1) 1.png" alt="" className='mx-2'/>
                    <b>Credit Card</b>
                </h6>
            </div>
            <div>
                <input type="radio" name="paymentMethod" id="paymentMethod1" className="mx-2" style={{ width: '25px', height: '25px', accentColor: '#1D191C' }}/>
                <label htmlFor="paymentMethod1"></label>
            </div>
        </div>
    </div>
    <div className="my-3 py-2 shadow rounded-4">
        <div className="d-flex justify-content-between align-items-center px-3 ">
            <div className="d-flex flex-start mt-1">
                <h6>
                    <img src="./img/courses/coursepayment/credit-card (1) 2.png" alt="" className='mx-2'/>
                    <b>Visa Pay</b>
                </h6>
            </div>
            <div>
                <input type="radio" name="paymentMethod" id="paymentMethod2" className="mx-2" style={{ width: '25px', height: '25px', accentColor: '#1D191C' }}/>
                <label htmlFor="paymentMethod2"></label>
            </div>
        </div>
    </div>
    <div className="my-3 py-2 shadow rounded-4">
        <div className="d-flex justify-content-between align-items-center px-3 ">
            <div className="d-flex flex-start mt-1">
                <h6>
                    <img src="./img/courses/coursepayment/credit-card (1) 2 (1).png" alt="" className='mx-2'/>
                    <b>PayPal</b>
                </h6>
            </div>
            <div>
    <input type="radio" name="paymentMethod" id="paymentMethod3" className="mx-2" style={{ width: '25px', height: '25px', accentColor: '#1D191C' }} />
    <label htmlFor="paymentMethod3"></label>
</div>

        </div>
    </div>
</div>
<div className='mt-5'>
<h4><b>Select Payment Method</b></h4>
<h4 className='text-secondary'>Kindly choose your preferred payment method for making the payment!</h4>
</div>
</div>
<div className="row my-3">
<div className="col-md-6">
    <label className="form-label" for="formNameOnCard"><b>Card Name</b></label>
    <input type="text" id="formNameOnCard" className="form-control bg-light border-0 rounded-3 py-2"/>
  </div>
  <div className="col-md-6">
    <label className="form-label" for="formCardNumber"><b>Card Number</b></label>
    <input type="text" id="formCardNumber" className="form-control bg-light border-0 rounded-3 py-2"/>
  </div>
  <div className="col-md-6 my-3">
    <label className="form-label" for="formNameOnCard"><b>Expiry Date</b></label>
    <input type="date" id="formNameOnCard" className="form-control bg-light border-0 rounded-3 py-2"/>
  </div>
  <div className="col-md-6 my-3">
    <label className="form-label" for="formCardNumber"><b>Expiry Date</b></label>
    <input type="date" id="formCardNumber" className="form-control bg-light border-0 rounded-3 py-2"/>
  </div>
  
</div>
<div className='mb-4 mb-5 col-md-5 mx-auto'>
    <button className='btn rounded-pill px-5 py-3 shadow w-100' onClick={handleConfirmPayment} style={{backgroundColor:'#1D191C', color:'white'}} >Confirm Payment</button>
</div>

<div>
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
                                <h4 className='my-3'><b>Payment Successful!</b></h4>
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
    </>
  )
}

export default CoursePayment