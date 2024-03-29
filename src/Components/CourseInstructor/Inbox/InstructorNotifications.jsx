import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Dashboard/instructorhome.css';
import InstructorSidebar from '../Dashboard/InstructorSidebar';
import InstructoreHeader from '../Dashboard/InstructoreHeader';


const InstructorNotifications = () => {
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
              <h3 className='fw-bold'>Notification</h3>
              <div className="">
            {/* Render 5 notifications */}
            {[...Array(5)].map((index) => (
              <div key={index} className="my-3 py-2 shadow rounded-4 col-md-11" >
                <div className="d-flex justify-content-between p-price p-2">
                  <div className="d-flex flex-start w-100 mx-3">
                    <a className="me-3" href="#">
                      <img className="rounded-circle shadow-1-strong" src="./img/inbox/bell.png" alt="avatar" width="80" height="80" />
                    </a>
                    <div className="flex-grow-1 flex-shrink-1">
                      <div>
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="mb-1"><b>Title</b></p>
                          <div className='mt-1'><p>02 min ago</p></div>
                        </div>
                      </div>
                      <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum been the industrscedcs Ipsum has been Ipsum has been the industrsccsy's...</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
            </div>
          
          </div>
          
        </div>
      </div>
    </>
  )
}

export default InstructorNotifications