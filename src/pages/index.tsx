import type { NextPage } from "next";
import Head from "next/head";
import { Background } from "../components/background";
import { StudyHall } from "../components/studyhall";
import { InspiringService } from "../components/inspiring-service";
import { GiveBackCincinnati } from "../components/give-back-cincinnati";
import { Whiteboard } from "../components/whiteboard";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MYoung.io</title>
        <meta name="description" content="Michael Young" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Background>
        <StudyHall />
        <InspiringService />
        <GiveBackCincinnati />
        <Whiteboard />
      </Background>
    </div>
  );
};

export default Home;
