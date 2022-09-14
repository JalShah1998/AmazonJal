// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDDUrvseMMSQLcoEMyFhRGBD-cfiHXiWao",
    authDomain: "clone-a6b28.firebaseapp.com",
    projectId: "clone-a6b28",
    storageBucket: "clone-a6b28.appspot.com",
    messagingSenderId: "297931957814",
    appId: "1:297931957814:web:5d6d2202e055039eb0da97",
    measurementId: "G-1PT9RWMJSR"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
 
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };