import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCWTV8__UkB0TIANCcdQYLWYug5JJ0ZAAI",
    authDomain: "linkedin-clone-e4423.firebaseapp.com",
    projectId: "linkedin-clone-e4423",
    storageBucket: "linkedin-clone-e4423.appspot.com",
    messagingSenderId: "151584829494",
    appId: "1:151584829494:web:9f02db8c70a7f51a0fe897",
    measurementId: "G-HN3CZM42QH"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

//CONNECTING TO DATABASE FIRESTORE
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

//SAVING DATATE TO THE STORAGE
const storage = firebase.storage();

export {auth, provider, storage};
export default db;