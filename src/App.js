//import logo from './logo.svg';
import React, { Component } from 'react';
import Content from './components/Content';
import TOC from './components/TOC';
import Subject from './components/Subject';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // mode:'read',
      mode:'welcome',
      subject:{title:'WEB', sub:'World wide web....'},
      welcome:{title:'Welcome', desc:'Hello, React....'},
      contents:[
        {id:1, title:"HTML", desc:'HTML is .......'},
        {id:2, title:"CSS", desc:'CSS is .......'},
        {id:3, title:"XML", desc:'XML is .......'}
      ]
    }
  }
  

  render() {
  console.log('App render......')
  var _title, _desc = null;
  if(this.state.mode === 'welcome'){
    _title = this.state.welcome.title;
    _desc = this.state.welcome.desc;
  } else if(this.state.mode === 'read'){
    _title = this.state.contents[0].title;
    _desc = this.state.contents[0].desc;
  }
    return (
      <div className="App">
        Hello1
        
        {/* <Subject>
            title={this.state.subject.title} 
            sub={this.state.subject.sub}>
        </Subject> */}

        <header>
          <h1><a href='/' onClick={function(e){
            console.log(e);
            debugger;
            alert('hi');
          }}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>

        Hello2
        {/* <TOC></TOC> */}
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
        <Subject></Subject>
      </div>
    );
  }
}

export default App;
