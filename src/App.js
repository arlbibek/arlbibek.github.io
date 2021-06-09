// React Components
import React, { useState } from "react";

// My Components
import ModalResume from "./ModalResume";
import profile from "./images/plants.png";

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
            src={profile}
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
              href="https://arlbibek.github.io/"
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
            title="Read my resume: PDF"
            className="social-link btn-resume"
          >
            Resume
          </button>
          <ModalResume onClose={() => setShow(false)} show={show} />
          <a
            href="https://github.com/arlbibek"
            target="_blank"
            rel="noreferrer"
            title="Watch me on GitHub: arlbibek"
            className="social-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bibekaryal"
            target="_blank"
            rel="noreferrer"
            title="Find me on LinkedIn: bibekaryal"
            className="social-link"
          >
            LinkedIn
          </a>
          <a
            className="social-link"
            href="mailto:aryalbmail@gmail.com?subject=Let's collaborate!&body=Dear Bibek, "
            title="mailto: aryalbmail@gmail.com"
          >
            Contact{" "}
          </a>
        </div>
      </article>
    </section>
  );
}

export default App;
