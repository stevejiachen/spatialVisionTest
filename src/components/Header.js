import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <ul className="nav">
      <li><NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink></li>
      <li><NavLink to="/profile" activeClassName="is-active" exact={true}>Profile</NavLink></li>
      <li><NavLink to="/profile/edit" activeClassName="is-active">Edit Profile</NavLink></li>
    </ul>




  </header>
);

export default Header;
