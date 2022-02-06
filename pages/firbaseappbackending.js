// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import {database} from "firebase/database"
const firebaseConfig = {
  apiKey: "AIzaSyDkHlY6WhmCydfBGRUssKKFMui6a_deNvc",
  authDomain: "newcoolapp-87f58.firebaseapp.com",
  databaseURL: "https://newcoolapp-87f58-default-rtdb.firebaseio.com",
  projectId: "newcoolapp-87f58",
  storageBucket: "newcoolapp-87f58.appspot.com",
  messagingSenderId: "535239160612",
  appId: "1:535239160612:web:36565ac5db2d43f22af9b1",
  measurementId: "G-TWNBBWPRGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// database.reference("l").child("xd").child("lel").setValue("xd")