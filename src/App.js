import React, { Component } from 'react';
import "./App.css";
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={ Home } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/users/:id" render={ (props) => <Users {...props} greetingMessage="Good Morning" />} />
      </BrowserRouter>
    );
  }
}

export default App;
