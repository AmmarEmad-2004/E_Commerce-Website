// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhITyUUeOtqWEM_pDbAl1bxGH49BH2n3Y",
  authDomain: "e-commerce-382ec.firebaseapp.com",
  projectId: "e-commerce-382ec",
  storageBucket: "e-commerce-382ec.firebasestorage.app",
  messagingSenderId: "688491262101",
  appId: "1:688491262101:web:b3b97bbc7eecd2729beb9c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

// إنشاء موفر مصادقة جوجل
// const provider = new auth.GoogleAuthProvider();


// تصدير الخدمات لاستخدامها في ملفات أخرى

// Export Firebase functions for use in other files
export {
  // Firestore functions
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,

  // Auth functions
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,

  // Storage functions
  ref,
  uploadBytes,
  getDownloadURL
};