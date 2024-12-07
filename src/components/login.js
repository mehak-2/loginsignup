import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import SignInwithGoogle from "../components/SignInwithGoogle";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/profile";
      toast.success("User logged in successfully", { position: "top-center" });
    } catch (error) {
      toast.error(error.message, { position: "bottom-center" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="bg-white rounded-lg shadow-xl p-10 w-full max-w-screen-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-3xl font-semibold text-center text-gray-700">Login</h3>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-gray-600 font-medium">Email Address</label>
            <input
              id="email"
              type="email"
              className="w-full bg-gray-100 p-3 rounded-lg focus:ring-4 focus:ring-gray-400 outline-none"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-gray-600 font-medium">Password</label>
            <input
              id="password"
              type="password"
              className="w-full bg-gray-100 p-3 rounded-lg focus:ring-4 focus:ring-gray-400 outline-none"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-3 rounded-lg shadow-lg font-semibold transform transition-all hover:scale-105 hover:bg-gray-600"
          >
            Login
          </button>

          <p className="text-center text-gray-500 mt-4">
            New user? <a href="/register" className="text-gray-700 hover:underline">Register Here</a>
          </p>
          <SignInwithGoogle />
        </form>
      </div>
    </div>
  );
}

export default Login;
