// ForgotPassword.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://backend-1cjj.onrender.com/api/auth/forgot-password",
        { email }
      );
      toast.success(res.data.message);
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-80"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          Forgot Password
        </h2>
        <p className="text-gray-500 mb-4 text-center">
          Enter your email to receive a reset link
        </p>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="w-full p-3 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
