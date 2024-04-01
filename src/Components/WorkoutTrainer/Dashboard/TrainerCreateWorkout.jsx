import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../CourseInstructor/Dashboard/instructorhome.css';
import InstructorSidebar from '../../CourseInstructor/Dashboard/InstructorSidebar';
import InstructoreHeader from '../../CourseInstructor/Dashboard/InstructoreHeader';
const TrainerCreateWorkout = () => {

    const navigate = useNavigate();
    const handlecontinue =() =>{
      navigate('/trainercreateworkoutdetails')
    }

  const [imageURL, setImageURL] = useState(null);
  const [showDropZone, setShowDropZone] = useState(true);

  const handleFileSelect = (event) => {
      const selectedImage = event.target.files[0];

      if (selectedImage) {
          const reader = new FileReader();
          reader.onload = () => {
              setImageURL(reader.result);
              setShowDropZone(false); // Hide the drop zone after selecting an image
          };
          reader.readAsDataURL(selectedImage);
      }
  };
    const [videoURL, setVideoURL] = useState('');
    const [showUploader, setShowUploader] = useState(true);

    const handleVideoUpload = (event) => {
        const file = event.target.files[0];
        const videoURL = URL.createObjectURL(file);
        setVideoURL(videoURL);
        setShowUploader(false);
    };

  return (
    <>
    <div className="overflow-hidden">
      <div className="row " style={{marginBottom:'5%'}}>
        {/* Sidebar */}
        <InstructorSidebar/>
        {/* Main Content */}
        <div className="col-md-10">
          <InstructoreHeader/>
          <div className='container-fluid my-4'>
            <h3 className='fw-bold'>Create Workout Plan</h3>
            <div className='row'>
           <div className="col-md-6 col-12 ">
           <div className="row h-100  p-2">
           <div>
            {showDropZone && (
                <div className="instructordropzone text-center d-flex flex-column justify-content-center align-items-center">
                    <div>
                        <img src="./img/courseinstructor/home/Camera.png" className="instructorupload-icon" alt="Upload Icon" />
                        <span className="d-block mt-2 fw-bold">Upload Image</span>
                    </div>
                    <input
                        type="file"
                        className="instructorupload-input"
                        accept="image/*"
                        onChange={handleFileSelect}
                    />
                </div>
            )}
            {imageURL && !showDropZone && (
                <>
                
                <div className="instructordropzoneuploadimg-container">
    <div className="instructordropzoneuploadimg">
        <img src={imageURL} alt="Uploaded" className="instructoruploaded-image" />
        <div>
        
        <img src="./img/courseinstructor/home/Group 1686554026.png" alt="" className="bottom-right-image" />
        <input
            type="file"
            className="instructoruploadimg-input rounded-circle"
            accept="image/*"
            onChange={handleFileSelect}
        /> 
        </div>
        {/* Uncomment the following input field if needed */}
        {/* <input
            type="file"
            className="instructoruploadimg-input"
            accept="image/*"
            onChange={handleFileSelect}
        /> */}
    </div>
</div>
                
                </>
            )}
        </div>
    <div className='formfieldwidth'>
    <div className="form-group my-3">
                                <label className="form-label fw-bold" htmlFor="workouttitle">Workout Title</label>
                                <input type="text" className="form-control rounded-4 py-2 px-2 border-0" id="workouttitle" placeholder="Workout Title" style={{ backgroundColor: '#FAFAFA', height: '52px' }}  />
                            </div>
                            <div className="form-group my-3 ">
                                <label className="form-label fw-bold" htmlFor="workoutlevel">Workout Level</label>
                                <input type="text" className="form-control rounded-4 py-2 px-2 border-0" id="workoutlevel" placeholder="Workout Level" style={{ backgroundColor: '#FAFAFA', height: '52px' }}  />
                            </div>
                            <div className="form-group my-3 ">
                                <label className="form-label fw-bold" htmlFor="workoutduration">Workout Duration</label>
                                <input type="text" className="form-control rounded-4 py-2 px-2 border-0" id="workoutduration" placeholder="Workout Duration" style={{ backgroundColor: '#FAFAFA', height: '52px' }}  />
                            </div>
                            <div className="form-group my-3 border-bottom pb-4">
                                <label className="form-label fw-bold" htmlFor="totalworkout">Total Workout</label>
                                <input type="text" className="form-control rounded-4 py-2 px-2 border-0" id="totalworkout" placeholder="Total Workout" style={{ backgroundColor: '#FAFAFA', height: '52px' }}  />
                            </div>
                           
                            
                            <h5 className='fw-bold'>Workout Activity</h5>
                            <div className="form-group my-3 ">
                                <label className="form-label fw-bold" htmlFor="courselevel">Upload Workout Video</label>
                                <div className="d-flex align-items-center">
                                  <div>
                                    <span className='border-0 px-4 py-3 rounded-circle ' style={{ backgroundColor: '#1D191C1A', height: '52px' }}>1</span>
                                  </div>
                                <div className="d-flex align-items-center w-100">
                                <input type="text" className="form-control py-2 px-2 border-0 rounded-4 mx-3"  style={{ backgroundColor: '#FAFAFA', height: '52px' }} id="courselevel" placeholder="Title"   />
                                <img src="./img/courseinstructor/home/Delete.png" className='' alt="" />
                                {/* <label htmlFor="file-upload" className="btn border mb-0 px-3 uploadbookbrowse">
        Browse
        <input id="file-upload" type="file" style={{ display: 'none' }} />
    </label> */}
                                </div>
                                </div>
                            </div>
                            
    </div>
    <div>
            {showUploader ? (
                <div className="instructordropzone text-center d-flex flex-column justify-content-center align-items-center">
                    <div>
                        <img src="./img/courseinstructor/home/Video.png" className="instructorupload-icon" alt="Upload Icon" />
                        <span className="d-block mt-2 fw-bold">Upload Video</span>
                    </div>
                    <input type="file" className="instructorupload-input" accept="video/*" onChange={handleVideoUpload} />
                </div>
            ) : (
              <>
              
                <div className="instructordropzoneuploadvideo">
                    <video className="instructoruploaded-video" controls>
                        <source src={videoURL} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/* <input
                        type="file"
                        className="instructoruploadvideo-input"
                        accept="image/*"
                        onChange={handleFileSelect}
                    /> */}
                </div>
              </>
            )}
        </div>
<div className="formfieldwidth">
<div className="d-flex justify-content-center align-items-center my-3">
  <img src="./img/courseinstructor/home/Group 1686554024.png" className='img-fluid' alt="" />
  
</div>
<div className='text-center'>
<h6><b>Add more</b></h6>

</div>
<div className="form-group my-3 ">
                                <label className="form-label fw-bold" htmlFor="workoutsessionprice">Workout Session Price</label>
                                <input type="text" className="form-control rounded-4 py-2 px-2 border-0" id="workoutsessionprice" placeholder="Workout Session Price" style={{ backgroundColor: '#FAFAFA', height: '52px' }}  />
                            </div>
                            <div className='my-5 col-md-12'>
                    <button className='btn rounded-pill px-5 py-3 shadow w-100 fw-bold' onClick={handlecontinue}  style={{backgroundColor:'#1D191C', color:'white'}}>Continue</button>
                    </div>
</div>


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

export default TrainerCreateWorkout