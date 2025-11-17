import React, { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    cpassword: ""
  });

  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Validate Function
  const validateForm = () => {
    const errors = {};

    if (!/^[A-Z][a-z]{3,10}$/.test(formData.username)) {
      errors.username =
        "UserName must start with a capital letter and be 3-10 characters long";
    }

    if (!/^[#\\w@_-]{8,20}$/.test(formData.password)) {
      errors.password = "Password must be 8-20 characters long";
    }

    if (formData.cpassword !== formData.password) {
      errors.cpassword = "Passwords do not match";
    }

    return errors;
  };

  // Handle Form Submit
  const handleSubmit = () => {
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // No Errors → Call API
      setLoading(true);

      axios
        .post("https://dummyjson.com/users/add", formData)
        .then((res) => {
          console.log("Signup Successful:", res.data);
          alert("Signup Successful!");
        })
        .catch((err) => {
          console.log("Error during signup:", err);
          alert("Signup Failed");
        })
        .finally(() => setLoading(false));
    } else {
      alert("Please fix the errors");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-lg border">
      <h2 className="p-3 bg-indigo-100 rounded-b-lg text-center text-xl font-semibold mb-5">
        SignUp Form
      </h2>

      {/* Username */}
      <div className="mb-3">
        <label className="block mb-1 font-medium">UserName</label>
        <input
          type="text"
          placeholder="UserName"
          className="border p-2 w-full rounded"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        {formErrors.username && (
          <p className="text-red-500">{formErrors.username}</p>
        )}
      </div>

      {/* Password */}
      <div className="mb-3">
        <label className="block mb-1 font-medium">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full rounded"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {formErrors.password && (
          <p className="text-red-500">{formErrors.password}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="mb-3">
        <label className="block mb-1 font-medium">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          className="border p-2 w-full rounded"
          name="cpassword"
          value={formData.cpassword}
          onChange={handleInputChange}
        />
        {formErrors.cpassword && (
          <p className="text-red-500">{formErrors.cpassword}</p>
        )}
      </div>

      {/* Button */}
      <button
        className="bg-indigo-500 w-full text-white px-4 py-2 rounded hover:bg-indigo-600"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Submitting..." : "SignUp"}
      </button>
    </div>
  );
}
