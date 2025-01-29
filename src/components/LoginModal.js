// src/components/Login.js
import React, { useState } from "react";
import { auth } from "../firebaseConfig"; // Ensure this path is correct
import { signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom"; // Import useHistory for navigation

const Login = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory(); // Create a history instance

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      onClose(); // Close the modal after successful login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
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
          <button type="submit">Login</button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <p>
          Not registered yet?{" "}
          <span className="create-account" onClick={() => history.push("/signup")}>Create an Account</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
