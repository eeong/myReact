
import React,{useState} from 'react';
import Modal from './Modal'

import './App.css';



function App() {
  let [post,modyPost] = useState(["김치 말이 국수", "대기 증가","우동사리 추가"]);
  let [like,modyLike] = useState(0);
  let [posts,editPosts] = useState(undefined);
  let [modal,toggleModal] = useState(false);
	let [getData, setData] = useState('');

  function showPost(i) {
    editPosts(post[i])
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
			{
				post.map((v,i) => {
					return(
					<div className="list" key={i} onClick={(e)=>{showPost(i)}}>
						<h4> { v } </h4>
						<p>7월 31일</p>
						<hr/>
					</div>
				)})
			}
		
      <button onClick={()=>{toggleModal(!modal)}}>click</button>
			<input onChange={(e)=>{setData(e.target.value)}}/>
      {modal === true ? <Modal post = {posts} data={getData}></Modal> : null}
    </div>
  );
}

export default App;

