import React, { useEffect, useState } from 'react'
import './userprofile.css'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import OtpInput from 'react-otp-input';
const EditProfile = () => {
    const [selectedgender, setSelectedgender] = useState('');
  const [isDropdowngenderOpen, setIsDropdowngenderOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedgoal, setSelectedgoal] = useState('');
  const [isDropdowngoalOpen, setIsDropdowngoalOpen] = useState(false);
  const [currentpassword, setcurrentPassword] = useState('');
  const [showcurrentPassword, setShowcurrentPassword] = useState(false);
  const [deleteaccountpassword, setdeleteaccountPassword] = useState('');
  const [showdeleteaccountPassword, setShowdeleteaccountPassword] = useState(false);
  const [newpassword, setnewPassword] = useState('');
    const [shownewPassword, setShownewPassword] = useState(false);
    const [confirmnewpassword, setconfirmnewPassword] = useState('');
    const [showconfirmnewPassword, setShowconfirmnewPassword] = useState(false);
    const [deleteaccountotp, setdeleteaccountotp] = useState(false)
    const [avatar, setAvatar] = useState(null);
    const handleFileInputChange = (e) => {
      const file = e.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
              setAvatar(reader.result);
          };
          reader.readAsDataURL(file);
      }
  };
    const handledeleteaccountotp = () =>{
      setdeleteaccountotp(true);
      setDeleteAccount(false);
    }
    const navigate = useNavigate();
    const handleChangedeleteaccountPassword = (e) => {
      setdeleteaccountPassword(e.target.value);
    };
    const toggledeleteaccountPasswordVisibility = () => {
      setShowdeleteaccountPassword(!showdeleteaccountPassword);
    };
    const handleChangecurrentPassword = (e) => {
      setcurrentPassword(e.target.value);
    };
    const togglecurrentPasswordVisibility = () => {
      setShowcurrentPassword(!showcurrentPassword);
    };
    const handleChangenewPassword = (e) => {
        setnewPassword(e.target.value);
      };
      const togglenewPasswordVisibility = () => {
        setShownewPassword(!shownewPassword);
      };
      const handleChangeconfirmnewPassword = (e) => {
        setconfirmnewPassword(e.target.value);
      };
      const toggleconfirmnewPasswordVisibility = () => {
        setShowconfirmnewPassword(!showconfirmnewPassword);
      };
      const handlePasswordSuccessful = () => {
        setShowModal(true);
        // Perform payment processing logic here
    };
    
  
    const [showModal, setShowModal] = useState(false);
    const [otp, setOtp] = useState('');
    const [inputStyle, setInputStyle] = useState({
        width: '90px',
        height: '72px',
        fontSize: '24px',
        margin: '0 10px',
        textAlign: 'center',
        borderRadius: '8px',
        border: '1px solid #E2E2E2',
        backgroundColor: '#FAFAFA',
        color: '#1D191C',
        fontWeight: '700'
    });
    



    useEffect(() => {
      const handleResize = () => {
          const width = window.innerWidth;
          if (width <= 768) {
              setInputStyle({
                  width: '70px',
                  height: '52px',
                  fontSize: '18px',
                  margin: '0 5px',
                  textAlign: 'center',
                  borderRadius: '8px',
                  border: '1px solid #E2E2E2',
                  backgroundColor: '#FAFAFA',
                  color: '#1D191C',
                  fontWeight: '700'
              });
          } else if (width <= 576) {
              setInputStyle({
                  width: '50px',
                  height: '40px',
                  fontSize: '14px',
                  margin: '0 3px',
                  textAlign: 'center',
                  borderRadius: '8px',
                  border: '1px solid #E2E2E2',
                  backgroundColor: '#FAFAFA',
                  color: '#1D191C',
                  fontWeight: '700'
              });
          } else {
              setInputStyle({
                  width: '90px',
                  height: '72px',
                  fontSize: '24px',
                  margin: '0 10px',
                  textAlign: 'center',
                  borderRadius: '8px',
                  border: '1px solid #E2E2E2',
                  backgroundColor: '#FAFAFA',
                  color: '#1D191C',
                  fontWeight: '700'
              });
          }
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
  
      let timer;
      if (showModal) {
          timer = setTimeout(() => {
              setShowModal(false);
          }, 2000);
      }
  
      return () => {
          window.removeEventListener('resize', handleResize);
          clearTimeout(timer);
      };
  }, [showModal, setInputStyle]); // Make sure to add setInputStyle as a dependency if it's coming from props or state
  
    const handleChange = (otp) => {
      setOtp(otp);
  };
const [EditProfile, setEditProfile] = useState(true);
const [Notification, setNotification] = useState(false);
const [ChangePassword, setChangePassword] = useState(false);
const [DeleteAccount, setDeleteAccount] = useState(false);
const handleeditprofile = () =>{
  setEditProfile(true);
  setNotification(false);
  setChangePassword(false);
  setDeleteAccount(false);
  setdeleteaccountotp(false);
}
const handlenotification = () =>{
  setEditProfile(false);
  setNotification(true);
  setChangePassword(false);
  setDeleteAccount(false);
  setdeleteaccountotp(false);

}
const handlechangepassword = () =>{
  setEditProfile(false);
  setNotification(false);
  setChangePassword(true);
  setdeleteaccountotp(false);
  setDeleteAccount(false);
}
const handledeleteaccount = () =>{
  setEditProfile(false);
  setNotification(false);
  setChangePassword(false);
  setdeleteaccountotp(false);
  setDeleteAccount(true);
}
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

                            <div className="">
                            <div className="row">
    <div className="col-md-6">
        <div className="mb-4 profileborder" >
            <div className="text-center h-custom-2 px-xl-5 ms-xl-4 mt-4">
                <img src="./img/user/profile/profile.png" alt="avatar" className="rounded-circle img-fluid mt-md-3" style={{ width: '120px', height:'120px' }} />
                <h5 className="my-3 eighteenfont"><b>John Duo</b></h5>
                <p className="text-muted mb-1" style={{fontSize:'14px'}}>john.duo@gmail.com</p>
                <div className='border-bottom col-md-9 mx-auto my-4'></div>
                <div className='col-md-9 mx-auto'>
                <div className="d-flex justify-content-between mb-3" style={{cursor:'pointer'}} onClick={handleeditprofile}>
                  <div className='mt-1'>
                  <h6 className='fw-bold'>Edit Profile</h6>
                  </div>
                  <div>
                  <img src="./img/user/profile/Arrow - Right 2.png" alt="" />
                  </div>
                  </div>
                  <div className="d-flex justify-content-between mb-3" style={{cursor:'pointer'}} onClick={handleeditprofile}>
                  <div className='mt-1'>
                  <h6 className='fw-bold'>Notification</h6>
                  </div>
                  <div>
                  <img src="./img/user/profile/Arrow - Right 2.png" alt="" />
                  </div>
                  </div>
                  <div className="d-flex justify-content-between mb-3" style={{cursor:'pointer'}} onClick={handlechangepassword}>
                  <div className='mt-1'>
                  <h6 className='fw-bold'>Change Password</h6>
                  </div>
                  <div>
                  <img src="./img/user/profile/Arrow - Right 2.png" alt="" />
                  </div>
                  </div>
                  <div className="d-flex justify-content-between mb-3" style={{cursor:'pointer'}} onClick={handledeleteaccount}>
                  <div className='mt-1'>
                  <h6 className='fw-bold'>Delete Account</h6>
                  </div>
                  <div>
                  <img src="./img/user/profile/Arrow - Right 2.png" alt="" />
                  </div>
                  </div>
                </div>
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
    { EditProfile && <form style={{ maxWidth: '100%', width: '100%' }}>
    <div className="text-center mb-2 mt-md-3 position-relative">
                                <img src={avatar ||"./img/user/profile/profile.png"} alt="avatar" className="rounded-circle img-fluid" width="140" style={{ width: '140px', height: '140px' }} />
                                <div className="position-absolute bottom-0 start-50 translate-middle-x mx-5">
                                    <label htmlFor="avatarInput" className="btn btn-link">
                                        <img src="./img/user/signup/Edit Square.png" alt="" />
                                    </label>
                                    <input type="file" id="avatarInput" accept="image/*" style={{ display: 'none' }} onChange={handleFileInputChange} />
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

    }
    {/* {Notification && <>
      <div className="text-center mb-2 mt-md-4 position-relative">
        <h6>Notification</h6>
</div>

    </>} */}
    {ChangePassword && <>
      <div className=" mb-2 mt-md-4 position-relative">
        <h6 className='fw-bold'>Change Password</h6>
        <p className='my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar bibendum magna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar bibendum magna. consectetur adipiscing elit. Maecenas pulvinar bibendum magna</p>
        <div className="form-outline mb-4 mt-5">
                      <label className="form-label fw-bold" htmlFor="form2Example19">Current Password</label>
                        <div className="position-relative d-flex align-items-center">
                          <input
                            type={showcurrentPassword ? "text" : "password"}
                            className="form-control rounded-4 py-2 px-2 border-0"
                            id="currentpassword"
                            placeholder=" "
                            style={{
                              backgroundColor: '#FAFAFA',
                              height: '52px',
                              // fontSize: '24px'
                            }}
                            value={currentpassword}
                            onChange={handleChangecurrentPassword}
                          />
                          {currentpassword === '' && (<label
                            htmlFor="newpassword"
                            className="position-absolute top-0 start-0 bottom-0 py-3 px-2 text-secondary"
                          >
                            <img src="./img/user/login/lock.png" alt="" className='mx-2'/>Current Password
                          </label>)}
                          <div className="position-absolute text-secondary top-0 end-0 bottom-0 py-3 px-2">
                            <FontAwesomeIcon
                              icon={showcurrentPassword ? faEyeSlash : faEye}
                              onClick={togglecurrentPasswordVisibility}
                              style={{ cursor: 'pointer', userSelect: 'none' }}
                            />
                          </div>
                        </div>
                      </div>
        <div className="form-outline mb-4">
                      <label className="form-label fw-bold" htmlFor="form2Example19">New Password</label>
                        <div className="position-relative d-flex align-items-center">
                          <input
                            type={shownewPassword ? "text" : "password"}
                            className="form-control rounded-4 py-2 px-2 border-0"
                            id="newpassword"
                            placeholder=" "
                            style={{
                              backgroundColor: '#FAFAFA',
                              height: '52px',
                              // fontSize: '24px'
                            }}
                            value={newpassword}
                            onChange={handleChangenewPassword}
                          />
                          {newpassword === '' && (<label
                            htmlFor="newpassword"
                            className="position-absolute top-0 start-0 bottom-0 py-3 px-2 text-secondary"
                          >
                            <img src="./img/user/login/lock.png" alt="" className='mx-2'/>New Password
                          </label>)}
                          <div className="position-absolute text-secondary top-0 end-0 bottom-0 py-3 px-2">
                            <FontAwesomeIcon
                              icon={shownewPassword ? faEyeSlash : faEye}
                              onClick={togglenewPasswordVisibility}
                              style={{ cursor: 'pointer', userSelect: 'none' }}
                            />
                          </div>
                        </div>
                      </div> 
                      <div className="form-outline mb-4">
                      <label className="form-label fw-bold" htmlFor="form2Example18">Confirm New Password</label>
                        <div className="position-relative d-flex align-items-center">
                          <input
                            type={showconfirmnewPassword ? "text" : "password"}
                            className="form-control rounded-4 py-2 px-2 border-0"
                            id="confirmnewpassword"
                            placeholder=" "
                            style={{
                              backgroundColor: '#FAFAFA',
                              height: '52px',
                              // fontSize: '24px'
                            }}
                            value={confirmnewpassword}
                            onChange={handleChangeconfirmnewPassword}
                          />
                          {confirmnewpassword === '' && (<label
                            htmlFor="password"
                            className="position-absolute top-0 start-0 bottom-0 py-3 px-2 text-secondary"
                          >
                            <img src="./img/user/login/lock.png" alt="" className='mx-2'/> Password
                          </label>)}
                          <div className="position-absolute text-secondary top-0 end-0 bottom-0 py-3 px-2">
                            <FontAwesomeIcon
                              icon={showconfirmnewPassword ? faEyeSlash : faEye}
                              onClick={toggleconfirmnewPasswordVisibility}
                              style={{ cursor: 'pointer', userSelect: 'none' }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-center align-items-center">
                        
  
  <div className='my-5  mx-auto'>
      <button className='btn rounded-pill px-5 py-3 shadow w-100' onClick={(e) => { e.preventDefault(); handlePasswordSuccessful(); }} style={{backgroundColor:'#1D191C', color:'white'}} >Save Changes</button>
  </div>
  
                        </div>
</div>

    </>}
    {showModal && (
                    <div className="modal show" id="paymentModal" tabIndex="-1" aria-labelledby="paymentModalLabel" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog " style={{marginTop: '5%'}}>
                        <div className="modal-content my-1">
                            {/* <div className="modal-header">
                                <h5 className="modal-title" id="paymentModalLabel">Payment Successful</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
                            </div> */}
                            <div className="modal-body text-center">
                                
                                <img src="./img/courses/coursepayment/coursepaymentsuccessfull.png" alt="" height='100' width='100'/>
                                <h4 className='my-3'><b>Password Change Successful!</b></h4>
                                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate placerat porta. Ut commodo nulla vitae eleifend sodales. Fusce ornare.</h6>
                            </div>
                            {/* <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                            </div> */}
                        </div>
                    </div>
                </div>
                
                )}
    {DeleteAccount && <>
      <div className=" mb-2 mt-md-4 position-relative">
      <h6 className='fw-bold'>Delete Account</h6>
      <div className="d-flex justify-content-start mt-4">
        <div>
        <img src="./img/user/profile/Vector.png" className='img-fluid' alt="" />
        </div>
        <div className='my-1'>
        <p className='text-danger fw-bold mx-2'>Delete your account will:</p>
        </div>
      </div>
        <p className='mb-3 '>We're sorry to see you go. If you're sure you want to delete your ECHO App account, please be aware that this action is permanent and cannot be undone. All of your personal information, including your information and settings, will be permanently deleted.</p>
        <p>If you're having trouble with your account or have concerns, please reach out to us at [contact email or support page] before proceeding with the account deletion. We'd love to help you resolve any issues and keep you as a valued ECHO App user.</p>
        <div className="form-outline mb-4 mt-5">
                      <label className="form-label fw-bold" htmlFor="form2Example19">Password</label>
                        <div className="position-relative d-flex align-items-center">
                          <input
                            type={showdeleteaccountPassword ? "text" : "password"}
                            className="form-control rounded-4 py-2 px-2 border-0"
                            id="deleteaccountpassword"
                            placeholder=" "
                            style={{
                              backgroundColor: '#FAFAFA',
                              height: '52px',
                              // fontSize: '24px'
                            }}
                            value={deleteaccountpassword}
                            onChange={handleChangedeleteaccountPassword}
                          />
                          {deleteaccountpassword === '' && (<label
                            htmlFor="newpassword"
                            className="position-absolute top-0 start-0 bottom-0 py-3 px-2 text-secondary"
                          >
                            <img src="./img/user/login/lock.png" alt="" className='mx-2'/>Password
                          </label>)}
                          <div className="position-absolute text-secondary top-0 end-0 bottom-0 py-3 px-2">
                            <FontAwesomeIcon
                              icon={showdeleteaccountPassword ? faEyeSlash : faEye}
                              onClick={toggledeleteaccountPasswordVisibility}
                              style={{ cursor: 'pointer', userSelect: 'none' }}
                            />
                          </div>
                        </div>
                      </div>
                      <p className='text-muted'>To delete your account, please enter your password in the field below and confirm your decision by clicking the 'Delete My Account' button.</p>
                      <div className='mb-3 mt-5  mx-auto'>
      <button className='btn rounded-pill px-5 py-3 shadow w-100' style={{backgroundColor:'#1D191C', color:'white'}} onClick={handledeleteaccountotp}>Delete Account</button>
  </div>
</div>

    </>}
    {deleteaccountotp &&<>
      <div className=" mb-2 mt-md-4 position-relative">
      <h6 className='fw-bold'>Delete Account</h6> 
      <p className='mb-3 '>For added security, we'll send an OTP code to your registered mobile number. Please enter the code in the field below to confirm your account deletion.</p>
      <div className="d-flex flex-column align-items-center align-items-sm-start h-custom-2 px-xl-5 ms-xl-4 " style={{ marginTop: '15%' }}>
                                        <form style={{ maxWidth: '100%', width: '100%' }}>
                                            
                                            <div className="form-group mb-3">
                                            
                                            <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={4}
            inputStyle={inputStyle}
            renderInput={(props) => <input {...props} />}
        />
                                                
                                                <div className=" mx-auto col-md-6">
                                                <div className="text-center">
                                                <div className=' mt-3'>
                                                        <p>You can resend the code in <b>56</b> seconds</p>
                                                    </div>
                                                    <div className=' mt-3'>
                                                        <p>Resend code</p>
                                                    </div>
                                                </div>
                                                </div>
                                               
                                            </div>
                                            <div className="">
                                                <div className="text-center align-items-center">
                                                    
                                                    <div className='mb-3 mt-5 mx-auto'>
                                                        <button className='btn rounded-pill px-5 py-3 shadow w-100' onClick={(e) => { e.preventDefault(); handlePasswordSuccessful(); }} style={{ backgroundColor: '#1D191C', color: 'white' }} >Delete Account</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div></div>

    </>}
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