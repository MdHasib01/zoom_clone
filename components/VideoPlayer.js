import React from "react";
import { SocketContext } from "../context/Context";
import styles from "../styles/VideoPlayer.module.css";
const VideoPlayer = () => {
  const { myVideo, callAccepted, callEnded, userVideo, call, answerCall } =
    React.useContext(SocketContext);
  return (
    <div>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h1>{call.name} is calling:</h1>
          <button onClick={answerCall}>Answer</button>
        </div>
      )}
      <div className="h-[80vh] flex px-10 justify-center">
        <video
          style={{ transform: "rotateY(180deg)" }}
          className="h-[450px] w-[450px] object-contain rounded rounded-xl mr-7"
          playsInline
          muted
          ref={myVideo}
          autoPlay
        ></video>
        {callAccepted && !callEnded && (
          <video
            playsInline
            ref={userVideo}
            autoPlay
            className="h-[450px] w-[450px] object-contain rounded rounded-xl"
          />
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
