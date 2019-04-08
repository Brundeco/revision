import React, { Component } from "react";
import { getInstance } from "./../../services/firebase/firebase.js";
import Style from "style-it";

const style = {
  container: {
    width: "50%",
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#333333",
    opacity: 0.9,
    borderRadius: 10,
    marginTop: 15,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    position: "absolute"
  },
  text: {
    margin: 0,
    padding: 0,
    fontWeight: "lighter",
    fontSize: 20,
    marginBottom: 10
  },
  input: {
    minWidth: 100,
    outline: "none",
    borderRadius: 5,
    border: 0,
    padding: 10,
    marginTop: 10
  },
  submit: {
    marginTop: 20,
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "rgb(0, 109, 150)",
    border: "none",
    outline: "none",
    color: "white",
    fontWeight: 600,
    transition: "all 0.1s ease"
  }
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const firebase = getInstance();
const db = firebase.database();

export class TaskInputField extends Component {
  state = {
    showInputScreen: "none",
    todoDescription: null,
    todoTimestamp: null
  };

  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    const day = d.getDate();
    const month = monthNames[d.getMonth()];
    const date = `${day} ${month} at ${h}:${m}:${s}`;

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = async () =>{
    await db.ref("todo/").set({
      todoDescription: this.state.todoDescription,
      todoTimestamp: this.state.todoTimestamp
    });
  }

  render() {
    const { text } = this.props;
    return Style.it(
      `.submit:hover {
      cursor: pointer;
      transform: scale(1.05);
      transition: all 0.2s ease;
    }`,
      <div style={style.container}>
        <h6 style={style.text}>{text}</h6>
        <input
          style={style.input}
          placeholder="Task description"
          name="todoDescription"
          onChange={this.handleChange}
        />
        <input
          style={style.input}
          placeholder="Task date"
          name="todoTimestamp"
          onChange={this.handleChange}
        />
        <input
          type="submit"
          value="submit"
          style={style.submit}
          className="submit"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default TaskInputField;
