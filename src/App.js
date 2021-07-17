import './App.css';
import { Component } from 'react';
import Header from './components/Header';
import TOC from './components/TOC';
import ModeList from './components/ModeList';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';


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
      selectedId : 2,
      max_length: 3
    }
  }

    onChangePage(Id){
      this.setState({mode:'read', selectedId : +Id
    });}

    onChangeMode(_mode){
      this.setState({mode:_mode
    });}

    onSubmitPage(_title,_desc){
      
      let newLength = this.state.max_length +1
      this.setState({max_length: newLength})
      let newCom = Array.from(this.state.contents);
      /* 객체 복사 Object.assign({},this.state.contents) */
      newCom.push({id:newLength,title:_title,desc:_desc});
      this.setState({contents:newCom});
    }

    onUpdatePage(_title,_desc){
      let newCom = Array.from(this.state.contents);
      newCom[this.state.selectedId - 1].title=_title;
      newCom[this.state.selectedId - 1].desc=_desc;
      this.setState({contents:newCom});
    }

    readContent(){
      let i = 0;
      while(i < this.state.contents.length){
        let data = this.state.contents[i];
        if(data.id === this.state.selectedId){
          return data;
          
        }
        i = i +1;
      }
    }

    getContent(){ 
      let _title, _desc, _article = undefined;
      if(this.state.mode === "welcome"){
        _title = this.state.welcome.title;
        _desc = this.state.welcome.desc;
        _article=<ReadContent title={_title} desc={_desc}></ReadContent>
    }else if(this.state.mode === "read"){
        let data = this.readContent();
        _article=<ReadContent title={data.title} desc={data.desc}></ReadContent>
    }else if(this.state.mode === "create"){
      _article=<CreateContent onSubmitPage={this.onSubmitPage.bind(this)}></CreateContent>
    }else if(this.state.mode === "update"){
      _article=<UpdateContent data={this.readContent()} onUpdatePage={this.onUpdatePage.bind(this)}></UpdateContent>
    }
    return _article;
  }

  render(){
    
    
    return(
    <div className="App">
    <Header title={this.state.header.title} sub={this.state.header.sub}
    onChangePage={this.onChangePage.bind(this)}>
    </Header>
    {/* <a href="/" onClick={function(e){
      e.preventDefault();
      this.setState({mode:'welcome'});
    }.bind(this)
      }>click!</a> */}
    <TOC list={this.state.contents}
    onChangePage={this.onChangePage.bind(this)}></TOC>
    <ModeList onChangeMode={this.onChangeMode.bind(this)}></ModeList>
    {this.getContent()}
    </div>
  );
  }
}

export default App;
