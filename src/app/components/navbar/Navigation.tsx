import React from 'react';
import history from '../../components/history';
import { connect } from 'react-redux';
import { RootState, RootDispatch } from '../../state/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './styles/Navigation.css';


interface Props {
  logout: () => Promise<void>,
  isUserConnected: boolean,
}

interface State {
  isMenuOpened: boolean;
}

export class Navigation extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isMenuOpened: false,
    };
  }

  showOrHide = () => this.setState({ isMenuOpened: !this.state.isMenuOpened });

  handleOnClick = () => {
    history.push('/login');
  }

  render() {
    const toggleClassName = this.state.isMenuOpened ? "active" : "";

    if (this.props.isUserConnected) {
      return (
        <div className="component-nav">
          <div className="info-user">
            <div className="container">
              <div className="user-box">
                Connecté
              </div>
            </div>
          </div>
          <div className="nav nav-bar">
            <div className="container container-nav">
              <div className="link-dashboard">
                <a href="/"> Eco-Chain</a>
              </div>
              <button id='toggle' className={ toggleClassName } onClick={ this.showOrHide }>
               <div className="nav-icon">
                <div />
               </div>
              </button>
              <div className="menu">
                <a href="/"> Produits</a>
                <a href="/"> Transactions</a>
                <a href="/"> Contactez-nous</a>
                <button
                  className="logo-out"
                  onClick= { this.props.logout }>
                  <FontAwesomeIcon className="icon-logout" icon={ faSignOutAlt } />
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className='component-nav'>
        <div className='info-user'>
          <div className="container">
            <div className="user-box">
              Déconnecté
            </div>
          </div>
        </div>
        <div className="nav nav-bar">
          <div className="container container-nav">
            <div className='link-dashboard'>
              <a href="/"> Eco-Chain</a>
            </div>
            <button id='toggle' className={ toggleClassName } onClick={ this.showOrHide }>
              <div className="nav-icon">
                <div />
              </div>
            </button>
            <div className="menu">
              <a href="/"> Produits</a>
              <a href="/"> Transactions</a>
              <a href="/"> Contactez-nous</a>
              <button
                className="logo-in"
                onClick= { this.handleOnClick }>
                <FontAwesomeIcon className="icon-login" icon={ faSignInAlt } />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state: RootState) => ({ isUserConnected: state.auth.isUserConnected })

const mapDispatch = (dispatch: RootDispatch) => ({ logout: dispatch.auth.logout });

export default connect(mapState, mapDispatch)(Navigation);