import axios from '../services/Request';

export const USER_FAIL_FETCH = 'USER_FAIL_FETCH';
export const USER_REQUEST_FETCH = 'USER_REQUEST_FETCH';
export const USER_SUCCESS_FETCH = 'USER_SUCCESS_FETCH';

const dependencies = { axios };

export const requestUserFail = err =>
  ({
    type: USER_FAIL_FETCH,
    err
  });

export const requestUser = () =>
  ({
    type: USER_REQUEST_FETCH
  });

export const requestUserSuccess = user =>
  ({
    type: USER_SUCCESS_FETCH,
    user
  });

export const fetchUser = injection => {
  const { axios } = Object.assign({}, dependencies, injection);

  return dispatch => {
    dispatch(requestUser());
    return axios.get('/user')
      .then(({ data }) => dispatch(requestUserSuccess(data)))
      .catch(err => dispatch(requestUserFail(err)));
  };
};
