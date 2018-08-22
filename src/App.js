import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import Slider from "./components/slider/slider";

class App extends Component {
  async componentDidMount() {
    await fetch('https://dev.gogen.cn/user/doLogin', {
      method: 'post',
      headers: new Headers({
        'Accept': 'application/json'
      }),
      body: new FormData().append('loginId', '18257507908')
    }).then((res) => {
      return res.json()
    }).then((res) => {
      console.log(res)
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Slider />
      </div>
    );
  }
}

export default App;
