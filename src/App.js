import React, { useState } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { addToList, clear, toggle } from "./actions";

const App = (props) => {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Add to do.."
        className="input1"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        type="submit"
        variant="secondary"
        className="ml-3"
        onClick={() => {
          setText("");
          props.addToList(text);
        }}
      >
        Add to List
      </Button>
      <div className="list">
        {props.list.map((item) => (
          <div
            onClick={() => {
              props.toggle(item.id);
            }}
            className={item.completed ? "completed" : ""}
            key={item.id}
          >
            <ul>
              <li>{item.title}</li>
            </ul>
          </div>
        ))}
        <Button
          type="submit"
          onClick={() => {
            props.clear();
          }}
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

export default connect(mapStateToProps, { addToList, clear, toggle })(App);
