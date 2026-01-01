import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB9diauePFBJi4kIuBetiyiJr4inud6Tf8",
  authDomain: "jays-app-984cb.firebaseapp.com",
  projectId: "jays-app-984cb",
  storageBucket: "jays-app-984cb.firebasestorage.app",
  messagingSenderId: "581122586078",
  appId: "1:581122586078:web:b0e2770a16898915a7194f"
};

// Initialize Firebase (only once)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
