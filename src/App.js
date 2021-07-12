import './App.css';
import { Component } from 'react';
import Header from './components/Header';
import TOC from './components/TOC';
import ModeList from './components/ModeList';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode:'welcome',
      welcome:{title:'welcome', desc:"react!"},
      read:{title:'read', desc:"item"},
      header : {
        title: 'Iam title',
        sub: 'i am sub'
      },
      contents : [
        {id:1,title:"HTML", desc:"html is html"},
        {id:2,title:"CSS", desc:"css is css"},
        {id:3,title:"Java Script", desc:"javascript is javascript"}
      ],
      selectedId : 2
    }

  }
  render(){
    let _title, _desc, _article = undefined;
    let max_length = this.state.contents.length;

    const onChangePage = function(Id){
      this.setState({mode:'read', selectedId : +Id
    });}

    const onChangeMode = function(_mode){
      this.setState({mode:_mode
    });}

    const onSubmitPage = function(_title,_desc){
      max_length += 1;
      let _content = this.state.contents.concat({id:max_length,title:_title,desc:_desc});
      this.setState({contents:_content});
    }

    if(this.state.mode === "read"){
      let i = 0
      while(i < this.state.contents.length){
        let data = this.state.contents[i];
        if(data.id === this.state.selectedId){
          _title= data.title;
          _desc = data.desc;
          _article=<ReadContent title={_title} desc={_desc}></ReadContent>
          break;
        }else{
          _title = this.state.read.title;
          _desc = this.state.read.desc;
          _article=<ReadContent title={_title} desc={_desc}></ReadContent>
        }
        i = i +1;
      }
    }else if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article=<ReadContent title={_title} desc={_desc}></ReadContent>
    }else if(this.state.mode === "create"){
      _article=<CreateContent onSubmitPage={onSubmitPage.bind(this)}></CreateContent>
    }
    
    return(
    <div className="App">
    <Header title={this.state.header.title} sub={this.state.header.sub}
    onChangePage={onChangePage.bind(this)}>
    </Header>
    {/* <a href="/" onClick={function(e){
      e.preventDefault();
      this.setState({mode:'welcome'});
    }.bind(this)
      }>click!</a> */}
    <TOC list={this.state.contents}
    onChangePage={onChangePage.bind(this)}></TOC>
    <ModeList onChangeMode={onChangeMode.bind(this)}></ModeList>
    {_article}
    </div>
  );
  }
}

export default App;
