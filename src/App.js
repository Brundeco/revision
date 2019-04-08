import React, { Component } from "react";
import Main from "./components/Main";

const style = {
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
};

class App extends Component {
  render() {
    return (
      <div className="App" style={style.container}>
        <Main />
      </div>
    );
  }
}

export default App;
