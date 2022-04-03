import React from "react";
import { SocketContext } from "../context/Context";
import Link from "next/link";
const HomeCompo = () => {
  const { callUser, call, callAccepted, answerCall, myVideo } =
    React.useContext(SocketContext);

  return (
    <div className="container px-10">
      <div className="flex justify-between">
        <div>
          <h2 className="text-4xl font-bold">Premium video meetings.</h2>
          <h2 className="text-4xl font-bold mb-5">Now free for everyone.</h2>
          <p className="text-gray-500">
            Now you can call to your friend and have a good time with our free
            meeting service.
          </p>
          <a href="/meet">
            <button className="px-4 py-2 bg-blue-500 text-white font-bold rounded">
              New Meeting
            </button>
          </a>
        </div>
        <div>
          <video
            style={{ transform: "rotateY(180deg)" }}
            className="rounded rounded-xl w-[400px]"
            playsInline
            muted
            ref={myVideo}
            autoPlay
          ></video>
        </div>
      </div>
    </div>
  );
};

export default HomeCompo;
