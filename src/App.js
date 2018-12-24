import React, { Component } from 'react';
// import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import RouteConfig from './router/index';
import Slider from "./components/slider/slider";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        <div className="main_content">
          <Slider />
          <div className="main_page"><RouteConfig /></div>
        </div> 
      </div>
    );
  }
}

export default App;
