import React, { Component } from "react";
import { getInstance } from "../../services/firebase/firebase.js";
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
    marginBottom: 10,
    color: "white"
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

const firebase = getInstance();
const db = firebase.database();

export class SignUpView extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    userEmail: null,
    userPassOne: null,
    userPassTwo: null,
    loggedIn: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  registerUser = () => {
    const email = this.state.userEmail;
    const userPassOne = this.state.userPassOne;
    const userPassTwo = this.state.userPassTwo;

    userPassOne === userPassTwo
      ? firebase
          .auth()
          .createUserWithEmailAndPassword(email, userPassOne)
          .then(
            this.setState({
              loggedIn: true
            })
          )
          .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
          })
      : console.log("Passwords do not match");
  };


  render() {
    const { text } = this.props;
    return Style.it(
      ` @media(min-width: 800px) {
        .mainContainer {
          width: 35% !important;
        }
      }
      .submit:hover {
      cursor: pointer;
      transform: scale(1.05);
      transition: all 0.2s ease;
    }`,
      <div style={style.container} className="mainContainer">
        <h6 style={style.text}>{"Sign up"}</h6>
        <input
          style={style.input}
          placeholder="Enter your email"
          name="userEmail"
          onChange={this.handleChange}
        />
        <input
          style={style.input}
          placeholder="Enter your password"
          name="userPassTwo"
          onChange={this.handleChange}
        />
        <input
          style={style.input}
          placeholder="Repeat your password"
          name="userPassOne"
          onChange={this.handleChange}
        />
        <input
          type="submit"
          value="Register"
          style={style.submit}
          className="submit"
        />
        <input
          type="submit"
          value="Login"
          style={style.submit}
          className="submit"
        />
      </div>
    );
  }
}

export default SignUpView;
