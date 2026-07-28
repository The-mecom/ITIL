import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, User } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBOw-b-FUiNIbrwBfg4fyC27WbOcQgLKlU",
  authDomain: "gen-lang-client-0134411247.firebaseapp.com",
  projectId: "gen-lang-client-0134411247",
  storageBucket: "gen-lang-client-0134411247.firebasestorage.app",
  messagingSenderId: "842469025904",
  appId: "1:842469025904:web:62bfb4360cdca72613acb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
export const auth = getAuth(app);

// Initialize Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Initialize Firestore
// Using specific database ID as configured in firebase-applet-config.json
const firestoreDatabaseId = "ai-studio-itilv4examprep-ff9d152c-69aa-4bbd-b7b3-8dd3bff84d10";
export const db = getFirestore(app, firestoreDatabaseId);

export { signInWithPopup, signOut, doc, getDoc, setDoc, updateDoc };
export type { User };
