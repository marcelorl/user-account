import get from 'lodash.get';

import {
  ADDRESS_FAIL_FETCH,
  ADDRESS_REQUEST_FETCH,
  ADDRESS_SUCCESS_FETCH
} from '../actions/address';

const INITIAL_STATE = {
  loading: false, data: [], error: ''
};

const addressReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADDRESS_FAIL_FETCH:
      return Object.assign({}, state, {
        error: 'Error',
        loading: false,
        data: []
      });
    case ADDRESS_REQUEST_FETCH:
      return Object.assign({}, state, {
        error: '',
        loading: true,
        data: []
      });
    case ADDRESS_SUCCESS_FETCH:
      return Object.assign({}, state, {
        error: '',
        loading: false,
        data: get(action, 'address.list', [])
      });
    default:
      return state;
  }
};

export default addressReducer;
