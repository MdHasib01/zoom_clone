import React from "react";
import BottomBar from "../components/BottomBar";
import CallForm from "../components/CallForm";
import VideoPlayer from "../components/VideoPlayer";

const Meet = () => {
  return (
    <div className="bg-[#202124] h-[100vh]">
      <VideoPlayer />
      <CallForm />
      <BottomBar />
    </div>
  );
};

export default Meet;
