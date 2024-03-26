import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './instructorhome.css';
import InstructorSidebar from './InstructorSidebar';
import InstructoreHeader from './InstructoreHeader';
const InstructorCreateCourse = () => {
    const [fileSelected, setFileSelected] = useState(false);

    const handleFileSelect = () => {
        setFileSelected(true);
    };
  return (
    <>
    <div className="overflow-hidden">
      <div className="row">
        {/* Sidebar */}
        <InstructorSidebar/>
        {/* Main Content */}
        <div className="col-md-10">
          <InstructoreHeader/>
          <div className='container-fluid my-4'>
            <h3 className='fw-bold'>Create Course</h3>
            <div className='row'>
           <div className="col-md-6 col-12">
           <div className="row h-100  p-2">
    <div className="instructordropzone text-center d-flex flex-column justify-content-center align-items-center">
        <div>
            <img src="./img/courseinstructor/home/Camera.png" className="instructorupload-icon" alt="Upload Icon" />
            <span className="d-block mt-2 fw-bold">Upload Image</span>
        </div>
        <input type="file" className="instructorupload-input" onChange={handleFileSelect} accept="image/*" />
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
                            <div className="form-group my-3 ">
                                <label className="form-label fw-bold" htmlFor="courselevel">Upload Book</label>
                                <div className="d-flex align-items-center">
                                <input type="text" className="form-control py-2 px-2 border-0 uploadbookinput" id="courselevel" placeholder="Course Title"   />
                                <label htmlFor="file-upload" className="btn border mb-0  uploadbookbrowse">
        Browse
        <input id="file-upload" type="file" style={{ display: 'none' }} />
    </label>
                                </div>
                            </div>
                            <div className="form-group my-3 border-bottom pb-4">
                                <label className="form-label fw-bold" htmlFor="coursedescription">Course Objective</label>
                                <textarea className="form-control rounded-4 py-3 px-2" id="coursedescription" placeholder="Objective" rows="7" style={{ backgroundColor: '#FAFAFA' }}></textarea>
                            </div>
    </div>
</div>

           </div>
           <div className="col-md-6">
            
           </div>
            </div>
          </div>
          <div className="plus-img">
          <img className='img-fluid' src="./img/courseinstructor/home/plusimg.png" alt="plus" />
        </div>
        </div>
        
      </div>
    </div>
  </>
  )
}

export default InstructorCreateCourse