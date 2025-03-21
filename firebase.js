// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1DElr7KuZ5GL0UaJZCIR02q41xTROXj8",
  authDomain: "jnsluxuryapartments.firebaseapp.com",
  projectId: "jnsluxuryapartments",
  storageBucket: "jnsluxuryapartments.firebasestorage.app",
  messagingSenderId: "802146761463",
  appId: "1:802146761463:web:8feb8b355903273788b1f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);