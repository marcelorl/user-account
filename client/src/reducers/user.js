import get from 'lodash.get';

import {
  USER_FAIL_FETCH,
  USER_REQUEST_FETCH,
  USER_SUCCESS_FETCH
} from '../actions/user';

const INITIAL_STATE = {
  loading: false, data: {}, error: ''
};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_FAIL_FETCH:
      return Object.assign({}, state, {
        error: 'Error',
        loading: false,
        data: {}
      });
    case USER_REQUEST_FETCH:
      return Object.assign({}, state, {
        error: '',
        loading: true,
        data: {}
      });
    case USER_SUCCESS_FETCH:
      return Object.assign({}, state, {
        error: '',
        loading: false,
        data: get(action, 'user', {})
      });
    default:
      return state;
  }
};

export default orderReducer;
