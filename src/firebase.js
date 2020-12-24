import firebase from 'firebase'
 
const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyD2DovzqR0s7TgAEBaWT7LUKkzSLnAPirA",
    authDomain: "facebook-messenger-clone-55482.firebaseapp.com",
    projectId: "facebook-messenger-clone-55482",
    storageBucket: "facebook-messenger-clone-55482.appspot.com",
    messagingSenderId: "789755324143",
    appId: "1:789755324143:web:12c8a7f0cdbc05627c9d1a",
    measurementId: "G-TFP0KY7W85"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};