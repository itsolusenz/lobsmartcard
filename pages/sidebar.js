import React, { useState } from 'react';

const SidenavExample = () => {
  const [sidenavWidth, setSidenavWidth] = useState(0);

  const openNav = () => {
    setSidenavWidth(250);
  };

  const closeNav = () => {
    setSidenavWidth(0);
  };

  return (
    <div>
      <div
        id="mySidenav"
        className="sidenav"
        style={{ width: sidenavWidth }}
      >
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a href="#">About</a>
        <a href="#service">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      <span
        style={{ fontSize: '30px', cursor: 'pointer' }}
        onClick={openNav}
      >
        &#9776; open
      </span>
    </div>
  );
};

export default SidenavExample;
