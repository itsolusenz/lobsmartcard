import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
function Navbar() {
  return (
    <>
      <div className='navbar-box'>
        <div className='d-flex justify-content-end'>
          <div className='d-flex '>
            <div className='row justify-content-between nav-box border-rad'>
              <div className='py-2 col-2 nav-boxs cursor'>Home</div>
              {/*} <div className='ms-3 py-2 col-2 nav-boxs cursor'><i className="bi bi-file-earmark-person-fill"></i>Resume</div>*/}
              <div className='ms-3 py-2 col-2 nav-boxs cursor'>Service</div>
              <div className='ms-3 py-2 col-2 nav-boxs cursor'>Product</div>
              <div className='ms-3 py-2  col-2 nav-boxs cursor'>Contact</div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}
export default Navbar

