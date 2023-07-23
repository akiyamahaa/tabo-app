import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxpgWhp-9KYf9RWDWqTKKrj5qTpY28DIE",
  authDomain: "expo-template-9687b.firebaseapp.com",
  projectId: "expo-template-9687b",
  storageBucket: "expo-template-9687b.appspot.com",
  messagingSenderId: "467529295744",
  appId: "1:467529295744:web:e5852f7d5d72c751ee4365",
  measurementId: "G-T9W2JKT6PF"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export default firebaseApp;