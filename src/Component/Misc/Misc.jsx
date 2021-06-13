export default function Misc() {
  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: "0",
          zIndex: "1",
        }}
      >
        <a
          href="/"
          style={{
            fontSize: "1.5rem",
            color: "var(--text-secondary)",
            textDecoration: "none",
            margin: ".3rem",
          }}
        >
          ↩
        </a>
      </nav>
      <section>
        <center>
          <h1>Misc</h1>
          <p>Congratulations you've discovered the Miscellaneous section.</p>
        </center>
      </section>
    </>
  );
}
