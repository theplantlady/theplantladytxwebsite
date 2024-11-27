import { initializeApp } from 'firebase/app';
import {getFunctions} from "firebase/functions";
import {getAnalytics} from "firebase/analytics";
import {getStorage} from "firebase/storage";
import { getAuth } from 'firebase/auth';
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBtH7kcW0XUyqQ-JFSkI_zgf3x9-quYjh0",
    authDomain: "theplantladytx.firebaseapp.com",
    projectId: "theplantladytx",
    storageBucket: "theplantladytx.appspot.com",
    messagingSenderId: "61257377534",
    appId: "1:61257377534:web:fee52beafea92ea728e7af",
    measurementId: "G-EWJ7QXJJ8B"
};

export const app = initializeApp(firebaseConfig);

// Initialize Authentication Service
export const auth = getAuth(app);

// Initialize Firestore Service
export const firestore = getFirestore(app);

// Initialize Functions Service
export const functions = getFunctions(app);

// Initialize Analytics Service
export const analytics = getAnalytics(app);

// Export storage incase we need to access it directly
export const scopesStorage = getStorage(app, 'gs://theplantladytx.appspot.com');

