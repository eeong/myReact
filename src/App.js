import './App.css';
import { Component } from 'react';
import Header from './components/Header';
import TOC from './components/TOC';
import Content from './components/Content';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      header : {
        title: 'Iam title'
      },
      list : [
        {id:1,name:"a"},
        {id:2,name:"b"},
        {id:3,name:"c"},
        ],
      contents : [
        {id:1,title:"HTML", desc:"html is html"},
        {id:2,title:"CSS", desc:"css is css"},
        {id:3,title:"Java Script", desc:"javascript is javascript"}
      ]
    }

  }
  render(){
    return(
    <div className="App">
    <Header title={this.state.header.title} ></Header>
    <TOC list={this.state.list}></TOC>
    <Content ></Content>
    </div>
  );
  }
}

export default App;
