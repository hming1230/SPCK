// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"; // Corrected import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp-velVQUlpDfWJnPNw72OepUWYePIASU",
  authDomain: "spck2-5f7bf.firebaseapp.com",
  projectId: "spck2-5f7bf",
  storageBucket: "spck2-5f7bf.appspot.com",
  messagingSenderId: "545760106998",
  appId: "1:545760106998:web:cb2cc707c72f6335d64fd7",
  measurementId: "G-FYE1ZS986Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Corrected usage of getAuth
