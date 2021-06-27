// NEXT Components
import Link from "next/link";

// My Components
import Head from "../Components/Head";

// CSS
import styles from "../styles/Misc.module.css";

export default function misc() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={styles.container}>
      <header></header>
      <Head page="Miscellaneous page" />
      <main className={styles.main}>
        <Link href="/">
          <a style={{ textDecoration: "none" }} title="Go to homepage">
            <span>🏡</span>
            <span>Home</span>
          </a>
        </Link>
        <h1>Congratulations!</h1>
        <p>You&apos;ve discovered the Miscellaneous page. 🥳</p>
        <article className={styles.article}>
          <div className={styles.links} id="social">
            <h2>🩰 Social</h2>
            <ul>
              <Li title="GitHub" link="https://github.com/arlbibek" />
              <Li
                title="LinkedIn"
                link="https://www.linkedin.com/in/bibekaryal"
              />
              <Li title="Facebook" link="https://facebook.com/bibeknaryal" />
              <Li
                title="YouTube"
                link="https://www.youtube.com/channel/UC1Z6c7Q69HeY0M22AyFSgkA"
              />
            </ul>
          </div>
          <div className={styles.links} id="projects">
            <h2>👨‍💻 Projects</h2>
            <ul>
              <Li
                title="This website"
                link="https://github.com/arlbibek/arlbibek.github.io"
              />
              <Li
                title="Decentralized Voting (dVoting)"
                link="https://github.com/arlbibek/dVoting/"
              />
              <Li
                title="Brute-force Facebook login using pyautoGUI"
                link="https://github.com/arlbibek/brute-force-FB"
              />
              <Li
                title="Automating the Boring Stuff with Python"
                link="https://arlbibek.github.io/boring-py/"
              />
              <br />
              <Li
                title="List of Softwares and tools that I cannot live without."
                link="http://arlbibek.github.io/arl-softwares/"
              />
              <Li
                title="Personal preferences for different apps and softwares that I use."
                link="https://github.com/arlbibek/arl-preferences"
              />
            </ul>
          </div>
          <div className={styles.links} id="books">
            <h2>📚 Few books to read</h2>
            <ul>
              <Li title="12 Rules for Life by Dr. Jordan B. Peterson" />
              <Li title="Sapiens: A Brief History of Humankind by Yuval Noah Harari" />
              <Li title="Seto Dharati [सेतो धरती]  by Amar Neupane" />
              <Li title="Start with Why by Simon Sinek " />
              <Li title="Why We Sleep by Matthew Walker"></Li>
              <Li title="21 Lessons for the 21st Century by Yuval Noah Harari" />
              <br />
              <Li
                title="Some great books acc. Dr. Jordan B. Peterson"
                link="https://www.jordanbpeterson.com/great-books/"
              />
            </ul>
          </div>
          <div className={styles.links} id="movies">
            <h2>📺 Boring Movies/TV</h2>
            <p>
              <mark>
                Boring movies/tv shows that I really like and probably
                you&apos;ll too.
              </mark>
            </p>
            <ul>
              <Li title="Little Miss Sunshine (2009)" />
              <Li title="Panchayat (2020 - )" />
              <Li title="Dead Poets Society (1989)" />
              <Li title="12 Angry Men (1957)" />
              <Li title="Into the Wild (2007)" />
              <Li title="Liar Liar (1997)" />
              <Li title="The Pianist (2002)" />
            </ul>
          </div>
          <div className={styles.links} id="websites">
            <h2>🌐 Some useful Websites</h2>
            <ul>
              <Li
                title="Convertio — File Converter"
                link="https://convertio.co/"
              />
              <Li
                title="Smallpdf.com - A Free Solution to all your PDF Problems"
                link="https://smallpdf.com/"
              />
              <Li
                title="Remove Background from Image - remove.bg"
                link="https://www.remove.bg/"
              />
              <Li
                title="mp3Clan - Free Music Download"
                link="https://mp3clan.com/"
              />
              <Li
                title="Audio Library · No Copyright Music"
                link="https://www.audioLibrary.com.co/"
              />
              <Li
                title="Mixkit - Awesome free assets for your next video project"
                link="https://mixkit.co/"
              />
              <Li title="10 Minute Mail" link="https://10minutemail.net/" />
              <Li
                title="Guerrilla Mail - Disposable Temporary E-Mail Address"
                link="https://www.guerrillamail.com/"
              />
              <Li
                title="FutureMe: Write a Letter to your Future Self"
                link="https://www.futureme.org/"
              />
              <Li title="Emkei’s Fake Mailer" link="https://emkei.cz/" />
              <Li
                title="Skillshare-DL"
                link="https://colab.research.google.com/github/K-E-N-W-A-Y/Skillshare-DL/blob/master/Skillshare*DL*%5BKENWAY%5D.ipynb"
              />
              <Li link="https://sci-hub.hkvisa.net/" title="Sci-Hub" />
              <Li
                title="AlternativeTo - Crowdsourced software recommendations "
                link="https://alternativeto.net/"
              />
              <Li
                link="https://emojipedia.org/"
                title="Emojipedia — Home of Emoji Meanings 💁👌🎍😍"
              />
              <Li
                link="https://www.lexilogos.com/keyboard/devanagari.htm"
                title="Devanagari Keyboard OnLine • Hindi Alphabet • LEXILOGOS"
              />
              <br />
              <Li
                title="This Website Will Self Destruct"
                link="https://www.thiswebsitewillselfdestruct.com/"
              />
              <Li
                title="Bouncing DVD logo"
                link="https://www.bouncingdvdlogo.com/"
              />
              <Li link="https://neal.fun/" title="Neal.fun" />
              <Li link="https://neal.fun/" />
            </ul>
          </div>
        </article>
      </main>
      <footer className={styles.footer}>
        <a onClick={() => scrollTop()}>Back to top</a>
      </footer>
    </div>
  );
}

function Li(props) {
  return (
    <li>
      <a href={props.link} title={props.title ? props.title : props.link}>
        {props.title ? props.title : props.link}
      </a>
      {props.link && (
        <>
          {" "}
          <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            title={`${"Open in new tab: "} ${props.link}`}
          >
            <SVG_newTab />
          </a>
        </>
      )}
    </li>
  );
}

const SVG_newTab = () => {
  return (
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
  );
};
