import React from 'react'
import "./header.css";
const Header = () => {
  return (
    <>
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
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Our Courses</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact Us</a>
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
    </>
  )
}

export default Header