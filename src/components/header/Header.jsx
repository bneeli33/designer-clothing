import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

function Header() {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <strong>DESIGNERWARE</strong>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          <strong>SHOP</strong>
        </Link>
        <Link className="option" to="/contact">
          <strong>CONTACT</strong>
        </Link>
      </div>
    </div>
  );
}

export default Header;
