import { createModel } from '@rematch/core';
import { Product } from '../../index';
import { Toastify } from '../../../helpers/Toastify';
import Axios from 'axios';

type ProductsState = {
  list: Product[];
}

export const products = createModel({
  state : {
    list: []
  } as ProductsState,
  reducers: {
    updateProducts: (state: ProductsState, payload: Product[]): ProductsState => ({...state, list: payload })
  },
  effects : {
    async fetchProducts() {
      try {
        const { data } = await Axios.get('https://127.0.0.1:3000/backend/test.php', {
          headers: {
            'Access-Control-Allow-Origin' : '*',
          }
        });
        console.log(data);
        this.updateProducts(data);
      } catch (error) {
        (new Toastify()).error(`Something went wrong. ${ error.message }`);
      }
    }
  }
})