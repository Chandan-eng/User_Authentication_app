// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAj-uZjKHcKkhBH2SP4DBCrRtPYzekkVDE",
  authDomain: "auth-user-dashboard.firebaseapp.com",
  projectId: "auth-user-dashboard",
  storageBucket: "auth-user-dashboard.appspot.com",
  messagingSenderId: "829411393973",
  appId: "1:829411393973:web:26a75bc13dbefd0fa119fc",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
