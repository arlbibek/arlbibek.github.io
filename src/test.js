import React, { Component } from "react";
// import "./App.css";

export default class Test extends Component {
  state = {};
  render() {
    return (
      <>
        <div>
          <iframe
            title="Resume Bibek Aryal 2021"
            src="https://docs.google.com/gview?url=https://github.com/arlbibek/resume/raw/main/Resume%20Bibek%20Aryal%202021.pdf&embedded=true"
            style={{ width: "100%", height: "100%" }}
            frameborder="0"
          ></iframe>
        </div>
      </>
    );
  }
}
