// SignUp Form using useState (Every change triggers re-render)

import React, { useState } from "react";

export default function FormWithState() {

  // State stores input values → Causes re-render on every change
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    cpassword: "",
  });

  // Track how many times component re-rendered
  const [renderCount, setRenderCount] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Updating state → triggers re-render immediately
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Submitted Data :", formData);

    // Force one more re-render to show difference
    setRenderCount((prev) => prev + 1);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-lg border">

      <h2 className="text-xl font-semibold text-center mb-3">
        useState Component — Rerenders: {renderCount}
      </h2>

      <div className="mb-3">
        <label className="font-medium">UserName</label>
        <input
          type="text"
          className="border p-2 w-full rounded"
          name="username"
          value={formData.username}          // Controlled input
          onChange={handleInputChange}       // Causes re-render
        />
      </div>

      <div className="mb-3">
        <label className="font-medium">Password</label>
        <input
          type="password"
          className="border p-2 w-full rounded"
          name="password"
          value={formData.password}
          onChange={handleInputChange}       // Causes re-render
        />
      </div>

      <div className="mb-3">
        <label className="font-medium">Confirm Password</label>
        <input
          type="password"
          className="border p-2 w-full rounded"
          name="cpassword"
          value={formData.cpassword}
          onChange={handleInputChange}       // Causes re-render
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
