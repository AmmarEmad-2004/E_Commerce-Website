// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc,
  query,
  orderBy,
  where,
  limit,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLlGgVCjZBl2Xw1chpJy-ZHvxwvGCKpNk",
  authDomain: "installments-management.firebaseapp.com",
  databaseURL: "https://installments-management-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "installments-management",
  storageBucket: "installments-management.firebasestorage.app",
  messagingSenderId: "995889248566",
  appId: "1:995889248566:web:7007fff8171bd32afcdb97",
  measurementId: "G-JP3ZFKMLXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// إنشاء موفر مصادقة جوجل
const provider = new GoogleAuthProvider();

// Console log for debugging
console.log("🔥 Firebase initialized successfully");
console.log("📊 Firestore database:", db);
console.log("🔐 Auth service:", auth);


// تصدير الخدمات لاستخدامها في ملفات أخرى
export { 
  app, 
  db, 
  auth, 
  storage, 
  provider,
  // Firestore functions
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  where,
  limit,
  serverTimestamp,
  // Auth functions
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  // Storage functions
  ref,
  uploadBytes,
  getDownloadURL
};