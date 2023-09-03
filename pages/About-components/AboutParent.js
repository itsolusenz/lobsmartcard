import React from "react"
import UiDesign from "./UiDesign"

const AboutParent = (props) => {
    return (
       <>
        <div className="container">
          <div className='row '>
            <div className='col-md-12'>
              <h3 className='pb-2' style={{ color: "black" }}>What I do!</h3>
            </div>
          </div>
          <div className='row' >
            <UiDesign icon="fa fa-home" color="bg-color-1" title="UI/UX Design" content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat" />
            <UiDesign icon="fa fa-home" color="bg-color-2" title="App Development" content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat." />
          </div>
          <br />


          <div className='row' >
            <UiDesign icon="fa fa-home" color="bg-color-1" title="Photography" content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat." />
            <UiDesign icon="fa fa-home" color="bg-color-3" title="Mobile App Develeopment" content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat." />
          </div>

          <br />

          <div className='row' >
            <UiDesign icon="fa fa-home" color="bg-color-4" title="Management" content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat." />
            <UiDesign icon="fa fa-home" color="bg-color-5" title="Web Development" content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat." />
          </div>
          </div>
        </>
    )
}
export default AboutParent