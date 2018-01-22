import configureMockStore from '../../services/ConfigureMockStore/configureMockStore';
import {
  requestOrderFail,
  requestOrder,
  requestOrderSuccess,
  fetchOrder,

  ORDER_FAIL_FETCH,
  ORDER_REQUEST_FETCH,
  ORDER_SUCCESS_FETCH
} from '../order';

const err = 'err';
const success = {
  data: 'success'
};

describe('#order', () => {
  describe('#actions', () => {
    const order = {
      image: 'image',
      name: 'name',
      description: 'description',
      purchaseDate: 'purchaseDate'
    };

    it('should create an action to list order failed', () => {
      const expectedAction = {
        type: ORDER_FAIL_FETCH,
        err
      };

      expect(requestOrderFail(err)).toEqual(expectedAction);
    });

    it('should create an action to fetch list', () => {
      const expectedAction = {
        type: ORDER_REQUEST_FETCH
      };

      expect(requestOrder()).toEqual(expectedAction);
    });

    it('should create an action to fetch list success', () => {
      const expectedAction = {
        type: ORDER_SUCCESS_FETCH,
        order
      };

      expect(requestOrderSuccess(order)).toEqual(expectedAction);
    });
  });

  describe('#requests', () => {
    let store;

    beforeEach(() => {
      store = configureMockStore({});
    });

    describe('#fetchOrder', () => {
      const axios = {
        get: jest
          .fn()
          .mockImplementationOnce(() => Promise.resolve(success))
          .mockImplementationOnce(() => Promise.reject(err))
      };

      it('should fetchOrder success', async () => {
        const expectedActions = [
          { type: ORDER_REQUEST_FETCH },
          { type: ORDER_SUCCESS_FETCH, order: success.data }
        ];

        await store.dispatch(fetchOrder({ axios }));

        expect(store.getActions()).toEqual(expectedActions);
        expect(axios.get).toBeCalledWith('/order');
      });

      it('should fetchCheckout error', async () => {
        const expectedActions = [
          { type: ORDER_REQUEST_FETCH },
          { type: ORDER_FAIL_FETCH, err }
        ];

        await store.dispatch(fetchOrder({ axios }));

        expect(store.getActions()).toEqual(expectedActions);
        expect(axios.get).toBeCalledWith('/order');
      });
    });
  });
});
