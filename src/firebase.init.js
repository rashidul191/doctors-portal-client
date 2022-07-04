// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,

   /* apiKey: "AIzaSyChEBCDJDbGU8LqIioOr01A3utEbdGFLjM",
  authDomain: "doctors-portal-90ff3.firebaseapp.com",
  projectId: "doctors-portal-90ff3",
  storageBucket: "doctors-portal-90ff3.appspot.com",
  messagingSenderId: "967195217687",
  appId: "1:967195217687:web:c065ea571cb0ea7ad63152", */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
