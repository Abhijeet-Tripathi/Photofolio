// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl06CrLsCh1AnEkqoH_Mx9WKR7d105iO4",
  authDomain: "photofolioapp-afe7d.firebaseapp.com",
  projectId: "photofolioapp-afe7d",
  storageBucket: "photofolioapp-afe7d.appspot.com",
  messagingSenderId: "356063012222",
  appId: "1:356063012222:web:f5a270716d5712a2613f2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export{db};