import React from 'react';
import { connect } from 'react-redux';
import ProfileForm from './ProfileForm';
import {editProfile, fetchGoceode} from '../actions/profile';


const EditProfilePage = (props) => {
  return (
    <div className='profile-form'>
      <h1 className="form-title">Edit Profile</h1>
      <ProfileForm
        profile={props.profile}
        onSubmit={(profile) => {
          props.dispatch(editProfile(profile));
          if(profile.address){
            props.dispatch(fetchGoceode(profile.address))
          }
          props.history.push('/profile')
        }}/>
      <button className="button form-button--cancel" onClick={() => {
        props.history.push('/profile');
      }}>
        Cancel Edit
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps)(EditProfilePage);
