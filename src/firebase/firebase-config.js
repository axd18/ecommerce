import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCu3sJegW3REzO1MyfCw7vSCYv-XOgkYQM",
    authDomain: "ecommerce-bef3a.firebaseapp.com",
    projectId: "ecommerce-bef3a",
    storageBucket: "ecommerce-bef3a.appspot.com",
    messagingSenderId: "779510893394",
    appId: "1:779510893394:web:88792573d30c3ceeedc88b"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase }