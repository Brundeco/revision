import React from "react";
import LabelFinished from "./../textComponents/LabelFinished";
import RemoveTaskButton from "./../buttonComponents/RemoveTaskButton";

const style = {
  container: {
    width: "100%",
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    position: "relative"
  },
  wrapper: {},
  text: {
    margin: 0,
    padding: 0,
    fontWeight: "lighter",
    fontSize: 20,
    marginBottom: 10
  },
  timestamp: {
    margin: 0,
    padding: 0,
    fontWeight: "lighter",
    fontSize: 10,
    color: "#A8A8A8",
    marginTop: 10
  },
  placeholder: {
    width: "20%"
  },
  posAbsolute: {
    position: "absolute",
    bottom: -10
  }
};

export const TaskDetailContainer = ({ text, timestamp }) => {
  return (
    <div style={style.container}>
      <div>
        <p style={style.text}>{text}</p>
        <h5 style={style.timestamp}>{timestamp}</h5>
      </div>
      <div>
        <LabelFinished />
      </div>
      <div style={style.posAbsolute}>
        <RemoveTaskButton />
      </div>
    </div>
  );
};

export default TaskDetailContainer;
