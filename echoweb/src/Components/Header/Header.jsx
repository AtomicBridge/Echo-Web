import React, { useEffect, useState } from 'react'
import "./header.css";
import { Link, useLocation } from 'react-router-dom';
const Header = () => {
    const location = useLocation();
    const [currentURL, setCurrentURL] = useState(location.pathname);
  
    useEffect(() => {
      setCurrentURL(location.pathname);
    }, [location.pathname]);
  return (
    <>
    { currentURL === '/' || currentURL === '/aboutus' || currentURL === '/courses' || currentURL === '/contactus'
        ?(
            <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid" style={{maxWidth: "90%"}}>
        {/* <a class="navbar-brand" href="#">LOGO</a> */}
        <img src="./img/Navbar/echologo.png" class="navbar-brand" alt="" />
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" style={{marginLeft:'10%'}} id="navbarSupportedContent">
           
            <ul class="navbar-nav ms-auto"> 
            <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to='/'>Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to='/aboutus'>About Us</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to='/courses'>Our Courses</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to='/contactus'>Contact Us</Link>
                </li>
            </ul>
            <ul class="navbar-nav ms-auto">
    <li class="nav-item">
        <button class="btn btn-outline-dark mx-md-2 rounded-pill  my-1" style={{height:'48px', width:'100px'}}>Login</button>
    </li>
    <li class="nav-item">
        <button class="btn btn-dark rounded-pill mx-md-2  my-1 " style={{height:'48px', width:'100px'}}>Sign Up</button>
    </li>
</ul>



        </div>
    </div>
</nav>
        ):(<nav class="navbar navbar-expand-lg" style={{ backgroundColor: '#1D191C', color: 'white' }}>
        <div class="container-fluid" style={{ maxWidth: "90%" }}>
            <img src="./img/Navbar/echologo2.png" class="navbar-brand" alt="" />
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" style={{ marginLeft: '10%' }} id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item" >
                        <Link class="nav-link active" style={{color:'white'}} aria-current="page" to='/'>Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" style={{color:'white'}} to='/aboutus'>About Us</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" style={{color:'white'}} to='/courses'>Our Courses</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" style={{color:'white'}} to='/contactus'>Contact Us</Link>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <button class="btn btn-outline-light mx-md-2 rounded-pill my-1" style={{ height: '48px', width: '100px' }}>Login</button>
                    </li>
                    <li class="nav-item">
                        <button class="btn btn-light rounded-pill mx-md-2 my-1" style={{ height: '48px', width: '100px' }}>Sign Up</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
    }
    </>
  )
}

export default Header