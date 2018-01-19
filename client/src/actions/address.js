import axios from '../services/Request';

export const ADDRESS_FAIL_FETCH = 'ADDRESS_FAIL_FETCH';
export const ADDRESS_REQUEST_FETCH = 'ADDRESS_REQUEST_FETCH';
export const ADDRESS_SUCCESS_FETCH = 'ADDRESS_SUCCESS_FETCH';

export const ADDRESS_UPDATE_SUCCESS_FETCH = 'ADDRESS_UPDATE_SUCCESS_FETCH';
export const ADDRESS_UPDATE_FETCH = 'ADDRESS_UPDATE_FETCH';
export const ADDRESS_UPDATE_FAIL_FETCH = 'ADDRESS_UPDATE_FAIL_FETCH';

const dependencies = { axios };

export const requestAddressFail = err =>
  ({
    type: ADDRESS_FAIL_FETCH,
    err
  });

export const requestAddress = () =>
  ({
    type: ADDRESS_REQUEST_FETCH
  });

export const requestAddressSuccess = address =>
  ({
    type: ADDRESS_SUCCESS_FETCH,
    address
  });

export const requestAddressUpdateSuccess = address =>
  ({
    type: ADDRESS_UPDATE_SUCCESS_FETCH,
    address
  });

export const requestAddressUpdate = () =>
  ({
    type: ADDRESS_UPDATE_FETCH
  });

export const requestAddressUpdateFail = err =>
  ({
    type: ADDRESS_UPDATE_FAIL_FETCH,
    err
  });

export const fetchAddress = injection => {
  const { axios } = Object.assign({}, dependencies, injection);

  return dispatch => {
    dispatch(requestAddress());
    return axios.get('/address')
      .then(({ data }) => dispatch(requestAddressSuccess(data)))
      .catch(err => dispatch(requestAddressFail(err)));
  };
};

export const updateAddress = (address, injection) => {
  const { axios } = Object.assign({}, dependencies, injection);

  return dispatch => {
    dispatch(requestAddressUpdate());
    return axios.put('/address', { list: address })
      .then(({ data }) => dispatch(requestAddressUpdateSuccess(data)))
      .catch(err => dispatch(requestAddressUpdateFail(err)));
  };
};
