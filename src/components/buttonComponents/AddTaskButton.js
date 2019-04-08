import React, { Component } from "react";
import { ReactComponent as Icon } from "./../../assets/icons/cross.svg";
import Style from "style-it";

const style = {
  container: {
    width: 50,
    height: 50,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "#b1b1b1 0px 5px 20px -3px",
    transition: "all 0.2s ease"
  },
  text: {
    fontSize: 40,
    fontWeight: "lighter",
    color: "#fff",
    margin: 0,
    padding: 0
  },
  icon: {
    width: "60%",
    height: "60%"
  }
};

export class AddTaskButton extends Component {
  state = {
    showInputScreen: "none"
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    const componentState =
      this.state.showInputScreen === "none" ? "flex" : "none";
    this.setState({
      showInputScreen: componentState
    });
    this.props.onClick(componentState);
  };

  render() {
    return Style.it(
      `
  .container:hover {&
    transform: scale(2);
    transition: all 0.2s ease;
    cursor: pointer;
    box-shadow: blue 0px 4px 10px -3px !important;
  }
  `,
      <div
        style={style.container}
        className="container"
        onClick={this.handleClick}
      >
        <Icon style={style.icon} />
      </div>
    );
  }
}

export default AddTaskButton;
