import get from 'lodash.get';

import {
  ORDER_FAIL_FETCH,
  ORDER_REQUEST_FETCH,
  ORDER_SUCCESS_FETCH
} from '../actions/order';

const INITIAL_STATE = {
  loading: false, list: [], error: ''
};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ORDER_FAIL_FETCH:
      return Object.assign({}, state, {
        error: 'Error',
        loading: false,
        list: []
      });
    case ORDER_REQUEST_FETCH:
      return Object.assign({}, state, {
        error: '',
        loading: true,
        list: []
      });
    case ORDER_SUCCESS_FETCH:
      return Object.assign({}, state, {
        error: '',
        loading: false,
        list: get(action, 'order', [])
      });
    default:
      return state;
  }
};

export default orderReducer;
