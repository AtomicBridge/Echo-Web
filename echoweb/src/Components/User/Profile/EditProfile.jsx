import React, { useState } from 'react'
import './userprofile.css'
import { useNavigate } from 'react-router-dom';
const EditProfile = () => {
    const [selectedgender, setSelectedgender] = useState('');
  const [isDropdowngenderOpen, setIsDropdowngenderOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedgoal, setSelectedgoal] = useState('');
  const [isDropdowngoalOpen, setIsDropdowngoalOpen] = useState(false);
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handlegenderChange = (value) => {
    setSelectedgender(value);
    setIsDropdowngenderOpen(false);
  };
  const toggleDropdowngender = () => {
    setIsDropdowngenderOpen(!isDropdowngenderOpen);
  };
  const handlegoalChange = (value) => {
    setSelectedgoal(value);
    setIsDropdowngoalOpen(false);
  };
  const toggleDropdowngoal = () => {
    setIsDropdowngoalOpen(!isDropdowngoalOpen);
  };
  const [selectedweight, setSelectedweight] = useState('kg');

  const handleweightClick = (item) => {
    setSelectedweight(item);
  };
  const [selectedheight, setSelectedheight] = useState('cm');

  const handleheightClick = (item) => {
    setSelectedheight(item);
  };
  const handleContinue = () => {
    navigate('/');
  };
  return (
    <> 
    <div className="container-fluid">
    <div className="row justify-content-center">
        <div className="col-md-5 col-12">
            <div className="banner-container text-center mt-5">
                <h1 className="banner-terms">Edit Profile</h1>
                <div className="banner-terms-underline"></div>
            </div>
            {/* <h5 class="banner-employes ">saying about us</h5> */}
        </div>
    </div>
    <div className="col-md-11 mx-auto text-center my-4">
                                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing t, consectetur adipist, consectetur adipist, consectetur adipist, consectetur adipist, consectetur adipis elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore</p>
                            </div>

                            <div className="container-fluid">
                            <div className="row">
    <div className="col-md-6">
        <div className="mb-4">
            <div className="text-center h-custom-2 px-xl-5 ms-xl-4 mt-4">
                <img src="./img/user/profile/profile.png" alt="avatar" className="rounded-circle img-fluid mt-md-3" style={{ width: '120px', height:'120px' }} />
                <h5 className="my-3 eighteenfont"><b>John Duo</b></h5>
                <p className="text-muted mb-1" style={{fontSize:'14px'}}>john.duo@gmail.com</p>
                <div className='border-bottom my-4'></div>
            </div>
        </div>
    </div>
    <div className="col-md-6 ">
        <div className="mb-4 ">
            {/* <div className="text-center">
                <img src="./img/user/profile/profile.png" alt="avatar" className="rounded-circle img-fluid" style={{ width: '100px', height:'100px' }} />
                <h5 className="my-3 eighteenfont"><b>Profile Picture</b></h5>
            </div> */}
            <div className="container-fluid d-flex justify-content-center align-items-center ">
                  <div className="w-100">
                    
                    <div className="d-flex flex-column align-items-center align-items-sm-start h-custom-2 px-xl-5 ms-xl-4 mt-4">
    <form style={{ maxWidth: '100%', width: '100%' }}>
    <div className="text-center mb-2 mt-md-3 position-relative">
                                <img src="./img/user/profile/profile.png" alt="avatar" className="rounded-circle img-fluid" width="140" style={{ width: '140px', height: '140px' }} />
                                <div className="position-absolute bottom-0 start-50 translate-middle-x mx-5">
                                    <label htmlFor="avatarInput" className="btn btn-link">
                                        <img src="./img/user/signup/Edit Square.png" alt="" />
                                    </label>
                                    <input type="file" id="avatarInput" accept="image/*" style={{ display: 'none' }}  />
                                </div>
                            </div>
                            <div className="text-center">
                                <span className="eighteenfont"><b>Profile Picture</b></span>
                            </div>
                            <div className="form-group mb-3 mt-1">
                                <label className="form-label fw-bold" htmlFor="fullName">Full Name</label>
                                <input type="text" className="form-control rounded-4 py-2 px-2 border-0" id="fullName" placeholder="Full Name" style={{ backgroundColor: '#FAFAFA', height: '52px' }}   />
                            </div>
                            <div className="form-group mb-3 mt-3">
                                <label className="form-label fw-bold" htmlFor="location">Location</label>
                                <div className="position-relative">
                                    <input type="text" className="form-control rounded-4 py-2 px-2 border-0" id="location" placeholder="Location" style={{ backgroundColor: '#FAFAFA', height: '52px' }} />
                                    <span className="position-absolute top-50 end-0 translate-middle-y pe-3">
                                        <i className="fas fa-map-marker-alt fa-lg"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="form-group mb-2">
                        <label className="form-label fw-bold" htmlFor="interestSelect">
                        Gender
                        </label>
                        <div className="position-relative">
                          <div className="custom-dropdown">
                            <div className=" rounded-4 py-3 px-2 border-0"  style={{ backgroundColor: '#FAFAFA', height: '52px' }}>
                              {selectedgender ? selectedgender : 'Dropdown to select'}
                              <span className="position-absolute top-50 end-0 translate-middle-y pe-3 dropdown-label" onClick={toggleDropdowngender}>
                                        <img src="./img/user/signup/Arrow - Down 2.png" alt="" />
                                    </span>
                            </div>
                            {isDropdowngenderOpen && (
  <div className="options p-2">
    <div className="row">
      <div className="col-12">
        <label className="d-flex justify-content-between align-items-center border-bottom">
          <span>Male</span>
          <input type="radio" name="gender" value="Male" checked={selectedgender === "Male"} style={{accentColor:'#1D191C' ,width: '20px', height: '20px', marginRight: '8px' }} onChange={() => handlegenderChange("Male")} />

        </label>
      </div>
      <div className="col-12">
        <label className="d-flex justify-content-between align-items-center ">
          <span>Female</span>
          <input type="radio" name="gender" value="Female" checked={selectedgender === "Female"}style={{accentColor:'#1D191C' ,width: '20px', height: '20px', marginRight: '8px' }} onChange={() => handlegenderChange("Female")} />
        </label>
      </div>
      
    </div>
  </div>
)}


                          </div>
                        </div>
                      </div>
                      
                      <div className="form-group mb-2">
                          <label className="form-label fw-bold" htmlFor="form2Example18">Enter Your Age</label>
                          <div className="position-relative">
                            <input type="number" className="form-control rounded-4 py-2 px-2 border-0" id="age" placeholder="Age" style={{ backgroundColor: '#FAFAFA', height: '52px' }}  />
                            
                          </div>
                        </div>
                        <div className="">
        <div className="form-group mb-2">
          <label className="form-label fw-bold" htmlFor="form2Example18">Weight</label>
          <div className="col-md-12">
            <div className="d-flex align-items-center">
              <div className="position-relative col-md-9">
                <input type="number" step='0.01' className="form-control rounded-4 py-2 px-2 border-0" id="weight" placeholder="Weight" style={{ backgroundColor: '#FAFAFA', height: '52px' }} />
              </div>
              <div className="btn-group col-md-3 mx-3">
                <button type="button" className="btn dropdown-toggle rounded-4 border-0  mx-3" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: '#FAFAFA', height: '52px' }}>
                  {selectedweight}
                </button>
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item" onClick={() => handleweightClick('t')}>t</button></li>
                  <li><button className="dropdown-item" onClick={() => handleweightClick('kg')}>kg</button></li>
                  <li><button className="dropdown-item" onClick={() => handleweightClick('g')}>g</button></li>
                  <li><button className="dropdown-item" onClick={() => handleweightClick('mg')}>mg</button></li>
                  <li><button className="dropdown-item" onClick={() => handleweightClick('lb')}>lb</button></li>
                  <li><button className="dropdown-item" onClick={() => handleweightClick('oz')}>oz</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="form-group mb-2">
          <label className="form-label fw-bold" htmlFor="form2Example18">Height</label>
          <div className="col-md-12">
            <div className="d-flex align-items-center">
              <div className="position-relative col-md-9">
                <input type="number" step='0.01' className="form-control rounded-4 py-2 px-2 border-0" id="height" placeholder="Height" style={{ backgroundColor: '#FAFAFA', height: '52px' }} />
              </div>
              <div className="btn-group col-md-3 mx-3">
                <button type="button" className="btn dropdown-toggle rounded-4 border-0 mx-3" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: '#FAFAFA', height: '52px' }}>
                  {selectedheight}
                </button>
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item" onClick={() => handleheightClick('m')}>m</button></li>
                  <li><button className="dropdown-item" onClick={() => handleheightClick('yd')}>yd</button></li>
                  <li><button className="dropdown-item" onClick={() => handleheightClick('ft')}>ft</button></li>
                  <li><button className="dropdown-item" onClick={() => handleheightClick('in')}>in</button></li>
                  <li><button className="dropdown-item" onClick={() => handleheightClick('cm')}>cm</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group mb-2">
                        <label className="form-label fw-bold" htmlFor="interestSelect">
                        Select Your Goals
                        </label>
                        <div className="position-relative">
                          <div className="custom-dropdown">
                            <div className=" rounded-4 py-3 px-2 border-0"  style={{ backgroundColor: '#FAFAFA', height: '52px' }}>
                              {selectedgoal ? selectedgoal : 'Dropdown to select'}
                              <span className="position-absolute top-50 end-0 translate-middle-y pe-3 dropdown-label" onClick={toggleDropdowngoal}>
                                        <img src="./img/user/signup/Arrow - Down 2.png" alt="" />
                                    </span>
                            </div>
                            {isDropdowngoalOpen && (
  <div className="options p-2">
    <div className="row">
      <div className="col-12">
        <label className="d-flex justify-content-between align-items-center border-bottom">
          <span>Lose Weight</span>
          <input type="radio" name="goal" value="Lose Weight" checked={selectedgoal === "Lose Weight"} style={{accentColor:'#1D191C' ,width: '20px', height: '20px', marginRight: '8px' }} onChange={() => handlegoalChange("Lose Weight")} />

        </label>
      </div>
      <div className="col-12">
        <label className="d-flex justify-content-between align-items-center border-bottom">
          <span>Build Muscles</span>
          <input type="radio" name="goal" value="Build Muscles" checked={selectedgoal === "Build Muscles"}style={{accentColor:'#1D191C' ,width: '20px', height: '20px', marginRight: '8px' }} onChange={() => handlegoalChange("Build Muscles")} />
        </label>
      </div>
      <div className="col-12">
        <label className="d-flex justify-content-between align-items-center border-bottom">
          <span>Improve Health</span>
          <input type="radio" name="goal" value="Improve Health" checked={selectedgoal === "Improve Health"}style={{accentColor:'#1D191C' ,width: '20px', height: '20px', marginRight: '8px' }} onChange={() => handlegoalChange("Improve Health")} />
        </label>
      </div>
      <div className="col-12">
        <label className="d-flex justify-content-between align-items-center border-bottom">
          <span>Improve Endurance</span>
          <input type="radio" name="goal" value="Improve Endurance" checked={selectedgoal === "Improve Endurance"}style={{accentColor:'#1D191C' ,width: '20px', height: '20px', marginRight: '8px' }} onChange={() => handlegoalChange("Improve Endurance")} />
        </label>
      </div>
      <div className="col-12">
        <label className="d-flex justify-content-between align-items-center ">
          <span>Others</span>
          <input type="radio" name="goal" value="Others" checked={selectedgoal === "Others"}style={{accentColor:'#1D191C' ,width: '20px', height: '20px', marginRight: '8px' }} onChange={() => handlegoalChange("Others")} />
        </label>
      </div>
    </div>
  </div>
)}


                          </div>
                        </div>
                      </div>
                      <div className="form-group mb-4">
                          <label className="form-label fw-bold" htmlFor="form2Example18">Physical Activity Level</label>
                          <div className="position-relative">
                            <input type="text" className="form-control rounded-4 py-2 px-2 border-0" id="physical" placeholder="Enter" style={{ backgroundColor: '#FAFAFA', height: '52px' }}  />
                            
                          </div>
                        </div>
                            {/* <div className="form-group mb-3 mt-3">
                                <label className="form-label fw-bold" htmlFor="description">Description</label>
                                <textarea className="form-control rounded-4 py-3 px-2" id="description" placeholder="Description" rows="7" style={{ backgroundColor: '#FAFAFA' }} ></textarea>
                            </div> */}
                            <div className="text-center mb-5">
                                <button className="btn rounded-pill px-5 py-3 shadow w-100"  style={{ backgroundColor: '#1D191C', color: 'white' }} >Continue</button>
                            </div>
    </form>
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

export default EditProfile