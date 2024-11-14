import React from 'react'
import AboutMe from '../components/AboutMe'
import MyExperience from '../components/MyExperience'
import Education from '../components/Education'
const About = () => {
  return (
    <div className='w-1/2' >
      <AboutMe/>
      <MyExperience/>
      <Education/>
    </div>
  )
}

export default About
