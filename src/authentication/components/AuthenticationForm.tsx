import React from 'react';
import { Button, Container, FormGroup, Input, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { RootDispatch, RootState } from '../../app/state/store';
import './styles/AuthenticationForm.css';

interface Props {
  login: (dto: {  email: string, password: string }) => Promise<void>,
  loginTryout: string,
}

interface State {
  email: string,
  password: string,
}

export class AuthenticationForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  verifyLogin = () => {
    if(this.state.email === 'admin' && this.state.password === 'adminpassword') {
      return true;
    }

    return false;
  }

  handleClick = async () => {
    await this.props.login({
      email: this.state.email,
      password: this.state.password,
    });
  };


  handleOnChange = (field: 'email' | 'password', value: string) => {
    const state: State = { ...this.state };
    state[field] = value;
    this.setState(state);
  };

  render() {
    return (
      <div className="login">
        <Container>
          <h1>Connectez vous</h1>
          <FormGroup>
            <Label for="Email"><span>* </span>Email</Label>
            <Input
              type="email"
              onChange={ (event) => this.handleOnChange('email', event.target.value) }
              name="email"
              id="email"
              placeholder="Entrez votre adresse mail..." />
          </FormGroup>
          <FormGroup>
            <Label for="Password"><span>* </span>Password</Label>
            <Input 
              type="password"
              onChange={ (event) => this.handleOnChange('password', event.target.value) }
              value={ this.state.password }
              name="password"
              id="password"
              placeholder="Enter your password..." />
          </FormGroup>
          <Button className="Submit" onClick={ this.handleClick  }>Connexion</Button>
          <h3 className= { this.props.loginTryout === "failed" ? 'visible' : 'cache'}>Erreur. Email et/ou password incorrect.</h3>
        </Container>
      </div>
    );
  }
}

const mapState = (state: RootState) => ({ loginTryout: state.auth.loginTryout })

const mapDispatch = (dispatch: RootDispatch) => ({ login: dispatch.auth.login });

export default connect(mapState, mapDispatch)(AuthenticationForm);