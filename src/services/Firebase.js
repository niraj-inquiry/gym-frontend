import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBb4tKYYFZpXBdaaKbVvEIFfEFy4SdjcRg",
  authDomain: "superactive-e09f1.firebaseapp.com",
  projectId: "superactive-e09f1",
  storageBucket: "superactive-e09f1.appspot.com",
  messagingSenderId: "457650829321",
  appId: "1:457650829321:web:b7c1688a6fc27d1348e0d8",
  measurementId: "G-WRVJQDJ87C"
}

// Initialize Firebase and Firestore
// export const app = initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const db = getFirestore(app)
// export {db}