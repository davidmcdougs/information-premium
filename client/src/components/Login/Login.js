import React from "react";
import { Component } from "react";
import ReactModalLogin from 'react-modal-login';
import { Button } from 'semantic-ui-react';
import api from './../../utils/api';
import { update } from './../../services/withUser';


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
    const existingerUser = {
      password: document.querySelector('#password').value,
      handle: document.querySelector('#handle').value
    };
    if (!existingerUser.password || !existingerUser.handle) {
      this.setState({
        error: "please fill out both fields"
      })
    }
    else {
      api.login(existingerUser).then(response => {
        // this.setState({
        //   handle: response.data.handle
        // })
        console.log(response);
        update(response.data);
        this.setState({
          showModal: false
        })
      })
    }
  }
  onRegister() {
    const newUser = {
      email: document.querySelector('#email').value,
      password: document.querySelector('#password').value,
      handle: document.querySelector('#handle').value
    };
    if (!newUser.email || !newUser.password || !newUser.handle) {
      this.setState({
        error: "please ensure all fields are filled out"
      });
    }
    else {
      api.makeNewUser(newUser.email, newUser.password, newUser.handle).then(response => {
        this.setState({
          email: response.data.email,
          handle: response.data.handle
        })
        update(response.data);
        alert(this.state.handle + " was registered. Welcome to Information Premium.");
        this.setState({
          showModal: false
        });
      });
    }
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
  componentDidMount() {
    if(this.props.showModal) {
      this.openModal()
    }
  }


  render() {
    return (
      <div className="container">
      {this.props.button 
      ? <Button color='orange'
          onClick={() => this.openModal()}
        >
          login/signup
        </Button>
      : ""
      }
      {this.props.text
      ? <p onClick={() => this.openModal()}
      >
        login/signup
      </p>
      :""
      }

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
            label: this.state.error
          }}
          registerError={{
            label: this.state.error
          }}
          startLoading={this.startLoading.bind(this)}
          finishLoading={this.finishLoading.bind(this)}
          form={{
            onLogin: this.onLogin.bind(this),
            onRegister: this.onRegister.bind(this),
            onRecoverPassword: this.onRecoverPassword.bind(this),


            recoverPasswordSuccessLabel: this.state.recoverPasswordSuccess
              ? {
                label: "New password has been sent to your mailbox!"
              }
              : null,
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
                label: 'Handle',
                type: 'text',
                inputClass: 'RML-form-control',
                id: 'handle',
                name: 'handle',
                placeholder: 'Username'
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
                label: 'Handle',
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


