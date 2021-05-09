import * as firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyByDrcYB7p38eSuwxCzXOkYnMCXMLKspcY",
    authDomain: "story-hub-da0fb.firebaseapp.com",
    projectId: "story-hub-da0fb",
    storageBucket: "story-hub-da0fb.appspot.com",
    messagingSenderId: "218978242409",
    appId: "1:218978242409:web:ed1bf129f585222aecb7f8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();