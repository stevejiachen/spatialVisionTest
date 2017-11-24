import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GoogleMap from './GoogleMap';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import userAvatar from '../images/user1.png'



const renderMap = (props) =>{
  if(props.profile.address && !props.profile.geocode){
    return  <button>Google Map loading failed, please retry</button>
  }
  else if(props.profile.address && props.profile.geocode){
    return <GoogleMap geocode={props.profile.geocode} />
  }
}


const ProfilePage = (props) => (

  <div className="profile-page">
    <h1 className="form-title">User Profile</h1>
    <div className="row">
      <section className="user-avatar col-sm-5">
        <img src='./images/user1.png' className="user-icon"/>
      </section>
      <section className="user-info col-sm-7">
        <div>{props.profile.name}</div>
        <p>email: <span>{props.profile.email}</span></p>
        <p>birthday: <span>{props.profile.birthday}</span></p>
        <p>address: <span>{props.profile.address}</span></p>
        {renderMap(props)}
      </section>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps)(ProfilePage);
