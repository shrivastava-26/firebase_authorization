// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYvqhAX8rnZ61ZR_i20JrzCEA2L5w-mp8",
  authDomain: "auth-dd78d.firebaseapp.com",
  projectId: "auth-dd78d",
  storageBucket: "auth-dd78d.appspot.com",
  messagingSenderId: "949953199475",
  appId: "1:949953199475:web:a533f295953698981f9906",
  measurementId: "G-K9LFT2H6NS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Optional for analytics

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
