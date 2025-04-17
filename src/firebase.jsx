// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "auth-user-dashboard.firebaseapp.com",
  projectId: "auth-user-dashboard",
  storageBucket: "auth-user-dashboard.appspot.com",
  messagingSenderId: "messagingSenderId",
  appId: "your-app-id",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
