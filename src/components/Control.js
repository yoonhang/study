
import React, { Component } from 'react';


class Control extends Component {
    render() {
      return (
        <ul>
          <li><a href="/create" onClick={function(mode){
            e.preventDefault();
            this.props.onChangeMode('create');
          }.bind(this)}>create</a></li>
          <li><a href="/update">update</a></li>
          <li><input type="button" value="delete">delete</input></li>
        </ul>
      );
    }
  }

  export default Control;
