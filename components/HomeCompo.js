import React from "react";
import { SocketContext } from "../context/Context";

const HomeCompo = () => {
  const { callUser, call, callAccepted, answerCall } =
    React.useContext(SocketContext);
  const [idCall, setIdCall] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    callUser(idCall);
  };
  return (
    <div>
      <button>New Meeting</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={idCall}
          onChange={(e) => setIdCall(e.target.value)}
        />
        <button type="submit">Call</button>
      </form>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h1>{call.name} is calling:</h1>
          <button onClick={answerCall}>Answer</button>
        </div>
      )}
    </div>
  );
};

export default HomeCompo;
