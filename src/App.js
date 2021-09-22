
import React,{useState} from 'react';
import Modal from './Modal'

import './App.css';


function App() {
  let [post,modyPost] = useState(["김치 말이 국수", "대기 증가","우동사리 추가"]);
  let [like,modyLike] = useState(0)
  
  function create(title) {
    let newArr = [...post];
    newArr[0] = title;
    return newArr;
  }

  function sortPost() {
    let newArr = [...post];
    newArr.sort();
    modyPost(newArr);
  }

  function showPost() {
    console.log(this);
  }

  return (
    <div className="App">
      <div className="nav">
        Blogee 
      </div>
      <div className="list" onClick={()=>{showPost()}}>
        <h4> { post[0] } <span onClick={()=>{modyLike(++like)}}>❤</span> {like} </h4>
        <p>7월 30일</p>
        <button onClick={()=>{modyPost(create("라면 비빔 국수"))}} >click!</button>
        <hr/>
      </div>
      <div className="list">
        <h4> { post[1] } </h4>
        <p>7월 31일</p>
        <button onClick={()=>{sortPost()}} >click!</button>
        <hr/>
      </div>
      <div className="list">
        <h4> { post[2] } </h4>
        <p>7월 32일</p>
        <hr/>
      </div>
      <Modal post = {post}></Modal>
    </div>
  );
}

export default App;

