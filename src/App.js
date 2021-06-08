// React Components
import React, { useState } from "react";

// My Components
import ModalResume from "./ModalResume";

// CSS
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  return (
    <section className="section-center">
      <article>
        <div>
          <img
            className="profile"
            alt="Profile Bibek Aryal"
            src="./profile_bibek_aryal.jpg"
            width="150px"
            height="150px"
          />
        </div>
        <h1 className="h1-colorful">Hi, I'm Bibek Aryal!</h1>
        <div className="current-status">
          <p>
            <strike>
              A final year{" "}
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
                title="Go to the official webpage of Islington College"
              >
                Islington College
              </a>
              , Kathmandu, Nepal.
            </strike>
          </p>
          <p>
            Security Research Analysts at a{" "}
            <a
              href="#"
              rel="noreferrer"
              title="a startup company operating in stealth mode, avoiding public attention"
            >
              Stealth startup
            </a>
            !
          </p>
          <p>Also awaiting graduation.</p>
        </div>
        <div className="social-div">
          <button
            onClick={() => setShow(true)}
            target="_blank"
            rel="noreferrer"
            title="Read my resume (PDF)"
            className="social-link btn-resume"
          >
            Resume
          </button>
          <ModalResume onClose={() => setShow(false)} show={show} />
          <a
            href="https://github.com/arlbibek"
            target="_blank"
            rel="noreferrer"
            title="Watch me on GitHub"
            className="social-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bibekaryal"
            target="_blank"
            rel="noreferrer"
            title="Find me on LinkedIn"
            className="social-link"
          >
            LinkedIn
          </a>
        </div>
        {/* <div id="" className="page-status">
          <blockquote>
            This page is{" "}
            <a
              href="https://github.com/arlbibek/arlbibek.github.io"
              target="_blank"
              rel="noreferrer"
              title="View source code of this page"
            >
              under development
            </a>
            .
          </blockquote>
        </div> */}
      </article>
    </section>
  );
}

export default App;
