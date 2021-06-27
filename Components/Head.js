// NEXT Components
import Head from "next/head";

export default function Home(props) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta
          name="description"
          content="A portfolio website of Bibek Aryal. A final year IT student at Islington College, Kathmandu, Nepal (awaiting graduation) and Security Research Analysts intern at a Stealth startup!"
        />
        <title>
          Bibek Aryal - {props.page ? props.page : "Networking and IT Security"}
        </title>
        <link rel="icon" type="image/png" href="./favicon.png" />

        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </Head>
    </>
  );
}
