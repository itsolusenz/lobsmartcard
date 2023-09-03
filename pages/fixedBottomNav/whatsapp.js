import React from "react"
import BottomNav from "./bottomNav"
function Whatsapp(props) {
  return (
    <>
      <li className="nav__item ">
        <a href={"https://api.whatsapp.com/send?phone=" + props.number} className="nav__link">
          <i className="bi bi-whatsapp"></i>

        </a>
      </li>

    </>
  )
}
export default Whatsapp
