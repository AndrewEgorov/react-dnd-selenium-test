import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Apple from './Apple';
import Banana from './Banana';
import Orange from './Orange';
import Box from './Box';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: ''
    };

    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDrop(type) {
    this.setState({
      type
    });
  }

  render() {
    return (
      <div className="app">
        <div>
          <Apple />
          <Banana />
          <Orange />
        </div>

        <Box onDrop={this.handleDrop} />

        {this.state.type && (
          <div className="app--type">That is a {this.state.type}</div>
        )}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
