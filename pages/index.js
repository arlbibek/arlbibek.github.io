// React Components
import { useState } from "react";

// NEXT Components
import Image from "next/image";
import Link from "next/link";

// My Components
import Head from "../Components/Head";
import Profile from "../public/plants.png";

// CSS
import styles from "../styles/Home.module.css";

export default function Home() {
  console.log(
    "Hell, World! I'm Bibek Aryal \n+ A final year IT student at Islington College, Kathmandu, Nepal. // Awaiting graduation \n+ Security Research Analysts intern at a Stealth startup!\n+ With few other things. \nenjoy :)"
  );
  return (
    <div className={styles.container}>
      <Head />
      <main className={styles.main}>
        <article>
          <div className={styles.img}>
            <Image
              alt="Plants"
              src={Profile}
              width="111%"
              height="111%"
              className={styles.img}
            />
          </div>
          <div className={styles.intro}>
            <h1 className={styles.colorful}>Hi, I&apos;m Bibek Aryal!</h1>
          </div>
          <CurrentStatus />
        </article>
        <SocialLinks />
        <div className={styles.float}>
          <Link href="/misc">
            <a
              style={{ textDecoration: "none" }}
              className={styles.monkey}
              title="Please don't click me 🥺"
            >
              🙊
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}

const CurrentStatus = () => {
  return (
    <div className={styles.currentStatus}>
      <p>
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
      </p>
      <p>
        <mark>
          Security Research Analysts intern at a{" "}
          <Link href="/">
            <a title="a startup company operating in stealth mode, avoiding public attention">
              Stealth startup
            </a>
          </Link>
          !
        </mark>
      </p>
      <p>And awaiting graduation.</p>
    </div>
  );
};

const SocialLinks = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.SocialContainer}>
      <button
        onClick={() => setShow(!show)}
        target="_blank"
        rel="noreferrer"
        title="Read my resume: PDF"
        className={(styles.socialLink, styles.resumeBtn)}
      >
        Resume
      </button>
      <ResumeModal onClose={() => setShow(false)} show={show} />
      <a
        href="https://github.com/arlbibek"
        target="_blank"
        rel="noreferrer"
        title="Watch me on GitHub: arlbibek"
        className={styles.socialLink}
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/bibekaryal"
        target="_blank"
        rel="noreferrer"
        title="Find me on LinkedIn: bibekaryal"
        className={styles.socialLink}
      >
        LinkedIn
      </a>
      <a
        href="mailto:aryalbmail@gmail.com?subject=Let's collaborate!&body=Dear Bibek, "
        target="_blank"
        rel="noreferrer"
        title="mailto: aryalbmail@gmail.com Let's collaborate! "
        className={styles.socialLink}
      >
        Contact
      </a>
    </div>
  );
};

const ResumeModal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <iframe
          title="Resume - Bibek Aryal"
          src="https://docs.google.com/gview?url=https://github.com/arlbibek/resume/raw/main/Resume%20Bibek%20Aryal.pdf&embedded=true"
          style={{
            width: "100%",
            height: "100%",
          }}
          frameBorder="0"
        ></iframe>
        <div className={styles.modalHeader}>
          <div className={`${styles.mdItem} ${styles.mdTitle}`}>
            <h2>Bibek Aryal Resume.</h2>
          </div>
          <div className={`${styles.mdItem} ${styles.mdBtnBox}`}>
            <div className={styles.mdBtn}>
              <form
                method="get"
                action="https://github.com/arlbibek/resume/raw/main/Resume%20Bibek%20Aryal.pdf"
              >
                <button type="submit" title="Download document (PDF)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-file-earmark-arrow-down"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z" />
                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                  </svg>
                  <span> download</span>
                </button>
              </form>
            </div>
            <div className={styles.mdBtn}>
              <a
                href="https://docs.google.com/viewerng/viewer?url=https://github.com/arlbibek/resume/raw/main/Resume%20Bibek%20Aryal.pdf"
                target="_blank"
                rel="noreferrer"
                title="Open document in new tab"
                className="social-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-box-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                  />
                </svg>
              </a>
            </div>
            <div className={styles.mdBtn}>
              <a onClick={props.onClose} title="Dismiss">
                <svg
                  xmlns="http://www.w3.org2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                  alt="dismiss"
                >
                  <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
