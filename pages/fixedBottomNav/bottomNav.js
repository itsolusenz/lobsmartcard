import React from "react"
import Whatsapp from "./whatsapp"
import Card from "./card"
import Mail from "./mail"
import Phone from "./phone"
function BottomNav() {
    return (
      <>
       <div className="nav__menu nav__mobile pt-2" id="nav-menu">
          <ul className="nav__list d-flex">
            <Card/>
            <Mail mail="sathish@laabamone.com"/>
             <Whatsapp number="15551234567"/>
             <Phone number="+919585123995"/>
            </ul>
        </div>

              

             

              
  
      </>
    )
  }
  export default BottomNav
  