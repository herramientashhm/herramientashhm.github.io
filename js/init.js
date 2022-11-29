// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzVwbWNHBpiAg9MOZBy4UHQxIH-cU_RS0",
  authDomain: "herramientashhm-fe8b6.firebaseapp.com",
  projectId: "herramientashhm-fe8b6",
  storageBucket: "herramientashhm-fe8b6.appspot.com",
  messagingSenderId: "920913104335",
  appId: "1:920913104335:web:9188ac0d5d7c39e0a516ba",
  measurementId: "G-NSLRR20EEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
