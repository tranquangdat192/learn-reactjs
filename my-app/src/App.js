import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav, NavItem, NavDropdown, MenuItem, Navbar, Jumbotron, Button } from 'react-bootstrap';
import Header from  './components/header/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
      </div>
    );
  }
}

export default App;
