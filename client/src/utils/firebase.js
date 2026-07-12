
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAdOGTYF5lZraGvu0zWtMil6SB0NN0M6nk", 
  authDomain: "interviewiq-ddc17.firebaseapp.com",
  projectId: "interviewiq-ddc17",
  storageBucket: "interviewiq-ddc17.firebasestorage.app",
  messagingSenderId: "769403217321",
  appId: "1:769403217321:web:xxxxxxxxxxxx"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}