import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import history from './app/components/history';
import Navigation from './app/components/navbar/Navigation';
import Homepage from './app/components/homepage/Homepage';
import Footer from './app/components/footer/footer';
import AuthenticationForm from './authentication/components/AuthenticationForm';
import ProductsContainer from './products/components/ProductsContainer';
import { Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/state/store';



export class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Provider store={ store }>
          <Navigation />
          <div className="header-slider"><Route path="/" exact component={ Homepage } /></div>
          <Route path="/login" exact component={ AuthenticationForm } />
          <Route path="/products" exact component={ ProductsContainer } />
          <div className="footer-component"><Footer /></div>
        </Provider>
      </Router>
    )
  }
}

export default App;