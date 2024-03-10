import React from 'react'
import PopularCourses from '../Home/PopularCourses'
import PopularWorkout from '../Home/PopularWorkout'
import HomeCarousel from '../Home/HomeCarousel'

const Courses = () => {
  return (
    <>
    <HomeCarousel/>
    <div className="container-fluid my-5">
      
      <PopularCourses/>
      <PopularWorkout/>
    </div>
    </>
  )
}

export default Courses