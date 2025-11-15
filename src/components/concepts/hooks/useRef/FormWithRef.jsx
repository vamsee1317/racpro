// SignUp Form using useRef (Typing does NOT trigger re-render)

import React, { useRef, useState } from "react";

export default function FormWithRef() {

  // useRef stores values WITHOUT re-rendering
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const cpasswordRef = useRef("");

  // Only to show re-render count
  const [renderCount, setRenderCount] = useState(1);

  const handleSubmit = () => {
    console.log("Username:", usernameRef.current);
    console.log("Password:", passwordRef.current);
    console.log("Confirm Password:", cpasswordRef.current);

    // This causes re-render
    setRenderCount((prev) => prev + 1);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-lg border">

      <h2 className="text-xl font-semibold text-center mb-3">
        useRef Component — Rerenders: {renderCount}
      </h2>

      <div className="mb-3">
        <label className="font-medium">UserName</label>
        <input
          type="text"
          className="border p-2 w-full rounded"
          onChange={(e) => {
            usernameRef.current = e.target.value;  
            // Does NOT cause re-render
          }}
        />
      </div>

      <div className="mb-3">
        <label className="font-medium">Password</label>
        <input
          type="password"
          className="border p-2 w-full rounded"
          onChange={(e) => {
            passwordRef.current = e.target.value;
          }}
        />
      </div>

      <div className="mb-3">
        <label className="font-medium">Confirm Password</label>
        <input
          type="password"
          className="border p-2 w-full rounded"
          onChange={(e) => {
            cpasswordRef.current = e.target.value;
          }}
        />
      </div>

      <button
        className="bg-indigo-500 text-white w-full py-2 rounded"
        onClick={handleSubmit}
      >
        SignUp
      </button>
    </div>
  );
}
