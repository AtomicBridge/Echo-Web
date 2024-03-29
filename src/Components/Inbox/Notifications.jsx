import React from 'react';

const Notifications = () => {
  return (
    <div className="container-fluid" style={{minHeight:'488px'}}>
      <div className='mt-5'>
        <h1 className="how-it-works-title">Notification</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mx-auto text-center my-4">
              <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className="col-md-9 mx-auto " style={{marginBottom:'10%'}}>
          <span className='eighteenfont fw-bold'>Course Content</span>
          <div className="">
            {/* Render 5 notifications */}
            {[...Array(5)].map((index) => (
              <div key={index} className="my-3 py-2 shadow rounded-4 w-100" style={{ marginLeft: '15px' }}>
                <div className="d-flex justify-content-between p-price p-2">
                  <div className="d-flex flex-start">
                    <a className="me-3" href="#">
                      <img className="rounded-circle shadow-1-strong" src="./img/inbox/bell.png" alt="avatar" width="80" height="80" />
                    </a>
                    <div className="flex-grow-1 flex-shrink-1">
                      <div>
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="mb-1"><b>Title</b></p>
                          <div className='mt-1'><p>02 min ago</p></div>
                        </div>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrsccsy's...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
