// Firebase SDK initialization and Firestore service configuration.
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
} from "../constants/constants";

// Firebase config is sourced from Vite environment constants.
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID
};

// Initialize the base Firebase application instance once.
export const FirebaseApp = initializeApp(firebaseConfig);

// Export the shared Cloud Firestore service reference.
export const db = getFirestore(FirebaseApp);
