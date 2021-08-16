import {
  CREATE_CONTACTS_FAIL,
  CREATE_CONTACTS_LOADING,
  CREATE_CONTACTS_SUCCESS,
} from '../../../constants/actionTypes';
import axios from '../../../helpers/axiosIntstance';

export default form => dispatch => onSucess => {
  const requestPayload = {
    country_code: form.phoneCode || '',
    first_name: form.firstName || '',
    last_name: form.lastName || '',
    phone_number: form.phoneNumber || '',
    contact_picture: form.contactPicture || null,
    is_favorite: false,
  };

  dispatch({
    type: CREATE_CONTACTS_LOADING,
  });

  axios
    .post('/contacts', requestPayload)
    .then(res => {
      dispatch({
        type: CREATE_CONTACTS_SUCCESS,
        payload: res.data,
      });

      onSucess();
    })
    .catch(err => {
      dispatch({
        type: CREATE_CONTACTS_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Something Went Wrong.'},
      });
    });
};
