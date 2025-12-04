// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx5KlH4XWSx5yDztXrVGXIfZoWInWtXhk",
  authDomain: "my-awsame.firebaseapp.com",
  projectId: "my-awsame",
  storageBucket: "my-awsame.firebasestorage.app",
  messagingSenderId: "1007551225560",
  appId: "1:1007551225560:web:ff54d0fc69e792232c01ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;