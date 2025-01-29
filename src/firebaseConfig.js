// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyBO8OWiirzB8-f7nBcvv0EObD3jb-yu8",
  authDomain: "virtual-herbal-garden-8cd6b.firebaseapp.com",
  projectId: "virtual-herbal-garden-8cd6b",
  storageBucket: "virtual-herbal-garden-8cd6b.firebasestorage.app",
  messagingSenderId: "93533008665",
  appId: "1:93533008665:web:366643e7477362e2c0cb88",
  measurementId: "G-3BVSKDTCPV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Auth

export { auth }; // Export the auth instance
