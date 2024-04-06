import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
const ProgressTrackingCourseContent = () => {
   
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [showVideodoneModal, setShowVideodoneModal] = useState(false);
    const [showuploadModal, setShowuploadModal] = useState(false);
    const [fileSelected, setFileSelected] = useState(false);
    const [showAssignmentdoneModal, setShowAssignmentdoneModal] = useState(false);
    const [showQuizStartModal, setShowQuizStartModal] = useState(false);
    const [QuizCorrectAnswer, setQuizCorrectAnswer] = useState('');
    const [QuizCorrectAnswerValue, setQuizCorrectAnswerValue] = useState('How');
    const [QuizWrongAnswer, setQuizWrongAnswer] = useState('');
    const [QuizAnswerValue, setQuizAnswerValue] = useState('UnSelected');
    const [Quiznext, setQuiznext] = useState(false);
    const [isFigmaChecked, setIsFigmaChecked] = useState(false);
    const handleQuizAnswerValue = (e) => {
        const clickedValue = e.target.value;
    setQuiznext(true);
        // Check if the clicked answer is correct
        if (clickedValue === QuizCorrectAnswerValue) {
            // If correct, set the correct answer and value to highlight success
            setQuizCorrectAnswer(clickedValue);
            setQuizAnswerValue(clickedValue);
            
        } else {
            // If wrong, set the clicked answer as the wrong answer
            setQuizWrongAnswer(clickedValue);
            // Highlight the clicked answer as wrong
            setQuizAnswerValue(clickedValue);
            
        }
    };
    const handlecourseSuccessful = () => {
        setShowcourseSuccessfulModal(true);
        // Perform payment processing logic here
        setShowQuizStartModal(false);
    };
  
    const [showcourseSuccessfulModal, setShowcourseSuccessfulModal] = useState(false);
    
    // const handleQuizAnswer = () => {
    //     setFileSelected(true);
    // };
    const [selectedDocumentFileName, setSelectedDocumentFileName] = useState(null);
    const handleFileSelect = (event) => {
        const file = event.target.files[0];
    setSelectedDocumentFileName(file.name);
        setFileSelected(true);
    };
    const startvedio = () => {
       
        setShowVideoModal(true);
    };
    const handleVideodoneSuccessful = () => {
        setShowVideodoneModal(true);
        setShowVideoModal(false);
    };

    const closeModal = () => {
        setShowVideodoneModal(false);
    };

    const handleuploadModal = () => {
        setShowuploadModal(true);
        setShowAssignmentdoneModal(false);
        // Perform payment processing logic here
    };
    const handleAssignmentdone = () => {
        setShowAssignmentdoneModal(true);
        setShowuploadModal(false);
        // Perform payment processing logic here
    };
    const handleQuizStart = () => {
        setShowAssignmentdoneModal(false);
        setShowQuizStartModal(true);
    };
    useEffect(() => {
        let timer;
        if (showVideodoneModal ) {
            timer = setTimeout(() => {
                setShowVideodoneModal(false);
                setShowuploadModal(true);
                setShowcourseSuccessfulModal(false);
            }, 2000);
        }
        if ( showcourseSuccessfulModal) {
            setIsFigmaChecked(true);
            timer = setTimeout(() => {
                setShowcourseSuccessfulModal(false);
            }, 2000);
        }
        return () => clearTimeout(timer);
    }, [showVideodoneModal, showcourseSuccessfulModal]);
    
  return (
    <>
    <div className="container-fluid" style={{minHeight:'488px'}}>
    <div className='mt-5'>
    <h1 className="how-it-works-title">Progress Tracking</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mx-auto text-center my-4">
                                <p className="text-subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore</p>
                            </div>
                        </div>
                    </div>
    </div>
    <div className='container'>
    <div className="col-md-9 mx-auto mb-5">
    <span className='eighteenfont fw-bold'>Course Content</span>
    <div className="d-flex justify-content-start">
                            <div className="py-4">
                                <input
                                    className="form-check-input shadow rounded-2"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                    style={{ width: '24px', height: '24px' }}
                                    checked={isFigmaChecked} // Bind the checked state to the checkbox
                                    readOnly // Make the checkbox read-only
                                />
                            </div>
                            <div className="my-3 py-2 shadow rounded-3 w-100" style={{ marginLeft: '15px' }}>
                                <div className="d-flex justify-content-between align-items-center px-3 py-1">
                                    <div className="d-flex flex-start">
                                        <p className="m-0"><b>Why Using Figma</b></p>
                                    </div>
                                    <div>
                                        {isFigmaChecked?<i className="fa-solid fa-circle-play fa-lg" ></i>:<i className="fa-solid fa-circle-play fa-lg" onClick={() => startvedio()}></i>}
                                    </div>
                                </div>
                            </div>
                        </div>
<div className="d-flex justify-content-start">
    
        <div className='py-4 '>
        <input className="form-check-input shadow rounded-2" type="checkbox" value="" id="flexCheckDefault" style={{width:'24px', height:'24px'}}/>
        </div>
    
    
        <div className="my-3 py-2 shadow rounded-3 w-100" style={{marginLeft:'15px'}}>
            <div className="d-flex justify-content-between align-items-center px-3 py-1">
                <div className="d-flex flex-start">
                    <p className="m-0"><b>Why Using Figma</b></p>
                </div>
                <div>
                    <i className="fa-solid fa-circle-play fa-lg" onClick={() => startvedio()}></i>
                </div>
            </div>
        </div>
    
</div>
<div className="d-flex justify-content-start">
    
        <div className='py-4 '>
        <input className="form-check-input shadow rounded-2" type="checkbox" value="" id="flexCheckDefault" style={{width:'24px', height:'24px'}}/>
        </div>
    
    
        <div className="my-3 py-2 shadow rounded-3 w-100" style={{marginLeft:'15px'}}>
            <div className="d-flex justify-content-between align-items-center px-3 py-1">
                <div className="d-flex flex-start">
                    <p className="m-0"><b>Why Using Figma</b></p>
                </div>
                <div>
                    <i className="fa-solid fa-circle-play fa-lg" onClick={() => startvedio()}></i>
                </div>
            </div>
        </div>
    
</div>
<div className="d-flex justify-content-start">
    
        <div className='py-4 '>
        <input className="form-check-input shadow rounded-2" type="checkbox" value="" id="flexCheckDefault" style={{width:'24px', height:'24px'}}/>
        </div>
    
    
        <div className="my-3 py-2 shadow rounded-3 w-100" style={{marginLeft:'15px'}}>
            <div className="d-flex justify-content-between align-items-center px-3 py-1">
                <div className="d-flex flex-start">
                    <p className="m-0"><b>Why Using Figma</b></p>
                </div>
                <div>
                    <i className="fa-solid fa-circle-play fa-lg" onClick={() => startvedio()}></i>
                </div>
            </div>
        </div>
    
</div>
<div className="d-flex justify-content-start">
    
        <div className='py-4 '>
        <input className="form-check-input shadow rounded-2" type="checkbox" value="" id="flexCheckDefault" style={{width:'24px', height:'24px'}}/>
        </div>
    
    
        <div className="my-3 py-2 shadow rounded-3 w-100" style={{marginLeft:'15px'}}>
            <div className="d-flex justify-content-between align-items-center px-3 py-1">
                <div className="d-flex flex-start">
                    <p className="m-0"><b>Why Using Figma</b></p>
                </div>
                <div>
                    <i className="fa-solid fa-circle-play fa-lg" onClick={() => startvedio()}></i>
                </div>
            </div>
        </div>
    
</div>
<div className="d-flex justify-content-start">
    
        <div className='py-4 '>
        <input className="form-check-input shadow rounded-2" type="checkbox" value="" id="flexCheckDefault" style={{width:'24px', height:'24px'}}/>
        </div>
    
    
        <div className="my-3 py-2 shadow rounded-3 w-100" style={{marginLeft:'15px'}}>
            <div className="d-flex justify-content-between align-items-center px-3 py-1">
                <div className="d-flex flex-start">
                    <p className="m-0"><b>Why Using Figma</b></p>
                </div>
                <div>
                    <i className="fa-solid fa-circle-play fa-lg" onClick={() => startvedio()}></i>
                </div>
            </div>
        </div>
    
</div>
<div className="d-flex justify-content-start">
    
        <div className='py-4 '>
        <input className="form-check-input shadow rounded-2" type="checkbox" value="" id="flexCheckDefault" style={{width:'24px', height:'24px'}}/>
        </div>
    
    
        <div className="my-3 py-2 shadow rounded-3 w-100" style={{marginLeft:'15px'}}>
            <div className="d-flex justify-content-between align-items-center px-3 py-1">
                <div className="d-flex flex-start">
                    <p className="m-0"><b>Why Using Figma</b></p>
                </div>
                <div>
                    <i className="fa-solid fa-circle-play fa-lg" onClick={() => startvedio()}></i>
                </div>
            </div>
        </div>
    
</div>
<div className="d-flex justify-content-start">
    
        <div className='py-4 '>
        <input className="form-check-input shadow rounded-2" type="checkbox" value="" id="flexCheckDefault" style={{width:'24px', height:'24px'}}/>
        </div>
    
    
        <div className="my-3 py-2 shadow rounded-3 w-100" style={{marginLeft:'15px'}}>
            <div className="d-flex justify-content-between align-items-center px-3 py-1">
                <div className="d-flex flex-start">
                    <p className="m-0"><b>Why Using Figma</b></p>
                </div>
                <div>
                    <i className="fa-solid fa-circle-play fa-lg" onClick={() => startvedio()}></i>
                </div>
            </div>
        </div>
    
</div>
{showVideoModal && (
                    <div className="modal show" id="paymentModal" tabIndex="-1" aria-labelledby="paymentModalLabel" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog " style={{marginTop: '5%'}}>
                        <div className="modal-content my-1 w-100">
                            {/* <div className="modal-header">
                                <h5 className="modal-title" id="paymentModalLabel">Payment Successful</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
                            </div> */}
                            <div className="modal-body ">
                                
                            <ReactPlayer
                                    url="https://youtu.be/QD_L4IeA7qY?si=Tm2otr_pEB9ivQ4M"
                                    controls={true}
                                    width="100%"
                                    height="300px"
                                    onEnded={handleVideodoneSuccessful}
                                />

                            </div>
                            {/* <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                            </div> */}
                        </div>
                    </div>
                </div>
                
                )}
                {showVideodoneModal && (
                <div className="modal show" id="paymentModal" tabIndex="-1" aria-labelledby="paymentModalLabel" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog " style={{marginTop: '5%'}}>
                        <div className="modal-content my-1">
                            <div className="modal-body text-center">
                                <img src="./img/courses/coursepayment/coursepaymentsuccessfull.png" alt="" height='100' width='100'/>
                                <h4 className='my-3'><b>Submit Assignment</b></h4>
                                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate placerat porta. Ut commodo nulla vitae eleifend sodales. Fusce ornare.</h6>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {showuploadModal && (
                    <div className="modal show" id="paymentModal" tabIndex="-1" aria-labelledby="paymentModalLabel" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog " style={{marginTop: '5%'}}>
                        <div className="modal-content my-1">
                            
                        <div className="modal-body text-center">
                <div className="row h-100 justify-content-center align-items-center p-2">
                    <div className="dropzone text-center d-flex flex-column justify-content-center align-items-center">
                        <div>
                            <img src="./img/progresstracking/Vector.png" className="upload-icon" alt="Upload Icon" />
                            <span className="d-block">{selectedDocumentFileName ? selectedDocumentFileName :'Upload Document'}</span>
                        </div>
                        <input type="file" className="upload-input" accept=".pdf,.doc,.docx,.txt" onChange={handleFileSelect} />
                    </div>
                </div>
                <h6 className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate placerat porta. Ut commodo nulla vitae eleifend sodales. Fusce ornare.</h6>

                {fileSelected && (
                    <>
                        <div className="d-flex justify-content-center">
                            <button className="btn mx-2 rounded-pill my-1 w-100" style={{ height: '48px', width: '100px', backgroundColor:'#1D191C1A',color:'#1D191C' }} onClick={handleAssignmentdone}><b>Skip</b></button>
                            <button className="btn btn-dark rounded-pill mx-2 my-1 w-100" style={{ height: '48px', width: '100px' }}>Download</button>
                        </div>
                    </>
                )}
            </div>
                            
                        </div>
                    </div>
                </div>
                
                )}
{showAssignmentdoneModal && (
                    <div className="modal show" id="paymentModal" tabIndex="-1" aria-labelledby="paymentModalLabel" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog " style={{marginTop: '5%'}}>
                        <div className="modal-content my-1">
                            {/* <div className="modal-header">
                                <h5 className="modal-title" id="paymentModalLabel">Payment Successful</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
                            </div> */}
                            <div className="modal-body text-center">
                                
                                <img src="./img/courses/coursepayment/coursepaymentsuccessfull.png" alt="" height='100' width='100'/>
                                <h4 className='my-3'><b>Submit Assignment</b></h4>
                                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate placerat porta. Ut commodo nulla vitae eleifend sodales. Fusce ornare.</h6>
                                <button className="btn btn-dark rounded-pill mx-2 my-1 w-50 " style={{ height: '48px', width: '100px' }} onClick={handleQuizStart}>Start Quiz</button>
                            </div>
                            {/* <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                            </div> */}
                        </div>
                    </div>
                </div>
                
                )}
                {showQuizStartModal && (
                    <div className="modal show" id="paymentModal" tabIndex="-1" aria-labelledby="paymentModalLabel" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog " style={{marginTop: '5%'}}>
                        <div className="modal-content my-1 container">
                            {/* <div className="modal-header">
                                <h5 className="modal-title" id="paymentModalLabel">Payment Successful</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
                            </div> */}
                            <div className="modal-body text-center">
                            <div className="container">
                            <div className="row justify-content-center mt-3">
    <div className="col-1">
        <span className='fw-bold'>1/10</span>
    </div>
    <div className="col-10" >
        <span className='fw-bold' style={{marginRight:'25px'}}>Quiz</span>
    </div>
</div>

                            <div className="progress col-11 mx-auto rounded-3 my-3">
  <div className="progress-bar  rounded-3" role="progressbar" aria-valuenow="70"
  aria-valuemin="0" aria-valuemax="100" style={{width:'75%', backgroundColor:'#1D191C'}}>
    {/* 70% */}
  </div>
</div>
                                <img src="./img/progresstracking/Rectangle 148289.png" alt="" className='img-fluid' height='200' width='390'/>
                            </div>
                                <div className="container-fluid">
                                <h5 className='my-3'><b>........ lorem ipsum dolor set amet?</b></h5>
                                <hr />
                                
                                <button
  className={`btn ${QuizAnswerValue === 'How' ? (QuizAnswerValue === QuizCorrectAnswer  ? 'btn-success' : 'btn-danger') : 'btn-outline-dark'} mx-md-2 rounded-pill w-100 my-2`}
  style={{height:'48px', width:'100px'}}
  value='How'
  onClick={handleQuizAnswerValue}
  disabled={QuizAnswerValue !== 'UnSelected'}
>
  How
</button>

<button
  className={`btn ${QuizAnswerValue === 'What' ? (QuizAnswerValue === QuizCorrectAnswer ? 'btn-success' : 'btn-danger') : 'btn-outline-dark'} mx-md-2 rounded-pill w-100 my-2`}
  style={{height:'48px', width:'100px'}}
  value='What'
  onClick={handleQuizAnswerValue}
  disabled={QuizAnswerValue !== 'UnSelected'}
>
  What
</button>

<button
  className={`btn ${QuizAnswerValue === 'Which' ? (QuizAnswerValue === QuizCorrectAnswer ? 'btn-success' : 'btn-danger') : 'btn-outline-dark'} mx-md-2 rounded-pill w-100 my-2`}
  style={{height:'48px', width:'100px'}}
  value='Which'
  onClick={handleQuizAnswerValue}
  disabled={QuizAnswerValue !== 'UnSelected'}
>
  Which
</button>

<button
  className={`btn ${QuizAnswerValue === 'Where' ? (QuizAnswerValue === QuizCorrectAnswer ? 'btn-success' : 'btn-danger') : 'btn-outline-dark'} mx-md-2 rounded-pill w-100 my-2`}
  style={{height:'48px', width:'100px'}}
  value='Where'
  onClick={handleQuizAnswerValue}
  disabled={QuizAnswerValue !== 'UnSelected'}
  >
    Where
  </button>

                                {Quiznext ? <>
                                <p className='mt-2'>Correct Answer is: <b>{QuizCorrectAnswerValue}</b></p>
                                    <button className="btn btn-dark mx-2 rounded-pill  w-50" style={{ height: '48px', width: '100px' }} onClick={handlecourseSuccessful}><b>Continue</b></button>
                                </>:<button className="btn mx-2 rounded-pill my-1 w-50" style={{ height: '48px', width: '100px', backgroundColor:'#1D191C1A',color:'#1D191C' }} ><b>Skip</b></button>}

                                </div>

                            </div>
                            {/* <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                            </div> */}
                        </div>
                    </div>
                </div>
                
                )}

{showcourseSuccessfulModal && (
                    <div className="modal show" id="paymentModal" tabIndex="-1" aria-labelledby="paymentModalLabel" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog " style={{marginTop: '5%'}}>
                        <div className="modal-content my-1">
                            {/* <div className="modal-header">
                                <h5 className="modal-title" id="paymentModalLabel">Payment Successful</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
                            </div> */}
                            <div className="modal-body text-center">
                                
                                <img src="./img/courses/coursepayment/coursepaymentsuccessfull.png" alt="" height='100' width='100'/>
                                <h4 className='my-3'><b>Congratulation! Course Completed Successfully!</b></h4>
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
    </>
  )
}

export default ProgressTrackingCourseContent