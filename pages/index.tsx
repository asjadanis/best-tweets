import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Best Tweets</title>
        <meta name="description" content="Best tweets from twitter users" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Enter Twitter handle below to see magic</h1>
      </main>

      <footer className={styles.footer}>
        <span>
          Created with passion by{" "}
          <a target="_blank" href="https://twitter.com/asjadanis">
            @asjadanis
          </a>
        </span>
      </footer>
    </div>
  );
};

export default Home;
