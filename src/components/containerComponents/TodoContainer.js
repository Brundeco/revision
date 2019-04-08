import React, { Component } from "react";
import TodoMainTitle from "../textComponents/TodoMainTitle";
import AddTaskButton from "../buttonComponents/AddTaskButton";
import TaskDescription from "../textComponents/TaskDescription";
import TaskInputField from "./../textComponents/TaskInputField";
import Style from "style-it";

const style = {
  container: {
    width: "40%",
    minHeight: "20vh",
    backgroundColor: "#e6e6e6",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: 80,
    paddingTop: 50,
    position: "relative"
  },
  center: {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    width: "90%"
  },
  bottomContainer: {
    position: "absolute",
    bottom: -25
  }
};

export class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.changeButtonStatus = this.changeButtonStatus.bind(this);
    this.state = {
      showInputScreen: "none"
    };
  }

  changeButtonStatus(buttonStatus) {
    this.setState({
      showInputScreen: buttonStatus
    });
  }

  render() {
    console.log(this.state.showInputScreen);
    return Style.it(
      `
    @media(max-width: 800px) {
      .mainContainer {
        width: 80% !important;
      }
    }
    `,
      <div style={style.container} className="mainContainer">
        <div style={style.center}>
          <TodoMainTitle text={"Curently 5 tasks ahead"} />
        </div>
        <div style={style.wrapper}>
          <TaskDescription text={"Shoppen"} timestamp={"04/08 at 22:45"} />
        </div>
        <div style={style.wrapper}>
          <TaskDescription
            text={"Cleaning the garage"}
            timestamp={"04/08 at 22:45"}
          />
        </div>
        <div style={style.bottomContainer}>
          <AddTaskButton onClick={this.changeButtonStatus} />
        </div>
        <div style={{ display: this.state.showInputScreen, justifyContent: 'center', alignItems: 'flex-end', height: '50%'}}>
          <TaskInputField
            text={"Please enter your task description"}
            style={{ display: "none" }}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
