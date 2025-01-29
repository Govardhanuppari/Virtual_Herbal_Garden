// src/components/SignUp.js
import React, { useState } from "react";
import { auth } from "../firebaseConfig"; // Ensure this path is correct
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User registered successfully!");
      onClose(); // Close modal on successful sign-up
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="modal-content">
      <span className="close" onClick={onClose}>&times;</span>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default SignUp;
