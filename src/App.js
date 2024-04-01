import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
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
import ProgressTracking from './Components/Progress Tracking/ProgressTracking';
import ProgressTrackingCourseContent from './Components/Progress Tracking/ProgressTrackingCourseContent';
import ProgressTrackingWorkoutContent from './Components/Progress Tracking/ProgressTrackingWorkoutContent';
import Notifications from './Components/Inbox/Notifications';
import Inbox from './Components/Inbox/Inbox';
import TermsAndCondition from './Components/TermsAndCondition/TermsAndCondition';
import PrivacyPolicy from './Components/TermsAndCondition/PrivacyPolicy';
import EditProfile from './Components/User/Profile/EditProfile';
import InstructorSignUpProfile2 from './Components/CourseInstructor/InstructorSignUpProfile2';
import TrainerSignUpProfile2 from './Components/WorkoutTrainer/TrainerSignUpProfile2';
import InstructorHome from './Components/CourseInstructor/Dashboard/InstructorHome';
import InstructorProgressTracking from './Components/CourseInstructor/Dashboard/InstructorProgressTracking';
import InstructorSettings from './Components/CourseInstructor/Dashboard/InstructorSettings';
import InstructorCourseDetails from './Components/CourseInstructor/Dashboard/InstructorCourseDetails';
import InstructorCreateCourse from './Components/CourseInstructor/Dashboard/InstructorCreateCourse';
import InstructorCreateCourseDetails from './Components/CourseInstructor/Dashboard/InstructorCreateCourseDetails';
import InstructorNotifications from './Components/CourseInstructor/Inbox/InstructorNotifications';
import InstructorInbox from './Components/CourseInstructor/Inbox/InstructorInbox';
import TrainerHome from './Components/WorkoutTrainer/Dashboard/TrainerHome';
import TrainerCourseDetails from './Components/WorkoutTrainer/Dashboard/TrainerCourseDetails';
import TrainerCreateWorkout from './Components/WorkoutTrainer/Dashboard/TrainerCreateWorkout';
import TrainerCreateWorkoutDetails from './Components/WorkoutTrainer/Dashboard/TrainerCreateWorkoutDetails';
import TrainerProgressTracking from './Components/WorkoutTrainer/Dashboard/TrainerProgressTracking';
import { useState } from 'react';

function App() {
  const [userlogged, setuserlogged] = useState(localStorage.getItem('loggedInUser'));
  console.log(userlogged);
  return (
    <>
    <Router>
      <Routes>
        
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
          <Route path="/termsandcondition" element={<TermsAndCondition />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/workoutstart" element={<WorkoutStart />} />
          
          {userlogged === 'user' && <>
          <Route path="/progresstracking" element={<ProgressTracking />} />
          <Route path="/progresstrackingcoursecontent" element={<ProgressTrackingCourseContent />} />
          <Route path="/progresstrackingworkoutcontent" element={<ProgressTrackingWorkoutContent />} />
          <Route path="/usernotifications" element={<Notifications />} />
          <Route path="/userinbox" element={<Inbox />} />
          <Route path="/edituserprofile" element={<EditProfile/>} />
          </>}

        </Route>

        <Route path="/login" element={<Login setuserlogged={setuserlogged}/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/forgotpasswordotp" element={<ForgotPasswordOtp/>} />
        <Route path="/forgotnewpassword" element={<ForgotNewPassword/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signupotp" element={<SignUpOtp/>} />
        <Route path="/signupaccounttype" element={<SignUpAccountType/>} />
        <Route path="/usersignupprofile1" element={<UserSignUpProfile1/>} />
        <Route path="/usersignupprofile2" element={<UserSignUpProfile2/>} />
        <Route path="/instructorsignupprofile2" element={<InstructorSignUpProfile2/>} />
        <Route path="/trainersignupprofile2" element={<TrainerSignUpProfile2/>} />


        {userlogged === 'instructor' && <>
        <Route path="/instructorhome" element={<InstructorHome/>} />
        <Route path="/instructorcoursedetails" element={<InstructorCourseDetails/>} />
        <Route path="/instructorcreatecourse" element={<InstructorCreateCourse/>} />
        <Route path="/instructorcreatecoursedetails" element={<InstructorCreateCourseDetails/>} />
        <Route path="/instructorprogresstracking" element={<InstructorProgressTracking/>} />
        
        <Route path="/instructornotifications" element={<InstructorNotifications/>} />
        <Route path="/instructorinbox" element={<InstructorInbox/>} />
        </>}
        {(userlogged === 'instructor' || userlogged === 'trainer') && (
  <><Route path="/instructorsettings" element={<InstructorSettings/>} /></>
)}

        {userlogged === 'trainer' && <>
        <Route path="/trainerhome" element={<TrainerHome/>} />
        <Route path="/trainercoursedetails" element={<TrainerCourseDetails/>} />
        <Route path="/trainercreateworkout" element={<TrainerCreateWorkout/>} />
        <Route path="/trainercreateworkoutdetails" element={<TrainerCreateWorkoutDetails/>} />
        <Route path="/trainerprogresstracking" element={<TrainerProgressTracking/>} />
        </>
}
        
        

      </Routes>
    </Router>    

    </>
  );
}

export default App;
