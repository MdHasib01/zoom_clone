import React from "react";
import { SocketContext } from "../context/Context";
import styles from "../styles/VideoPlayer.module.css";
const VideoPlayer = () => {
  const { myVideo, callAccepted, callEnded, userVideo, stream } =
    React.useContext(SocketContext);
  return (
    <div style={{ height: "100vh", display: "flex" }}>
      <video
        style={{ transform: "rotateY(180deg)" }}
        className={styles.singleVideo}
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
          className={styles.singleVideo}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
