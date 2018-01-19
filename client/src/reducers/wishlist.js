import get from 'lodash.get';

import {
  WISHLIST_FAIL_FETCH,
  WISHLIST_REQUEST_FETCH,
  WISHLIST_SUCCESS_FETCH
} from '../actions/wishlist';

const INITIAL_STATE = {
  loading: false, list: [], error: ''
};

const wishlistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WISHLIST_FAIL_FETCH:
      return Object.assign({}, state, {
        error: 'Error',
        loading: false,
        list: []
      });
    case WISHLIST_REQUEST_FETCH:
      return Object.assign({}, state, {
        error: '',
        loading: true,
        list: []
      });
    case WISHLIST_SUCCESS_FETCH:
      return Object.assign({}, state, {
        error: '',
        loading: false,
        list: get(action, 'wishlist', [])
      });
    default:
      return state;
  }
};

export default wishlistReducer;
