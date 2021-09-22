
import React,{useState} from 'react';
import Modal from './Modal'

import './App.css';



function App() {
  let [post,modyPost] = useState(["김치 말이 국수", "대기 증가","우동사리 추가"]);
  let [like,modyLike] = useState(0);
  let [posts,editPosts] = useState(undefined);
  let [modal,toggleModal] = useState(false);


  function showPost(e) {
    console.log(e.target)
    editPosts(post[e])
  }

  function editPost() {
    let arr = [...post];
    arr[0] = '김치국수'
    modyPost(arr)
  }

  return (
    <div className="App">
      <div className="nav">
        Blogee 
      </div>
      <div className="list" onClick={(e)=>{showPost(0)}}>
        <h4> { post[0] } <span onClick={()=>{modyLike(++like)}}>❤</span> {like} </h4>
        <p>7월 30일</p>
        <hr/>
      </div>
      <div className="list" onClick={(e)=>{showPost(1)}}>
        <h4> { post[1] } </h4>
        <p>7월 31일</p>
        <hr/>
      </div>
      <div className="list" onClick={(e)=>{showPost(2)}}>
        <h4> { post[2] } </h4>
        <p>7월 32일</p>
        <hr/>
      </div>
      <button onClick={()=>{toggleModal(!modal)}}>click</button>
      {modal === true ? <Modal post = {posts}></Modal> : null}
    </div>
  );
}

export default App;

