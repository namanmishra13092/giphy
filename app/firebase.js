// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPxEItciWV-57Lyf2uq8xGodA9Y9Klrs0",
  authDomain: "nextjs-auth-f40d9.firebaseapp.com",
  projectId: "nextjs-auth-f40d9",
  storageBucket: "nextjs-auth-f40d9.appspot.com",
  messagingSenderId: "254022285160",
  appId: "1:254022285160:web:c0a257c68bda34c9ecc8dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
