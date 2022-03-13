import React, { useState } from 'react';
import './App.css';
import List from "./List.js";

function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  let onDelete = function (index) {
    list.splice(index, 1);
    setList([...list]);
  };

  let update = function (index, updatedText) {
    list[index] = updatedText;
    setList([...list]);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>To Do List</h1>
      <div id="text-area">
        <textarea
          type='text'
          name="textarea"
          value={text}
          onChange={(ev) => {
            setText(ev.target.value);
          }}
        />
        <button
          style={{
            margin: "10Px",
            width: "20%",
            height: "40Px",
            borderRadius: "10Px",
            backgroundColor: 'green',
            fontSize: "24Px"
          }}
          onClick={() => {
            if (text !== "" && !list.includes(text)) setList([...list, text]);
            setText("");
          }}
        >
          Add
        </button>
        <table style={{ width: "60%" }}>
          <thead>
            <th>Sr.</th>
            <th>Title</th>
            <th>Operation</th>
          </thead>
          <tbody>
            {list.map((l, i) => {
              return (
                <List
                  title={l}
                  index={i}
                  deleteAction={onDelete}
                  updateAction={update}
                />
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
