import axios from '../services/Request';

export const ORDER_FAIL_FETCH = 'ORDER_FAIL_FETCH';
export const ORDER_REQUEST_FETCH = 'ORDER_REQUEST_FETCH';
export const ORDER_SUCCESS_FETCH = 'ORDER_SUCCESS_FETCH';

const dependencies = { axios };

export const requestOrderFail = err =>
  ({
    type: ORDER_FAIL_FETCH,
    err
  });

export const requestOrder = () =>
  ({
    type: ORDER_REQUEST_FETCH
  });

export const requestOrderSuccess = order =>
  ({
    type: ORDER_SUCCESS_FETCH,
    order
  });

export const fetchOrder = injection => {
  const { axios } = Object.assign({}, dependencies, injection);

  return dispatch => {
    dispatch(requestOrder());
    return axios.get('/order')
      .then(({ data }) => dispatch(requestOrderSuccess(data)))
      .catch(err => dispatch(requestOrderFail(err)));
  };
};
