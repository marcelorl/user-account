import axios from '../services/Request';

export const WISHLIST_FAIL_FETCH = 'WISHLIST_FAIL_FETCH';
export const WISHLIST_REQUEST_FETCH = 'WISHLIST_REQUEST_FETCH';
export const WISHLIST_SUCCESS_FETCH = 'WISHLIST_SUCCESS_FETCH';

export const DELETE_PRODUCT_FAIL = 'DELETE_PRODUCT_FAIL';
export const DELETE_PRODUCT_REQUEST = 'DELETE_PRODUCT_REQUEST';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';

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

export const requestDeleteProductFail = err =>
  ({
    type: DELETE_PRODUCT_FAIL,
    err
  });

export const requestDeleteProduct = () =>
  ({
    type: DELETE_PRODUCT_REQUEST
  });

export const requestDeleteProductSuccess = wishlist =>
  ({
    type: DELETE_PRODUCT_SUCCESS,
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

export const deleteProduct = (id, injection) => {
  const { axios } = Object.assign({}, dependencies, injection);

  return dispatch => {
    dispatch(requestDeleteProduct());
    return axios.delete(`/wishlist/${id}`)
      .then(({ data }) => dispatch(requestDeleteProductSuccess(data)))
      .catch(err => dispatch(requestDeleteProductFail(err)));
  };
};
