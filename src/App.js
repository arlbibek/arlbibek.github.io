import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: "800px", margin: "0 auto" }}>
          <h1 className="h1-colourful">Hi, I'm Bibek Aryal!</h1>
          <p>
            Currently a final year{" "}
            <a
              href="https://islington.edu.np/programmes/b-sc-hons-computer-networking-it-security/"
              target="_blank"
              rel="noreferrer"
              title="See my course content"
            >
              IT
            </a>{" "}
            student at{" "}
            <a
              href="https://islington.edu.np"
              target="_blank"
              rel="noreferrer"
              title="Go to the offical webpage of Islington College"
            >
              Islington College
            </a>
            , Kathmandu, Nepal.
          </p>
          <br />
          <br />
          <a
            href="https://github.com/arlbibek/resume/raw/main/Resume%20Bibek%20Aryal%202021.pdf"
            target="_blank"
            rel="noreferrer"
            title="Read my resume (PDF)"
            className="social-links"
          >
            Resume
          </a>
          <a
            href="https://github.com/arlbibek"
            target="_blank"
            rel="noreferrer"
            title="Watch me on GitHub"
            className="social-links"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bibekaryal"
            target="_blank"
            rel="noreferrer"
            title="Find me on LinkedIn"
            className="social-links"
          >
            LinkedIn
          </a>
        </div>
        <br />
        <br />
        <br />
        <blockquote style={{ color: "grey" }}>
          This page is{" "}
          <a
            href="https://github.com/arlbibek/arlbibek.github.io"
            target="_blank"
            rel="noreferrer"
            title="View source code of this page"
            style={{ color: "grey" }}
          >
            under developement
          </a>
          .
        </blockquote>
      </header>
    </div>
  );
}

export default App;
