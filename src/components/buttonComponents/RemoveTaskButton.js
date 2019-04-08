import React from "react";
import { ReactComponent as Icon } from "./../../assets/icons/bin.svg";
import Style from "style-it";

const style = {
  container: {
    backgroundColor: "#fff",
    padding: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    transition: "all 0.2s ease"
  },
  text: {
    color: "#fff",
    textAlign: "center",
    padding: 0,
    margin: 0,
    fontSize: 10,
    fontWeight: "normal"
  },
  icon: {
    width: 11,
    height: 11
  }
};

export const RemoveTaskButton = () => {
  return Style.it(
    `
    .container:hover {
      opacity: 0.7;
      cursor: pointer;
      transform:  scale(1.3);
      transition: all 0.2s ease;
    }
  `,
    <div style={style.container} className="container">
      {/* <h4 style={style.text}>{"Remove task"}</h4> */}
      <Icon style={style.icon} />
    </div>
  );
};

export default RemoveTaskButton;
