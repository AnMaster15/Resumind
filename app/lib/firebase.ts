// Firebase initialization and exports
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Replace with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyD0HNzuIxq47gKtbkwq9GAOIQmeL02iL20",
  authDomain: "resumind-cc35d.firebaseapp.com",
  projectId: "resumind-cc35d",
  storageBucket: "resumind-cc35d.firebasestorage.app",
  messagingSenderId: "770766281159",
  appId: "1:770766281159:web:153ca8ef3795602dbae1e2",
  measurementId: "G-G09W30GHZQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
