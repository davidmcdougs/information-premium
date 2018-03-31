import React from "react";
import { Component } from "react";
import ReactModalLogin from 'react-modal-login';
import { Button } from 'semantic-ui-react';
import api from './../../utils/api';
import { isThisISOYear } from "date-fns";


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


class Login extends Component 
{
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

  }
  onRegister() {
    api.makeNewUser("test@testdomain.com", "securityiskey", "ogtester");
    alert(JSON.stringify(this.state));
  }
  onRecoverPassword(){

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
  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    alert("handle input change event is firing");
    this.setState({
      [name]: value
    });
  }


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
                id: 'login',
                name: 'handle',
                placeholder: 'Nickname',
                onChange: this.handleInputChange.bind(this),
                value: this.state.handle
                
              },
              {
                containerClass: 'RML-form-group',
                label: 'Email',
                type: 'email',
                inputClass: 'RML-form-control',
                id: 'email',
                name: 'email',
                placeholder: 'Email',
                onChange: this.handleInputChange.bind(this),
                value: this.state.email
              },
              {
                containerClass: 'RML-form-group',
                label: 'Password',
                type: 'password',
                inputClass: 'RML-form-control',
                id: 'password',
                name: 'password',
                placeholder: 'Password',
                onChange: this.handleInputChange.bind(this),
                value: this.state.password
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


