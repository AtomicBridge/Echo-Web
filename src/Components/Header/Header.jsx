import React, { useEffect, useState } from 'react'
import "./header.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Header = () => {
    const location = useLocation();
    const [currentURL, setCurrentURL] = useState(location.pathname);
    const [userlogged, setuserlogged] = useState(localStorage.getItem('loggedInUser'))
  const navigate = useNavigate();
    useEffect(() => {
      setCurrentURL(location.pathname);
    }, [location.pathname]);
    const navigatelogin =() =>{
navigate('/login')
    }
    const handlenotification =() =>{
        navigate('/usernotifications')
            }
            const handleinbox =() =>{
                navigate('/userinbox')
                    }
    const navigateprogresstracking =() =>{
        navigate('/progresstracking');
            }
            const navigateeditprofile =() =>{
                navigate('/edituserprofile');
                    }
    const navigatesignup =() =>{
        navigate('/signup')
            }
            const handleLogout = () => {
                // Remove data of 'loggedInUser' from localStorage
                localStorage.removeItem('loggedInUser');
                // Update the userlogged state to false
                setuserlogged(false);
                navigate('/');
            };
  return (
    <>
    { currentURL === '/' || currentURL === '/aboutus' || currentURL === '/courses' || currentURL === '/contactus'
        ?(
            <nav className="navbar navbar-expand-lg navbar-light ">
    <div className="container-fluid" style={{maxWidth: "90%"}}>
        {/* <a className="navbar-brand" href="#">LOGO</a> */}
        <img src="./img/Navbar/echologo.png" className="navbar-brand" alt="" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" style={{marginLeft:'10%'}} id="navbarSupportedContent">
           
            <ul className="navbar-nav ms-auto"> 
            <li className="nav-item">
                    <Link className={`nav-link text-default ${currentURL === '/' ? 'fw-bold' : ''}`} aria-current="page" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link text-default ${currentURL === '/aboutus' ? 'fw-bold' : ''}`} to='/aboutus'>About Us</Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link text-default ${currentURL === '/courses' ? 'fw-bold' : ''}`} to='/courses'>Our Courses</Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link text-default ${currentURL === '/contactus' ? 'fw-bold' : ''}`} to='/contactus'>Contact Us</Link>
                </li>
            </ul>
            {userlogged=== 'user'?<ul className="navbar-nav ms-auto">
    <li className="nav-item my-2 mx-md-4 ">
        <img className='mx-2' onClick={handleinbox} style={{cursor:'pointer'}} src="./img/Navbar/Group 5.png" alt="" />
        <img onClick={ handlenotification} style={{cursor:'pointer'}} src="./img/Navbar/Group 6.png"  alt="" />
    </li>
    <li className="nav-item">
  <div className="position-relative">
    <img
      src="./img/Navbar/Ellipse 2386.png"
      className="dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      alt=""
      style={{ width: '48px', height: '48px', cursor: 'pointer' }}
    />
    <ul className="dropdown-menu px-2" style={{  left: '-100%' }}>
      <li><button className="dropdown-item border-bottom px-2" onClick={() => navigateeditprofile()}> <img className='mb-1 ' src="./img/Navbar/Edit.png" alt="" /> Edit Profile</button></li>
      <li><button className="dropdown-item border-bottom px-2" onClick={() => navigateprogresstracking()}><img className='mb-1' src="./img/Navbar/Chart.png" alt="" /> Progress Tracking</button></li>
      <li><button className="dropdown-item px-2" onClick={handleLogout}><img className='mb-1' src="./img/Navbar/Logout.png" alt="" /> Logout</button></li>
      
    </ul>
  </div>
</li>


</ul>:
<ul className="navbar-nav ms-auto">
    <li className="nav-item">
        <button className="btn btn-outline-dark mx-md-2 rounded-pill  my-2" onClick={navigatelogin} style={{height:'48px', width:'100px'}}>Login</button>
    </li>
    <li className="nav-item">
        <button className="btn btn-dark rounded-pill mx-md-2  my-2 "  onClick={navigatesignup} style={{height:'48px', width:'100px'}}>Sign Up</button>
    </li>
</ul>
}
            



        </div>
    </div>
</nav>
        ):(<nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#1D191C', color: 'white' }}>
        <div className="container-fluid" style={{ maxWidth: "90%" }}>
            <img src="./img/Navbar/echologo2.png" className="navbar-brand" alt="" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" style={{ marginLeft: '10%' }} id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item" >
                        <Link className={`nav-link text-default ${currentURL === '/' ? 'fw-bold' : ''}`} style={{color:'white'}} aria-current="page" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link text-default ${currentURL === '/aboutus' ? 'fw-bold' : ''}`} style={{color:'white'}} to='/aboutus'>About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link text-default ${currentURL === '/courses' ? 'fw-bold' : ''}`} style={{color:'white'}} to='/courses'>Our Courses</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link text-default ${currentURL === '/contactus' ? 'fw-bold' : ''}`} style={{color:'white'}} to='/contactus'>Contact Us</Link>
                    </li>
                </ul>
                {userlogged=== 'user'?<ul className="navbar-nav ms-auto">
    <li className="nav-item my-2 mx-md-4 ">
        <img className='mx-2' onClick={handleinbox} style={{cursor:'pointer'}} src="./img/Navbar/Group 5.png" alt="" />
        <img src="./img/Navbar/Group 6.png" onClick={ handlenotification} style={{cursor:'pointer'}} alt="" />
    </li>
    <li className="nav-item">
  <div className="position-relative">
    <img
      src="./img/Navbar/Ellipse 2386.png"
      className="dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      alt=""
      style={{ width: '48px', height: '48px', cursor: 'pointer' }}
    />
    <ul className="dropdown-menu px-2" style={{  left: '-100%' }}>
      <li><button className="dropdown-item border-bottom px-2" onClick={() => navigateeditprofile()}> <img className='mb-1 ' src="./img/Navbar/Edit.png" alt="" /> Edit Profile</button></li>
      <li><button className="dropdown-item border-bottom px-2" onClick={() => navigateprogresstracking()}><img className='mb-1' src="./img/Navbar/Chart.png" alt="" /> Progress Tracking</button></li>
      <li><button className="dropdown-item px-2" onClick={handleLogout}><img className='mb-1' src="./img/Navbar/Logout.png" alt="" /> Logout</button></li>
      
    </ul>
  </div>
</li>


</ul>:
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <button className="btn btn-outline-light mx-md-2 rounded-pill my-2" onClick={navigatelogin} style={{ height: '48px', width: '100px' }}>Login</button>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-light rounded-pill mx-md-2 my-2" onClick={navigatesignup} style={{ height: '48px', width: '100px' }}>Sign Up</button>
                    </li>
                </ul>}
            </div>
        </div>
    </nav>
    )
    }
    </>
  )
}

export default Header