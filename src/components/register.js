import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo: "",
        });
      }
      toast.success("User Registered Successfully!", { position: "top-center" });
    } catch (error) {
      toast.error(error.message, { position: "bottom-center" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 ">
      <div className="bg-white rounded-lg shadow-xl p-10 w-full max-w-screen-xl">
        <form onSubmit={handleRegister} className="space-y-6">
          <h3 className="text-3xl font-semibold text-center text-gray-700">Sign Up</h3>

          <div className="space-y-2">
            <label htmlFor="fname" className="block text-gray-600 font-medium">First Name</label>
            <input
              id="fname"
              type="text"
              className="w-full bg-gray-100 p-3 rounded-lg focus:ring-4 focus:ring-gray-400 outline-none"
              placeholder="First Name"
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="lname" className="block text-gray-600 font-medium">Last Name</label>
            <input
              id="lname"
              type="text"
              className="w-full bg-gray-100 p-3 rounded-lg focus:ring-4 focus:ring-gray-400 outline-none"
              placeholder="Last Name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-gray-600 font-medium">Email Address</label>
            <input
            type="email"
            className="w-full bg-gray-100 p-3 rounded-lg focus:ring-4 focus:ring-gray-400 outline-none"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-gray-600 font-medium">Password</label>
          <input
            id="password"
            type="password"
            className="w-full bg-gray-100 p-3 rounded-lg focus:ring-4 focus:ring-gray-400 outline-none"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-500 text-white py-3 rounded-lg shadow-lg font-semibold transform transition-all hover:scale-105 hover:bg-gray-600"
        >
          Sign Up
        </button>

        <p className="text-center text-gray-500 mt-4">
          Already registered? <a href="/login" className="text-gray-700 hover:underline">Login</a>
        </p>
      </form>
    </div>
  </div>
);
}

export default Register;
