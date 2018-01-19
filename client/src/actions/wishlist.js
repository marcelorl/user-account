import axios from '../services/Request';

export const WISHLIST_FAIL_FETCH = 'WISHLIST_FAIL_FETCH';
export const WISHLIST_REQUEST_FETCH = 'WISHLIST_REQUEST_FETCH';
export const WISHLIST_SUCCESS_FETCH = 'WISHLIST_SUCCESS_FETCH';

const dependencies = { axios };

export const requestWishlistFail = err =>
  ({
    type: WISHLIST_FAIL_FETCH,
    err
  });

export const requestWishlist = () =>
  ({
    type: WISHLIST_REQUEST_FETCH
  });

export const requestWishlistSuccess = wishlist =>
  ({
    type: WISHLIST_SUCCESS_FETCH,
    wishlist
  });

export const fetchWishlist = injection => {
  const { axios } = Object.assign({}, dependencies, injection);

  return dispatch => {
    dispatch(requestWishlist());
    return axios.get('/wishlist')
      .then(({ data }) => dispatch(requestWishlistSuccess(data)))
      .catch(err => dispatch(requestWishlistFail(err)));
  };
};
