import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyDLNkRIUcpeTMVeic9v45-CFTS3ZbN8VOQ",
    authDomain: "healthfirst-c7a87.firebaseapp.com",
    projectId: "healthfirst-c7a87",
    storageBucket: "healthfirst-c7a87.appspot.com",
    messagingSenderId: "258756447631",
    appId: "1:258756447631:web:e04cb4ed9c56b4c7330ffa"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;