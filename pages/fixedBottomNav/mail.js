import React from "react"
import BottomNav from "./bottomNav"
function Mail(props) {
    return (
        <>
            <li className="nav__item ">
                <a href={"mailto:"+props.mail} className="nav__link">
                    <i className="bi bi-envelope-fill"></i>

                </a>
            </li>

        </>
    )
}
export default Mail
