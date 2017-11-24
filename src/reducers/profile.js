// Expenses Reducer

import {CREATE_PROFILE, EDIT_PROFILE, FETCH_GEOCODE} from '../actions/profile'

const profileReducerDefaultState = {
  // name:'steve',
  // email:'steveguojiachen@gmail.com',
  // birthday:'1992-10-20',
  // address: '43 farnham street'
};

export default (state = profileReducerDefaultState, action) => {
  switch (action.type) {
    case CREATE_PROFILE:
      return {
        ...state,
        ...action.profile
      };
    case EDIT_PROFILE:
      return {
        ...state,
        ...action.updates
      }
    case FETCH_GEOCODE:
      if(action.payload.data.results[0]){
        return {
          ...state,
          geocode:{
            lat: action.payload.data.results[0].geometry.location.lat,
            lng: action.payload.data.results[0].geometry.location.lng
          }
        }
      } else {
        return state
      }
    default:
      return state;
  }
};
