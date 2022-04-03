import React from "react";
import { SocketContext } from "../context/Context";
import { BsFillMicFill, BsFillMicMuteFill } from "react-icons/bs";
import { FaVideoSlash, FaVideo, FaClipboard } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import Swal from "sweetalert2";

const BottomBar = () => {
  const { setIsVideoOn, isVideoOn, isAudioOn, setIsAudioOn, me, leaveCall } =
    React.useContext(SocketContext);
  console.log(me);
  const handleVideo = () => {
    if (isVideoOn === true) {
      setIsVideoOn(false);
      setIsAudioOn(true);
    } else setIsVideoOn(true);
  };
  const handleAudio = () => {
    if (isAudioOn === true) {
      setIsAudioOn(false);
      setIsVideoOn(true);
    } else setIsAudioOn(true);
  };
  const handleClipBoard = () => {
    navigator.clipboard.writeText(me);
    Swal.fire({
      position: "middle",
      icon: "success",
      title: "copy to clipboard",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className="w-full flex justify-center items-center py-4">
      <div>
        <button
          className="bg-[#3c4043] rounded rounded-full p-2 text-xl text-white mr-4"
          onClick={handleVideo}
        >
          {isVideoOn ? (
            <span>
              <FaVideo />
            </span>
          ) : (
            <span className="text-red-500">
              <FaVideoSlash />
            </span>
          )}
        </button>
        <button
          onClick={handleAudio}
          className="bg-[#3c4043] rounded rounded-full p-2 text-xl text-white mr-4"
        >
          {isAudioOn ? (
            <span className="">
              <BsFillMicFill />
            </span>
          ) : (
            <span className="text-red-500">
              <BsFillMicMuteFill />
            </span>
          )}
        </button>
        <button
          className="bg-[#3c4043] rounded rounded-full p-2 text-xl text-white hover:text-red-500 mr-4"
          onClick={handleClipBoard}
        >
          <FaClipboard />
        </button>
        <button
          className="bg-red-500 rounded rounded-full p-2 text-xl text-white mr-4"
          onClick={leaveCall}
        >
          <MdCall />
        </button>
      </div>
    </div>
  );
};

export default BottomBar;
