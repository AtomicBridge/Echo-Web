import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const InstructoreHeader = () => {
  const [userlogged, setuserlogged] = useState(localStorage.getItem('loggedInUser'))
  const navigate = useNavigate();
  const handlenotification =() =>{
    navigate('/instructornotifications')
        }
        const handleinbox =() =>{
            navigate('/instructorinbox')
                }

                const handleLogout = () => {
                  // Remove data of 'loggedInUser' from localStorage
                  localStorage.removeItem('loggedInUser');
                  // Update the userlogged state to false
                  setuserlogged(false);
                  navigate('/login');
              };
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid" style={{ maxWidth: "90%" }}>
              <div className='col-md-3 mt-4'> {/* Added my-3 for vertical margin */}
        <h3 className='fw-bold mb-2'>Hello Andrew!</h3> {/* Added mb-3 for bottom margin */}
        <p className="mb-0"> {/* Added mb-0 for bottom margin */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae orci non orci efficitur feugiat sed et.
        </p>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" style={{marginLeft:'10%'}} id="navbarSupportedContent">
           
            <div class="navbar-nav ms-2 setsearchbarwidth mb-md-5"> 
            {/* <div className="px-2 ">
                  <div className="d-flex align-items-center " >
                    <div className="flex-grow-1 position-relative " >
                      <input type="text" className="form-control my-1 border-0 py-2" placeholder="Search agent" style={{backgroundColor:'#FAFAFA'}}/>
                      <div className="position-absolute top-50 start-0 translate-middle-y">
                        <i className="fas fa-search text-muted mx-3 "></i> 
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="input-group my-2">
    <div className="input-group-prepend">
        <span className="input-group-text bg-light border-0" style={{borderRadius: '0',borderTopLeftRadius:'12px',borderBottomLeftRadius:'12px'}}>
            <i className="fas fa-search text-muted py-2"></i>
        </span>
    </div>
    <input
        type="text"
        className="form-control border-0 "
        placeholder="Search..."
        style={{ backgroundColor: '#FAFAFA', borderRadius: '0',borderTopRightRadius:'12px',borderBottomRightRadius:'12px' }}
    />
</div>


            </div>
            <div className="showsidebarnav">
            <ul class="navbar-nav ms-auto"> 
            <li class="nav-item">
                    {userlogged=== 'instructor'?<Link  class="nav-link active" aria-current="page" to='/instructorhome'>Home</Link>:<Link  class="nav-link active" aria-current="page" to='/trainerhome'>Home</Link>}
                </li>
                <li class="nav-item">
                    {userlogged=== 'instructor'?<Link class="nav-link" to='/instructorprogresstracking'>Progress Tracking</Link>:<Link class="nav-link" to='/trainerprogresstracking'>Progress Tracking</Link>}
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to='/instructorsettings' >Settings</Link>
                </li>
                <li class="nav-item">
                    <span class="nav-link" onClick={handleLogout} >Logout</span>
                </li>
            </ul>
            </div>
            <ul class="navbar-nav ms-auto mb-md-5">
                <li className='nav-item my-3 mx-md-3 '>
                <div class="dropdown">
    <div class="dropdown-toggle" href="#" id="Dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <img className='flag' src="./img/courseinstructor/home/flags/icons8-united-kingdom-48.png" alt=""  /><span className=''>English</span>
    </div>

    <ul class="dropdown-menu" aria-labelledby="Dropdown">
        <li>
            <a class="dropdown-item" href="#"><img className='flag' src="./img/courseinstructor/home/flags/icons8-united-kingdom-48.png" alt=""  />English <i class="fa fa-check text-success ms-2"></i></a>
        </li>
        <li><hr class="dropdown-divider" /></li>
        <li>
            <a class="dropdown-item" href="#"><img className='flag' src="./img/courseinstructor/home/flags/icons8-poland-48.png" alt=""  />Polski</a>
        </li>
        <li>
            <a class="dropdown-item" href="#"><img className='flag' src="./img/courseinstructor/home/flags/icons8-china-48.png" alt=""  />中文</a>
        </li>
        <li>
            <a class="dropdown-item" href="#"><img className='flag' src="./img/courseinstructor/home/flags/icons8-japan-48.png" alt=""  />日本語</a>
        </li>
        <li>
            <a class="dropdown-item" href="#"><img className='flag' src="./img/courseinstructor/home/flags/icons8-germany-48.png" alt=""  />Deutsch</a>
        </li>
        <li>
            <a class="dropdown-item" href="#"><img className='flag' src="./img/courseinstructor/home/flags/icons8-france-48.png" alt=""  />Français</a>
        </li>
        <li>
            <a class="dropdown-item" href="#"><img className='flag' src="./img/courseinstructor/home/flags/icons8-spain-48.png" alt=""  />Español</a>
        </li>
        <li>
            <a class="dropdown-item" href="#"><img className='flag' src="./img/courseinstructor/home/flags/icons8-russia-48.png" alt=""  />Русский</a>
        </li>
        <li>
            <a class="dropdown-item" href="#"><img className='flag' src="./img/courseinstructor/home/flags/icons8-portugal-48.png" alt=""  />Português</a>
        </li>
    </ul>
</div>
                </li>
    <li class="nav-item my-2 mx-md-4 ">
    
        <img className='mx-2' onClick={handleinbox} style={{cursor:'pointer'}} src="./img/Navbar/Group 5.png" alt="" />
        <img onClick={ handlenotification} style={{cursor:'pointer'}} src="./img/Navbar/Group 6.png"  alt="" />
    </li>
    <li className="nav-item">
  <div className="position-relative">
    <img
      src="./img/courseinstructor/header/Ellipse 1.png"
      // className="dropdown-toggle"
      // data-bs-toggle="dropdown"
      // aria-expanded="false"
      alt=""
      style={{ width: '48px', height: '48px' }}
    />
    {/* <ul className="dropdown-menu px-2" style={{  left: '-100%' }}>
      <li><button className="dropdown-item border-bottom px-2" > <img className='mb-1 ' src="./img/Navbar/Edit.png" alt="" /> Edit Profile</button></li>
      <li><button className="dropdown-item border-bottom px-2"><img className='mb-1' src="./img/Navbar/Chart.png" alt="" /> Progress Tracking</button></li>
      <li><button className="dropdown-item px-2" ><img className='mb-1' src="./img/Navbar/Logout.png" alt="" /> Logout</button></li>
      
    </ul> */}
  </div>
</li>


</ul>
            



        </div>
              </div>
            </nav>
    </>
  )
}

export default InstructoreHeader