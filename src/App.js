import './App.css';
import { Component } from 'react';
import Header from './components/Header';
import TOC from './components/TOC';
import Content from './components/Content';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      welcome:{title:'welcome', desc:"react!"},
      header : {
        title: 'Iam title'
      },
      list : [
        {id:1,name:"html"},
        {id:2,name:"css"},
        {id:3,name:"js"},
        ],
      contents : [
        {id:1,title:"HTML", desc:"html is html"},
        {id:2,title:"CSS", desc:"css is css"},
        {id:3,title:"Java Script", desc:"javascript is javascript"}
      ]
    }

  }
  render(){
    let _title, _desc = undefined;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === "read"){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return(
    <div className="App">
    {/* <Header title={this.state.header.title} ></Header> */}
    <a href="/" onClick={function(e){
      e.preventDefault();
      this.setState({mode:'welcome'});
    }.bind(this)
      }>click!</a>
    <TOC list={this.state.list}></TOC>
    <Content lists={this.state.contents} title={_title} desc={_desc}></Content>
    </div>
  );
  }
}

export default App;
