import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDExu7kT0euuJFHLtq-Wgprl4PNd7QZ8ms",
    authDomain: "fir-9c24f.firebaseapp.com",
    projectId: "fir-9c24f",
    storageBucket: "fir-9c24f.appspot.com",
    messagingSenderId: "21511279661",
    appId: "1:21511279661:web:ae529138a2ba3be09ed4a4",
    measurementId: "G-DDJ2N5T7WX"
  };

export default firebase.initializeApp(firebaseConfig);