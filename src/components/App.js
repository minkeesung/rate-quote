import React, { Component } from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { Button } from 'react-bootstrap'
import Select from 'react-select'
import Form from './Form'
import Table from './Table'

class App extends Component {
  render() {

    return (
      <div className="App">
        <Form />
        <Table />
      </div>
    );
  }
}

export default App;
