// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVLM9K2nkf3NxLmnGGlhFiS8pMXkWunUw",
  authDomain: "learn-lang-client.firebaseapp.com",
  projectId: "learn-lang-client",
  storageBucket: "learn-lang-client.appspot.com",
  messagingSenderId: "619432219695",
  appId: "1:619432219695:web:d13f1803bcdf9b2f34a2da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
