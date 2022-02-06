// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {database} from "firebase/database"
 

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app)

import { initializeApp } from "firebase/app";
import { getDatabase } from "@firebase/database";
const firebaseConfig = {
    apiKey: process.env.NEXT_API_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_API_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_API_FIREBASE_DATA_URL,
    projectId: process.env.NEXT_API_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_API_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_API_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_API_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_API_FIREBASE_MEASUREMENT_ID
};

  function initFirebase() {
    if (typeof window !== undefined) {
        initializeApp(firebaseConfig);
        console.log("Firebase has been init successfully");
    }
}
const app = initializeApp(firebaseConfig);



const realDB = getDatabase(app);

export { initFirebase, realDB};