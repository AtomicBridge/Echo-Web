import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route, Routes,useMatch,Switch, Outlet } from "react-router-dom";
import AboutUs from './Components/AboutUs/AboutUs';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Courses from './Components/Courses/Courses';
import ContactUs from './Components/ContactUs/ContactUs';
import CourseDetails from './Components/Courses/CourseDetails';
import WorkoutDetails from './Components/Courses/WorkoutDetails';
import CoursePayment from './Components/Courses/CoursePayment';
import WorkoutStart from './Components/Courses/WorkoutStart';
import Login from './Components/User/Login';
import ForgotPassword from './Components/User/ForgotPassword';
import ForgotPasswordOtp from './Components/User/ForgotPasswordOtp';
import ForgotNewPassword from './Components/User/ForgotNewPassword';
import SignUp from './Components/User/SignUp/SignUp';
import SignUpOtp from './Components/User/SignUp/SignUpOtp';
import SignUpAccountType from './Components/User/SignUp/SignUpAccountType';
import UserSignUpProfile1 from './Components/User/SignUp/UserSignUpProfile1';
import UserSignUpProfile2 from './Components/User/SignUp/UserSignUpProfile2';
function App() {
  return (
    <>
    <Router>
      <Routes>
        {/* Routes with Navbar and Footer */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route index element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/coursedetails" element={<CourseDetails />} />
          <Route path="/workoutdetails" element={<WorkoutDetails />} />
          <Route path="/coursepayment" element={<CoursePayment />} />
          <Route path="/workoutstart" element={<WorkoutStart />} />

        </Route>

        <Route path="/login" element={<Login/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/forgotpasswordotp" element={<ForgotPasswordOtp/>} />
        <Route path="/forgotnewpassword" element={<ForgotNewPassword/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signupotp" element={<SignUpOtp/>} />
        <Route path="/signupaccounttype" element={<SignUpAccountType/>} />
        <Route path="/usersignupprofile1" element={<UserSignUpProfile1/>} />
        <Route path="/usersignupprofile2" element={<UserSignUpProfile2/>} />
        
        

      </Routes>
    </Router>    

    </>
  );
}

export default App;
