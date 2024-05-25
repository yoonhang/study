//import logo from './logo.svg';
import React, { Component } from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        Hello, React!!
        <Subject title="WEB" sub="world wide web..."> </Subject>
        <Subject title="WEB1234" sub="1234world wide web..."> </Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup..."> </Content>

      </div>
    );
  }
}

export default App;
