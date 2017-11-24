import axios from 'axios';



// ADD_EXPENSE
export const CREATE_PROFILE = 'CREATE_PROFILE'

export const createProfile = (
  {
    name = '',
    email = '',
    birthday = '',
    address = ''
  } = {}
) => ({
  type: 'CREATE_PROFILE',
    profile: {
      name,
      email,
      birthday,
      address
  }
});

// EDIT_EXPENSE

export const EDIT_PROFILE = 'EDIT_PROFILE';

export const editProfile = (updates) => ({
  type: EDIT_PROFILE,
  updates
});

export const FETCH_GEOCODE = 'FETCH_GEOCODE';

export const fetchGoceode = (address) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`;

  const request = axios.get(url);

  return {
    type: FETCH_GEOCODE,
    payload:request
  }

}
