import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './instructorhome.css';
import InstructorSidebar from './InstructorSidebar';
import InstructoreHeader from './InstructoreHeader';
const InstructorCreateCourse = () => {

    const navigate = useNavigate();
    const handlecontinue =() =>{
      navigate('/instructorcreatecoursedetails')
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
  const [uploadedFileName, setUploadedFileName] = useState('');

    const handleFileUpload = (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile) {
            setUploadedFileName(uploadedFile.name);
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
    const [selectedassignmentFileName, setSelectedassignmentFileName] = useState(null);

  const handleassignmentFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedassignmentFileName(file.name);
    // You can handle the selected file here as needed
  };
  const handleAssignmentFileRemove = () => {
    setSelectedassignmentFileName(null);
  };
  const [selectedquizFileName, setSelectedquizFileName] = useState(null);

  const handlequizFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedquizFileName(file.name);
    // You can handle the selected file here as needed
  };
  const handlequizFileRemove = () => {
    setSelectedassignmentFileName(null);
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
            <h3 className='fw-bold'>Create Course</h3>
            <div className='row'>
           <div className="col-md-6 col-12 ">
           <div className="row h-100 instructorcreatecoursemidborder p-2">
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
                                <label className="form-label fw-bold" htmlFor="coursetitle">Course Title</label>
                                <input type="text" className="form-control rounded-4 py-2 px-2 border-0" id="coursetitle" placeholder="Course Title" style={{ backgroundColor: '#FAFAFA', height: '52px' }}  />
                            </div>
                            <div className="form-group my-3 ">
                                <label className="form-label fw-bold" htmlFor="courselevel">Course Level</label>
                                <input type="text" className="form-control rounded-4 py-2 px-2 border-0" id="courselevel" placeholder="Course Level" style={{ backgroundColor: '#FAFAFA', height: '52px' }}  />
                            </div>
                            <div className="form-group my-3">
                                <label className="form-label fw-bold" htmlFor="coursedescription">Course Description</label>
                                <textarea className="form-control rounded-4 py-3 px-2" id="coursedescription" placeholder="Description" rows="7" style={{ backgroundColor: '#FAFAFA' }}></textarea>
                            </div>
                            <div className="form-group my-3 border-bottom pb-4">
                                <label className="form-label fw-bold" htmlFor="coursedescription">Course Objective</label>
                                <textarea className="form-control rounded-4 py-3 px-2" id="coursedescription" placeholder="Objective" rows="7" style={{ backgroundColor: '#FAFAFA' }}></textarea>
                            </div>
                            <h5 className='fw-bold'>Course Books</h5>
                            <div className="form-group my-3">
            <label className="form-label fw-bold" htmlFor="courselevel">Upload Book</label>
            <div className="d-flex align-items-center">
                <input
                    type="text"
                    className="form-control py-2 px-2 border-0 uploadbookinput"
                    id="courselevel"
                    placeholder="Course Title"
                    value={uploadedFileName} // Display the uploaded file name
                    readOnly // Make the input read-only
                />
                <label htmlFor="file-upload" className="btn border mb-0 px-3 uploadbookbrowse">
                    Browse
                    <input
    id="file-upload"
    type="file"
    style={{ display: 'none' }}
    accept=".pdf,.doc,.docx,.txt" // Specify the accepted file types here
    onChange={handleFileUpload} // Listen for changes in the file input
/>

                </label>
            </div>
        </div>
                            <div className="form-group my-3 border-bottom pb-4">
                                <label className="form-label fw-bold" htmlFor="bookprice">Book Price</label>
                                <input type="text" className="form-control rounded-4 py-2 px-2 border-0" id="bookprice" placeholder="Price" style={{ backgroundColor: '#FAFAFA', height: '52px' }}  />
                            </div>
                            <h5 className='fw-bold'>Course Content</h5>
                            <div className="form-group my-3 ">
                                <label className="form-label fw-bold" htmlFor="courselevel">Upload Videos</label>
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
<div class="d-flex justify-content-center align-items-center my-3">
  <img src="./img/courseinstructor/home/Group 1686554024.png" className='img-fluid' alt="" />
  
</div>
<div className='text-center'>
<h6><b>Add more</b></h6>

</div>
<div className="form-group my-3 ">
                                <label className="form-label fw-bold" htmlFor="bookprice">Course Price</label>
                                <input type="text" className="form-control rounded-4 py-2 px-2 border-0" id="courseprice" placeholder="Course Price" style={{ backgroundColor: '#FAFAFA', height: '52px' }}  />
                            </div>
</div>


</div>

           </div>
           <div className="col-md-6 paddingtoadjustmidcreatecourse" >
           <div className="position-relative instructordropzone text-center d-flex flex-column justify-content-center align-items-center mt-2">
      <div>
        <img src="./img/courseinstructor/home/Document.png" className="instructorupload-icon" alt="Upload Icon" />
        <span className="d-block mt-2 fw-bold">{selectedassignmentFileName ? selectedassignmentFileName : 'Upload Assignment'}</span>
      </div>
      {selectedassignmentFileName?<><img src="./img/courseinstructor/home/Layer 2.png" alt="" onClick={handleAssignmentFileRemove} className="position-absolute top-0 end-0 mt-0 mr-3" style={{ zIndex: 1, cursor:'pointer' }} />
      
      <div className="instructoruploadassignment-input"></div></>:<><input
        type="file"
        className="instructorupload-input"
        accept=".pdf,.doc,.docx,.txt"
        onChange={handleassignmentFileSelect}
      /></>}
      
    </div>
<div className="formfieldwidth">
<div class="d-flex justify-content-center align-items-center my-3">
  <img src="./img/courseinstructor/home/Group 1686554024.png" className='img-fluid' alt="" />
  
</div>
<div className='text-center'>
<h6><b>Add more</b></h6>

</div>
</div>
<div className="position-relative instructordropzone text-center d-flex flex-column justify-content-center align-items-center mt-2">
      <div>
        <img src="./img/courseinstructor/home/Document.png" className="instructorupload-icon" alt="Upload Icon" />
        <span className="d-block mt-2 fw-bold">{selectedquizFileName ? selectedquizFileName : 'Upload Assignment'}</span>
      </div>
      {selectedquizFileName?<><img src="./img/courseinstructor/home/Layer 2.png" alt="" onClick={handlequizFileRemove} className="position-absolute top-0 end-0 mt-0 mr-3" style={{ zIndex: 1, cursor:'pointer' }} />
      
      <div className="instructoruploadassignment-input"></div></>:<><input
        type="file"
        className="instructorupload-input"
        accept=".pdf,.doc,.docx,.txt"
        onChange={handlequizFileSelect}
      /></>}
      
    </div>
<div className="formfieldwidth">
<div class="d-flex justify-content-center align-items-center my-3">
  <img src="./img/courseinstructor/home/Group 1686554024.png" className='img-fluid' alt="" />
  
</div>
<div className='text-center'>
<h6><b>Add more</b></h6>

</div>
<div className='my-5 col-md-12'>
                    <button className='btn rounded-pill px-5 py-4 shadow w-100 fw-bold' onClick={handlecontinue}  style={{backgroundColor:'#1D191C', color:'white'}}>Continue</button>
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

export default InstructorCreateCourse