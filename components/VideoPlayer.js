import React from "react";
import Swal from "sweetalert2";
import { SocketContext } from "../context/Context";
import styles from "../styles/VideoPlayer.module.css";

const VideoPlayer = () => {
  const { myVideo, callAccepted, callEnded, userVideo, call, answerCall } =
    React.useContext(SocketContext);
  return (
    <div>
      <div className="w-full flex justify-center pt-4">
        {call.isReceivingCall && !callAccepted && (
          <div className="flex">
            <h1 className="text-white font-bold text-xl mr-5">
              {call.name} is calling
            </h1>
            <button
              className="px-7 py-1 bg-blue-500 text-white font-bold"
              onClick={answerCall}
            >
              Answer
            </button>
          </div>
        )}
      </div>
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
