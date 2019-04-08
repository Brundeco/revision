import React, { Component } from "react";
import TodoContainer from "./containerComponents/TodoContainer";
import SignUpView from "./textComponents/SignUpView";
import { BrowserRouter, Route } from "react-router-dom";

const style = {
  container: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true
    };
  }

  // loggedIn = () => {
  //   this.setState({
  //     loggedIn: true
  //   });
  // };

  render() {
    if (this.state.loggedIn === true) {
      console.log("check");
      return (
        <BrowserRouter>
          <div style={style.container}>
            <Route path="/home" component={TodoContainer} />
          </div>
        </BrowserRouter>
      );
    } else if (this.state.loggedIn === false) {
      console.log("Geen check");
      return (
        <BrowserRouter>
          <div style={style.container}>
            <Route
              path="/"
              component={SignUpView}
              onClick={this.loggedIn}
              exact
            />
          </div>
        </BrowserRouter>
      );
    }
  }
}

export default Main;
