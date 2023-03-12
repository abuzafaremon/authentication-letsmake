// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjsKTKHkSnqY6zm37Y580W-A0aIvptDjc",
  authDomain: "nextjs-authentication-letsmake.firebaseapp.com",
  projectId: "nextjs-authentication-letsmake",
  storageBucket: "nextjs-authentication-letsmake.appspot.com",
  messagingSenderId: "840123869891",
  appId: "1:840123869891:web:8abda4af3136a4a18d5076",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
