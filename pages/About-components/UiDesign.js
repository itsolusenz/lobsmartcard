import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const UiDesign = (props) => {
    return (
        <div className='col-md-6 sm-btm'>
            <div className={props.color} style={{ color: "white", padding: "4%" }}>
                <div className='row'>
                    <div className='col-md-3'>
                    {/* <FontAwesomeIcon icon={icon({name:'coffee'})} />  */}
                    {/* <FontAwesomeIcon icon={faCoffee} /> */}
                
                    </div>
                    <div className='col-md-9'>
                        <h5 className='pt-3' style={{ color: "black" }}>{props.title}</h5>
                        <p className='pt-3' style={{ color: "#657286" }}>{props.content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UiDesign