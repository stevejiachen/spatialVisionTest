import React from 'react';
import ProfileForm from './ProfileForm';
import { createProfile, fetchGoceode } from '../actions/profile';
import { connect } from 'react-redux';


const CreateProfilePage = (props) => (
  <div className='profile-form'>
    <h1 className="form-title">Create Profile</h1>
    <ProfileForm
      onSubmit={(profile) => {
        props.dispatch(createProfile(profile));
        if(profile.address){
          props.dispatch(fetchGoceode(profile.address))
        }
        props.history.push('/profile');
      }}
    />
  </div>
);



export default connect()(CreateProfilePage)
