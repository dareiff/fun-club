import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>fun club, llc</title>
                <meta name="description" content="worldwide fun powerhouse" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    home of pizza, websites, other stuff
                </h1>
            </main>
        </div>
    );
};

export default Home;
