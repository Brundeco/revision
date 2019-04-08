import React, { Component } from "react";

const style = {
  container: {
    width: "100%",
    minheight: 100,
    backgroundImage: 'linear-gradient(to left, #44ecff, #00cdff, #00a7ff, #0077ff, #5e17ff)',
    borderRadius: '5px 5px 0px 0px',
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-around",
    flexDirection: 'column',
    marginTop: -85,
    paddingTop: 50,
    paddingLeft: 20,
    paddingBottom: 50
  },
  title: {
    fontWeight: "lighter",
    margin: 0,
    padding: 0,
    color: "#ffffff",
    fontSize: 20
  },
  subTitle: {
    fontWeight: "normal",
    textAlign: "center",
    margin: 0,
    padding: 0,
    color: "#ffffff",
    fontSize: 10
  }
};

export class TodoMainTitle extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    const { text } = this.props
    return (
      <div style={style.container}>
        <h2 style={style.title}>{"Task manager"}</h2>
        <h5 style={style.subTitle}>{text}</h5>
      </div>
    );
  }
}

export default TodoMainTitle;
