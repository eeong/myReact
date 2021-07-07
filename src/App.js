import './App.css';
import { Component } from 'react';
import Header from './components/Header';


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
      ]
    }
  }
  render(){
    return(
    <div className="App">
    <Header title={this.state.header.title} list={this.state.list}></Header>
    </div>
  );
  }
}

export default App;
