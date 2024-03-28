import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const InstructorSidebar = () => {
    const location = useLocation();
    const [currentURL, setCurrentURL] = useState(location.pathname);
    const [userlogged, setuserlogged] = useState(localStorage.getItem('loggedInUser'))
  const navigate = useNavigate();
    useEffect(() => {
      setCurrentURL(location.pathname);
    }, [location.pathname]);
    // const [activeLink, setActiveLink] = useState(null);

    // const handleLinkClick = (event) => {
    //   setActiveLink(currentURL);
    // };
    // const handleLinkClickProgress = (event) => {
    //     setActiveLink(event.target.innerText);
    //   };
    //   const handleLinkClickSettings = (event) => {
    //     setActiveLink(event.target.innerText);
    //   };


      const handleLogout = () => {
        // Remove data of 'loggedInUser' from localStorage
        localStorage.removeItem('loggedInUser');
        // Update the userlogged state to false
        setuserlogged(false);
        navigate('/login');
    };
  return (
    <>
    <div className="col-md-2 sidebarhide p-3 text-bg-light" style={{maxHeight:'1024px'}}>
            <div className="container">
            <div className="d-flex flex-column flex-shrink-0">
              <div className="d-flex align-items-center mb-3 me-md-auto  ">
                <img className='fs-4 mx-4 img-fluid' src="./img/courseinstructor/header/logo 2.png" alt="" />
              </div>
              <hr />
              <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item my-2">
                  <Link to='/instructorhome' className={`nav-link rounded-3 sidebarbtn ${currentURL === '/instructorhome' || currentURL ==='/instructorcreatecourse' || currentURL ==='/instructorcoursedetails' || currentURL ==='/instructorcreatecoursedetails'? 'sidebarbtncolor' : ''}`} >
                  <div className="d-flex justify-content-start">
                    <div>
                    {currentURL === '/instructorhome'|| currentURL ==='/instructorcreatecourse' || currentURL ==='/instructorcoursedetails' || currentURL ==='/instructorcreatecoursedetails' ? <img src="./img/courseinstructor/header/Home (1).png" alt="" />:<img src="./img/courseinstructor/header/Home (2).png" alt="" />}
                    </div>
                    <div style={{marginTop:'2px'}}>
                    <span className='sidebartext mx-2'>Home</span>
                    </div>
                    </div>
                  </Link>
                </li>
                <li className="nav-item my-2">
                  <Link to='/instructorprogresstracking' className={`nav-link rounded-3 sidebarbtn ${currentURL === '/instructorprogresstracking' ? 'sidebarbtncolor' : ''}`}>
                  <div className="d-flex justify-content-start">
                    <div>
                  {currentURL === '/instructorprogresstracking' ?<img src="./img/courseinstructor/header/Chart (2).png" alt="" />:<img src="./img/courseinstructor/header/Chart (1).png" alt="" />}
                  </div>
                    <div style={{marginTop:'2px'}}>
                    <span className='sidebartext mx-2'>Progress Tracking</span>
                    </div>
                    </div>
                  </Link>
                </li>
                <li className="nav-item my-2">
                  <Link to='/instructorsettings' className={`nav-link rounded-3 sidebarbtn ${currentURL === '/instructorsettings' ? 'sidebarbtncolor' : ''}`}>
                    <div className="d-flex justify-content-start">
                    <div>
                  {currentURL === '/instructorsettings' ?<img src="./img/courseinstructor/header/Setting (2).png" alt="" />:<img src="./img/courseinstructor/header/Setting (1).png" alt=""/>}
                    </div>
                    <div style={{marginTop:'2px'}}>
                    <span className='sidebartext mx-2'>Settings</span>
                    </div>
                    </div>
                  </Link>
                </li>
                
                
              </ul>
              <div style={{marginTop:'570px'}}>
              <hr />
              <ul className="nav nav-pills flex-column mb-auto" >
                <li className="nav-item my-2">
                  <button className='nav-link rounded-3 sidebarbtn '  onClick={handleLogout}>
                  <img src="./img/courseinstructor/header/Chart (2).png" alt=""/>
                    <span className='sidebartext mx-2'>Logout</span>
                  </button>
                </li>
              </ul></div>
              {/* <div className="dropdown">
                <a href="#" className="d-flex align-items-center  text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                  <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                  <li><a className="dropdown-item" href="#">New project...</a></li>
                  <li><a className="dropdown-item" href="#">Settings</a></li>
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
              </div> */}
            </div>
            </div>
          </div>
    </>
  )
}

export default InstructorSidebar