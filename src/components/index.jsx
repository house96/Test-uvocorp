import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import axios from 'axios';
import 'normalize.css';

import Header from './Header/index';
import UserInfo from './UserInfo/index';
import RepoList from './RepoList/index';

class App extends Component {
  state = {
    value: '',
    repos: [],
    userData: '',
    isLoading: false,
    isSuccess: true,
    isInputEmpty: false,
  }

  _setStateButton = () => {
    const { value, userData } = this.state;
    if (userData) {
      return value.toLowerCase() === userData.login.toLowerCase();
    }
    return false;
  }
  _getUserData = (e) => {
    const { value } = this.state;
    e.preventDefault();
    if (value.length > 0) {
      axios.get(`http://localhost:8080/users/${value}`)
        .then(res => this.setState({
          userData: res.data,
          isLoading: true,
          isSuccess: true,
          isInputEmpty: false,

        }))
        .catch(this.setState({
          isLoading: true,
          isSuccess: false,
          isInputEmpty: false,
        }));

      axios.get(`http://localhost:8080/users/${value}/repos`)
        .then(res => this.setState({ repos: res.data }));
    } else {
      this.setState({
        isInputEmpty: true,
      });
    }
  }
  _getUserName =(e) => {
    this.setState({
      value: e.target.value,
    });
  }
  render() {
    const {
      value, isLoading, isSuccess, userData, repos, isInputEmpty,
    } = this.state;

    return (
      <div className="App">
        <Header
          stateButton={this._setStateButton}
          handlerOnChange={this._getUserName}
          value={value}
          handlerOnClick={this._getUserData}
          warn={isInputEmpty && !value}
        />
        <UserInfo
          isLoading={isLoading}
          isSuccess={isSuccess}
          userData={userData}
        />
        <RepoList isShow={isLoading && isSuccess} repos={repos} />
      </div>
    );
  }
}

export default hot(module)(App);
