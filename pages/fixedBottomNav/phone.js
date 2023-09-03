import React from "react"
import BottomNav from "./bottomNav"
function Phone(props) {
    return (
      <>
      <li className="nav__item ">
                <a href={"tel:"+props.number} className="nav__link">
                  <i className="bi bi-telephone-fill"></i>
                </a>
              </li>
  
      </>
    )
  }
  export default Phone
  