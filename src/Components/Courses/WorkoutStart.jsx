import React, { useRef, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Link, useNavigate } from 'react-router-dom';

const WorkoutStart = () => {
  const [showModal, setShowModal] = useState(false);
  const [timerKey, setTimerKey] = useState(0); // State to reset the timer
  const countdownRef = useRef(null);
  const handleTimerComplete = () => {
    setShowModal(true);
  };
  const navigate = useNavigate();
  const nextworkout =() => {
    setShowModal(false);
    setTimerKey(prevKey => prevKey + 1);
  }

  return (
    
    <>
    
      <div className="container-fluid">
        <div className="row my-4">
          <div className="col-md-5 col-12">
            <div className="banner-container">
              <h1 className="banner-employes">Yoga Body Stretching</h1>
              <div className="banner-employes-underline"></div>
            </div>
            <h5 className="banner-employes"> for Absolute Beginners</h5>
          </div>
          <div className="col-md-5 col-12 mx-auto">
            <h5 className="text-secondary mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur. adipi elit, sed do eiusmod tempor incididunt ut labore consectetur.</h5>
          </div>
        </div>
      </div>

      <div className="container text-center align-items-center my-1">
        <div className="d-flex justify-content-center align-items-center my-2">
          <img className='img-fluid rounded-4' src="./img/courses/workoutdetails/workoutstart.png" width="660" height='380' alt="Workout" />
        </div>
        <div className='my-4 text-center align-items-center container'>
          <h5><b>Side Plank</b></h5>
          <div className="d-flex justify-content-center">
            <CountdownCircleTimer
              key={timerKey} // Use timerKey to reset the timer
              ref={countdownRef} // Set ref to access the countdown timer component
              isPlaying={!showModal} 
              duration={30} // Change the duration as needed
              colors={[["#1D191C"]]} // Set the countdown color to #1D191C
              strokeWidth={10} // Adjust the thickness of the timer's stroke
              size={150} // Set the size of the timer
              trailColor="#FFFFFF"
              onComplete={handleTimerComplete}
            >
              {({ remainingTime }) => (
                <div style={{ fontSize: '32px', fontWeight: '700' }}>{remainingTime}</div> // Customize the appearance of the timer text
              )}
            </CountdownCircleTimer>
            
          </div>
          <div className='my-3 col-md-2 mx-auto col-8'>
            <button className='btn rounded-pill px-2 py-3  w-100' onClick={nextworkout} style={{backgroundColor:'#1D191C', color:'white', fontSize:'18px'}}>Pause</button>

            </div>
            <div className=''>
            <div className="d-flex justify-content-center">
                <div className='mx-2'>
            <button className='btn rounded-pill px-5 py-3  w-100' onClick={nextworkout} style={{backgroundColor:'#e9e8e9', color:'#1D191C', fontSize:'16px'}}><><img src="./img/courses/workoutdetails/skipleft.png" alt="" className='mx-md-2 mb-1'/><b> Pause</b></></button>
                </div>
                <div className='mx-2'>
                <button className='btn rounded-pill px-5 py-3 w-100' onClick={nextworkout} style={{backgroundColor:'#e9e8e9', color:'#1D191C', fontSize:'16px'}}><><b>Skip </b><img src="./img/courses/workoutdetails/skipright.png" alt="" className='mx-md-2 mb-1'/></></button>                </div>
            </div>
            </div>
        </div>
      </div>

      {showModal && (
        <div className="modal show" id="paymentModal" tabIndex="-1" aria-labelledby="paymentModalLabel" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className="modal-dialog " style={{marginTop: '5%'}}>
            <div className="modal-content my-1 rounded-4">
                {/* <div className="modal-header">
                    <h5 className="modal-title" id="paymentModalLabel">Payment Successful</h5>
                    <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
                </div> */}
                <div className="modal-body text-center">
                    
                    <div className='my-2 pb-3 border-bottom'>
                    <img src="./img/courses/workoutdetails/workoutdone.png" alt="" />
                    <h4 className='my-3'><b>Congratulations!</b></h4>
                    <h6>You have completed the workout!</h6>
                    </div>
                    <div className="d-flex justify-content-center text-center mt-3 mb-2 text-secondary">
              <div className="px-3 mx-2">
                <p className="mb-2 h5">10</p>
                <p className="text-muted mb-0">Workout</p>
              </div>
              <div className="px-3 mx-2">
                <p className="mb-2 h5">340</p>
                <p className="text-muted mb-0">Cal</p>
              </div>
              <div className="px-3 mx-2">
                <p className="mb-2 h5">10:00</p>
                <p className="text-muted mb-0">Minutes</p>
              </div>
             
            </div>
            <div className='my-4 mx-3'>
                    <Link className='btn rounded-pill px-5 py-3  w-100' to={'/'} style={{backgroundColor:'#E2E2E2', color:'#9E9E9E', fontSize:'18px'}}>Go to Home</Link>
                    </div>
                    <div className='my-4  mx-3'>
                    <button className='btn rounded-pill px-5 py-3  w-100' onClick={nextworkout} style={{backgroundColor:'#1D191C', color:'white', fontSize:'18px'}}>Next Workout</button>
                    </div>
                </div>
                {/* <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                </div> */}
            </div>
        </div>
    </div>
      )}
    </>
  );
};

export default WorkoutStart;
