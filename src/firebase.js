import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


  var config = {
    apiKey: "AIzaSyCAJpUO3s1po3Zbxg4e0W1GGkRxNKIt1Jg",
    authDomain: "react-slack-clone-e3758.firebaseapp.com",
    projectId: "react-slack-clone-e3758",
    storageBucket: "react-slack-clone-e3758.appspot.com",
    messagingSenderId: "287826551441",
    appId: "1:287826551441:web:c48edd3a7891b845e11530",
    measurementId: "G-RVJE466KWK"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase;
  