import React from 'react';

function Modal(props) {

  return (
    
      <div className="modal">
        <h2>{props.post}</h2>
        <p>날짜</p>
        <p>내용</p>
      </div>
    
  );
}

export default Modal;
