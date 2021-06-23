// NEXT Components
import Link from "next/link";

// My Components
import Head from "../Components/Head";

export default function FourOhFour() {
  const nav = {
    position: "fixed",
    top: "1rem",
    zIndex: "1",
  };
  const alk = {
    fontSize: "1.5rem",
    textDecoration: "none",
    color: "grey",
    margin: "1rem",
  };
  return (
    <>
      <Head page="404 - Page Not Found" />

      <nav style={nav}>
        <Link href="/">
          <a style={alk} title="Back to home.">
            ↩
          </a>
        </Link>
      </nav>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            width: "400px",
            textAlign: "center",
            margin: "1rem auto",
          }}
        >
          <h1>🙈</h1>
          <br />
          <h1>404 - Page Not Found</h1>
          <br />
          <hr />
          <br />
          <p>The page your are looking for doesn&apos;t exist.</p>
          <br />
          <Link href="/">
            <a title="to home">Go to home.</a>
          </Link>
        </div>
      </div>
    </>
  );
}
