import axios from '../services/Request';

export const USER_FAIL_FETCH = 'USER_FAIL_FETCH';
export const USER_REQUEST_FETCH = 'USER_REQUEST_FETCH';
export const USER_SUCCESS_FETCH = 'USER_SUCCESS_FETCH';

export const USER_UPDATE_SUCCESS_FETCH = 'USER_UPDATE_SUCCESS_FETCH';
export const USER_UPDATE_FETCH = 'USER_UPDATE_FETCH';
export const USER_UPDATE_FAIL_FETCH = 'USER_UPDATE_FAIL_FETCH';

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

export const requestUserUpdateSuccess = user =>
  ({
    type: USER_UPDATE_SUCCESS_FETCH,
    user
  });

export const requestUserUpdate = () =>
  ({
    type: USER_UPDATE_FETCH
  });

export const requestUserUpdateFail = err =>
  ({
    type: USER_UPDATE_FAIL_FETCH,
    err
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

export const updateUser = (user, injection) => {
  const { axios } = Object.assign({}, dependencies, injection);

  return dispatch => {
    dispatch(requestUserUpdate());
    return axios.patch('/user', user)
      .then(({ data }) => dispatch(requestUserUpdateSuccess(data)))
      .catch(err => dispatch(requestUserUpdateFail(err)));
  };
};
