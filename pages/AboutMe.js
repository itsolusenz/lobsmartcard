
import React from 'react'
import AboutParent from './About-components/AboutParent'
import Service from './Service'
// import './App.css'; // Import your CSS file if needed

function AboutMe() {
  return (
    <>
      <div className='main' style={{ backgroundColor: "white" }}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='hr-lines' style={{ color: "black" }}>About Me </h2>
            </div>
            <div className='space'></div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <p style={{ color: "#657286" }}>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
              <p style={{ color: "#657286" }}>My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
            </div>
          </div>
        </div>
        <div className='space'></div>
        {/* <div className='container menubar-contents'> */}
        <AboutParent/>

      </div >
      <br/>
      <Service/>

    </>
  )
}

export default AboutMe


// ====CSS
