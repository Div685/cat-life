import React from 'react';

const NavBar = () => (
  <div className="NavBar d-flex justify-content-between navbar navbar-expand-lg navbar-light bg-primary p-2 align-items-center">
    <a href="/" className="nav__logo text-light text-decoration-none align-items-center">
      <h3 className="nav__logo">CatsLifeStyle</h3>
    </a>

    <span className="nav__link text-light">Cat API</span>
  </div>
);

export default NavBar;
