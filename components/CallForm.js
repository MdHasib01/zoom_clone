import React from "react";
import { SocketContext } from "../context/Context";

const CallForm = () => {
  const { callUser, call, callAccepted, answerCall, myVideo } =
    React.useContext(SocketContext);
  const [idCall, setIdCall] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    callUser(idCall);
    alert("calling...");
  };
  return (
    <div className="w-full flex justify-center">
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              className="border py-1"
              type="text"
              value={idCall}
              placeholder="paste caller id"
              onChange={(e) => setIdCall(e.target.value)}
            />
            <button
              className="px-7 py-1 bg-blue-500 text-white font-bold"
              type="submit"
            >
              Call
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CallForm;
