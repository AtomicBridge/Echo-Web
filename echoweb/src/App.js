import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route, Routes,useMatch,Switch, Outlet } from "react-router-dom";
import AboutUs from './Components/AboutUs/AboutUs';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Courses from './Components/Courses/Courses';
import ContactUs from './Components/ContactUs/ContactUs';
import CourseDetails from './Components/Courses/CourseDetails';
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
        </Route>

        
        

      </Routes>
    </Router>    

    </>
  );
}

export default App;
