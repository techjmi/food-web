// src/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtGioPJ-OvFsGQ_SMTCt9cDaRkvh3me3g",
  authDomain: "food-web-92bb6.firebaseapp.com",
  projectId: "food-web-92bb6",
  storageBucket: "food-web-92bb6.appspot.com",
  messagingSenderId: "84821599187",
  appId: "1:84821599187:web:a1e0c88b44378178240526",
  measurementId: "G-J00L9ZN4H3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
