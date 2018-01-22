import reducer from '../order';
import {
  ORDER_FAIL_FETCH,
  ORDER_REQUEST_FETCH,
  ORDER_SUCCESS_FETCH
} from '../../actions/order';

describe('#order', () => {
  describe('#reducer', () => {
    const INITIAL_STATE = {
      loading: false, list: [], error: ''
    };

    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(INITIAL_STATE)
    });

    it('should handle ORDER_FAIL_FETCH', () => {
      const errorResponse = {
        error: 'Error',
        list: [],
        loading: false
      };

      expect(
        reducer([], {
          type: ORDER_FAIL_FETCH
        })
      ).toEqual(errorResponse);

      expect(
        reducer({}, errorResponse)
      ).toEqual({});
    });

    it('should handle ORDER_REQUEST_FETCH', () => {
      const response = {
        error: '',
        list: [],
        loading: true
      };

      expect(
        reducer([], {
          type: ORDER_REQUEST_FETCH
        })
      ).toEqual(response);

      expect(
        reducer({}, response)
      ).toEqual({});
    });

    it('should handle ORDER_SUCCESS_FETCH', () => {
      const order = [ { data: 'test' } ];

      const successResponse = {
        error: '',
        list: order,
        loading: false
      };

      expect(
        reducer([], {
          type: ORDER_SUCCESS_FETCH,
          order
        })
      ).toEqual(successResponse);

      expect(
        reducer({}, successResponse)
      ).toEqual({});
    });
  });
});
