import type { NextPage } from "next";
import Head from "next/head";
import { Background } from "../components/background";
import { StudyHall } from "../components/studyhall";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MYoung.io</title>
        <meta name="description" content="Michael Young's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Background>
        <StudyHall />
      </Background>
    </div>
  );
};

export default Home;
