import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';


class App extends Component {
  render() {
    return (
      <div>
        
        <Dashboard />
        <Form />
        <Header />

      </div>
    );
  }
}

export default App;
