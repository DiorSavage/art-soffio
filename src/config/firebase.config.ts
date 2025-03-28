import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyA95j779J0Kh8JPVuJBatxetDUPWheuWuo",
  authDomain: "art-soffio.firebaseapp.com",
  projectId: "art-soffio",
  storageBucket: "art-soffio.appspot.com",
  messagingSenderId: "766920130831",
  appId: "1:766920130831:web:1de50fb6fe5eb09545be7a"
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app)
export const auth = getAuth(app)