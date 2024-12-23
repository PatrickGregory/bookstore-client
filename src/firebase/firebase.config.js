// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdqmKlGOThlAD9BXi2jEtuRX5zZwhQ-x0",
  authDomain: "bookstore-79b61.firebaseapp.com",
  projectId: "bookstore-79b61",
  storageBucket: "bookstore-79b61.appspot.com",
  messagingSenderId: "393908373085",
  appId: "1:393908373085:web:d7ae293fa942b232b6efb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;