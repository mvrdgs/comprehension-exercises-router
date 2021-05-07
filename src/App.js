import React, { Component } from 'react';
import "./App.css";
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Header from './components/Header';
import StrictAccess from './StrictAccess';

class App extends Component {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { username, password } = this.state;
    return (
      <BrowserRouter>
        <Header loginBtn={ this.loginBtn } handleInput={ this.handleInput } username={ username } password={ password } />
        <Switch>
          <Route path="/about" component={ About } />
          <Route path="/users/:id" render={ (props) => <Users {...props} greetingMessage="Good Morning" />} />
          <Route path="/users/" render={ (props) => <Users {...props} greetingMessage="Good Morning" />} />
          <Route path="/strictaccess" render={ (props) => <StrictAccess username={ username } password= { password }/> } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
