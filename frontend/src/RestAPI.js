import React, { useState } from "react";
import axios from "axios";


function RestAPI() {
  const [text, setText] = useState([]);

  return (
    <>
      <h1>REST API 연습</h1>
      <div className="btn-primary">
        <div>
        제목 : <input id='title'/>
        </div>
        <div>
        내용 : <input id='content'/>
        </div>
        <button
          onClick={() => {
            // input 태그 값 불러오기 {제목, 내용}
            const title = document.getElementById('title').value;
            document.getElementById('title').value = '';
            const content = document.getElementById('content').value;
            document.getElementById('content').value = '';
            
            axios
              .post("http://127.0.0.1:8000/post/", {
                title: title,
                content: content,
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
          }}
        >
          POST
        </button>
        <button
          onClick={() => {
            axios
              .get("http://127.0.0.1:8000/post/")
              .then((response) => {
                setText([...response.data]);
                console.log(response.data);
              })
              .catch(function (error) {
                console.log(error);
              });
          }}
        >
          GET
        </button>
      </div>
      {text.map((e) => (
        <div>
          {" "}
          <div className="list">
            <span>
              {e.id}번, {e.title}, {e.content}, {e.updated_at}
            </span>
            <button
              className="btn-delete"
              onClick={() => {
                axios.delete(`http://127.0.0.1:8000/post/${e.id}/`);
                setText(text.filter((text) => text.id !== e.id));
              }}
            >
              DELETE
            </button>{" "}
          </div>
        </div>
      ))}
    </>
  );
}

export default RestAPI;