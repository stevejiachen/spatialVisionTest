import React from 'react';
import ProfilePage from './ProfilePage';
import { NavLink } from 'react-router-dom'

const AppDashboardPage = () => (
  <div >
    <div className="profile-page">
      <h1 className="form-title">Dashboard</h1>
      <div className="row">
        <section className="user-avatar col-sm-5">
          <img src='./images/user1.png' className="user-icon"/>
        </section>
        <section className="user-info col-sm-7">

        </section>
      </div>
    </div>
  </div>
);

export default AppDashboardPage;
