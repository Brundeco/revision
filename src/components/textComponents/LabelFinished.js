import React from "react";

const style = {
  container: {
    backgroundColor: "#FF9D00",
    padding: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  text: {
    color: "#fff",
    textAlign: "center",
    padding: 0,
    margin: 0,
    fontSize: 10,
    fontWeight: "normal"
  }
};

export const LabelFinished = () => {
  return (
    <div style={style.container}>
      <h4 style={style.text}>{"Finished"}</h4>
    </div>
  );
};

export default LabelFinished;
