import React from "react";
import { Component } from "react";
import ReactModalLogin from 'react-modal-login';
import { Button } from 'semantic-ui-react';
import api from './../../utils/api';
import { isThisISOYear } from "date-fns";
import { update } from './../../services/withUser';


const google = {
  client_id: 'YOUR GOOGLE APP ID GOES HERE',
  scope: "https://www.googleapis.com/auth/plus.login"
};
const facebook = {
  appId: '573782816318821',
  cookie: true,
  xfbml: true,
  version: 'v2.11',
  scope: 'email'
};


class Login extends Component {
  constructor(props) {
    super(props);
    this.passUserToParent = props.handleUserLogin;
  }
  state = {
    email: "",
    password: "",
    handle: "",
    showModal: false,
    loading: false,
    error: null
  };
  openModal() {
    this.setState({
      showModal: true,
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
      error: null
    });
  }

  onLoginSuccess(method, response) {
    console.log('logged successfully with ' + method);
  }

  onLoginFail(method, response) {
    console.log('logging failed with ' + method);
    this.setState({
      error: response
    })
  }
  onLogin() {
    this.passUserToParent(this.state)
  }
  onRegister() {
    const newUser = {
      email: document.querySelector('#email').value,
      password: document.querySelector('#password').value,
      handle: document.querySelector('#handle').value
    };
    if (!newUser.email || !newUser.password || !newUser.handle) {
      this.setState({
        error: true
      });
    }
    else {
      api.makeNewUser(newUser.email, newUser.password, newUser.handle).then(response => {
        this.setState({
          email: response.data.email,
          handle: response.data.handle
        })
        console.log(this.state);
        update(response.data)
        this.passUserToParent(this.state);
      })
    }
    alert(JSON.stringify(newUser));
  }
  onRecoverPassword() {

  }
  

  startLoading() {
    this.setState({
      loading: true
    })
  }

  finishLoading() {
    this.setState({
      loading: false
    })
  }

  afterTabsChange() {
    this.setState({
      error: null
    });
  }
  // handleInputChange = event => {
  //   let value = event.target.value;
  //   const name = event.target.name;
  //   alert("handle input change event is firing");
  //   this.setState({
  //     [name]: value
  //   });
  // }


  render() {
    return (
      <div className="container">
        <Button
          onClick={() => this.openModal()}
        >
          login/signup
        </Button>

        <ReactModalLogin
          onChange={this.handleInputChange}
          visible={this.state.showModal}
          onCloseModal={this.closeModal.bind(this)}
          loading={this.state.loading}
          error={this.state.error}
          tabs={{
            afterChange: this.afterTabsChange.bind(this)
          }}
          loginError={{
            label: "Couldn't sign in, please try again."
          }}
          registerError={{
            label: "Couldn't sign up, please try again."
          }}
          startLoading={this.startLoading.bind(this)}
          finishLoading={this.finishLoading.bind(this)}
          providers={{
            facebook: {
              config: facebook,
              onLoginSuccess: this.onLoginSuccess.bind(this),
              onLoginFail: this.onLoginFail.bind(this),
              label: "Continue with Facebook"
            },
            google: {
              config: google,
              onLoginSuccess: this.onLoginSuccess.bind(this),
              onLoginFail: this.onLoginFail.bind(this),
              label: "Continue with Google"
            }
          }}
          form={{
            onLogin: this.onLogin.bind(this),
            onRegister: this.onRegister.bind(this),
            onRecoverPassword: this.onRecoverPassword.bind(this),


            recoverPasswordSuccessLabel: this.state.recoverPasswordSuccess
              ? {
                label: "New password has been sent to your mailbox!"
              }
              : null,
            recoverPasswordAnchor: {
              label: "Forgot your password?"
            },
            loginBtn: {
              label: "Sign in"
            },
            registerBtn: {
              label: "Sign up"
            },
            recoverPasswordBtn: {
              label: "Send new password"
            },
            loginInputs: [
              {
                containerClass: 'RML-form-group',
                label: 'Email',
                type: 'email',
                inputClass: 'RML-form-control',
                id: 'email',
                name: 'email',
                placeholder: 'Email'
              },
              {
                containerClass: 'RML-form-group',
                label: 'Password',
                type: 'password',
                inputClass: 'RML-form-control',
                id: 'password',
                name: 'password',
                placeholder: 'Password',
              }
            ],
            registerInputs: [
              {
                containerClass: 'RML-form-group',
                label: 'Nickname',
                type: 'text',
                inputClass: 'RML-form-control',
                id: 'handle',
                name: 'handle',
                placeholder: 'Handle',
              },
              {
                containerClass: 'RML-form-group',
                label: 'Email',
                type: 'email',
                inputClass: 'RML-form-control',
                id: 'email',
                name: 'email',
                placeholder: 'Email',
              },
              {
                containerClass: 'RML-form-group',
                label: 'Password',
                type: 'password',
                inputClass: 'RML-form-control',
                id: 'password',
                name: 'password',
                placeholder: 'Password',
              }
            ],
            recoverPasswordInputs: [
              {
                containerClass: 'RML-form-group',
                label: 'Email',
                type: 'email',
                inputClass: 'RML-form-control',
                id: 'email',
                name: 'email',
                placeholder: 'Email',
              },
            ],
          }}
        >
        </ReactModalLogin>
      </div>
    );
  }
}

export default Login;


