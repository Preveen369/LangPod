// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh8dCIFNFLdYRO1MLm0ZBFBCAitr8Bvhw",
  authDomain: "langpod-c36c6.firebaseapp.com",
  projectId: "langpod-c36c6",
  storageBucket: "langpod-c36c6.firebasestorage.app",
  messagingSenderId: "449195962217",
  appId: "1:449195962217:web:f75ee09303f9f6748697f8",
  measurementId: "G-QJXQTNP3GG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and export it
const db = getFirestore(app);
export { db };
