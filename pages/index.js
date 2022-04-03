import Head from "next/head";
import Image from "next/image";
import react from "react";
import BottomBar from "../components/BottomBar";
import CallForm from "../components/CallForm";
import VideoPlayer from "../components/VideoPlayer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Meet Clone</title>
        <meta name="description" content="Generated by create meet clone app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-[#202124] h-[100vh]">
        <VideoPlayer />
        <CallForm />
        <BottomBar />
      </div>
    </div>
  );
}
