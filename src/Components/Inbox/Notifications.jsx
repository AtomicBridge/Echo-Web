import React from 'react';

const Notifications = () => {
  return (
    <div className="container-fluid" style={{minHeight:'488px'}}>
      <div className='mt-5'>
        <h1 className="how-it-works-title" style={{fontSize:'56px'}}>Notification</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mx-auto text-center my-4">
              <span className="text-subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore</span>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className="col-md-9 mx-auto " style={{marginBottom:'10%'}}>
          <h3 className=' fw-bold'>Notification</h3>
          <div className="">
            {/* Render 5 notifications */}
            {[...Array(5)].map((index) => (
              <div key={index} className="my-3 py-2 shadow rounded-4 w-100" style={{ marginLeft: '15px' }}>
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
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Loremb Ipsum has been the industrsccsy's...</span>
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
