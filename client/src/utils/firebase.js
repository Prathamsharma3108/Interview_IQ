
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCVOOSn-rS7sbynWQJowTmsEzJ7cwWOciI",
  authDomain: "interviewiq-cca8f.firebaseapp.com",
  projectId: "interviewiq-cca8f",
  storageBucket: "interviewiq-cca8f.firebasestorage.app",
  messagingSenderId: "1095771146228",
  appId: "1:1095771146228:web:4c8840f3af69075b1c9ba1",
  measurementId: "G-HQZTRLKHSC"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}