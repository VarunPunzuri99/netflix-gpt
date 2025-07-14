// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjsCNvSkUo7kpTtoWyGo_xNBqP4pdSfAo",
  authDomain: "netflixgpt-23b95.firebaseapp.com",
  projectId: "netflixgpt-23b95",
  storageBucket: "netflixgpt-23b95.firebasestorage.app",
  messagingSenderId: "319538158300",
  appId: "1:319538158300:web:ad4139acf1596ac4597219",
  measurementId: "G-GTQZMVH7JQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();