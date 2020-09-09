import { connect } from 'react-redux';
import { Loader } from '../../app/utils/Loader';
import { Product } from '../index';
import { RootDispatch, RootState } from '../../app/state/store';
import React from 'react';

interface Props {
  fetchProducts: () => Promise<void>,
  products: Product[],
}

export class ProductsContainer extends React.Component <Props> {
  async componentDidMount() {
    await this.props.fetchProducts();
  }

  render(){
    if (!this.props.products.length) {
      return <Loader />;
    }

    return this.props.products;
  }
}

const mapState = (state: RootState)  => ({
  products: state.products.list,
});

const mapDispatch = (dispatch: RootDispatch) => ({
  fetchProducts: dispatch.products.fetchProducts,
});

export default connect(mapState, mapDispatch)(ProductsContainer);