import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NotificationEventDispatcher from "./event/notification/NotificationEventDispatcher";
import Notification from "./Notification";

export default class App extends Component {

  dispatcher = new NotificationEventDispatcher();

  componentDidMount(){
    this.dispatcher.dispatch({ notification: "Initial Value!" });
  }

  handleInput = (event) => {
    event.preventDefault();
    return this.dispatcher.dispatch({ notification: event.target.value })
  };

  render() {
    return (
      <div className="App">
        <input onChange={this.handleInput}></input>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Notification/>
        <Notification/>
        <Notification/>
        <Notification/>
        <Notification/>

      </div>
    );
  }
}


