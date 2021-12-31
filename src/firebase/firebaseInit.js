import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAH3p0w_OI589D5ywkLtqC7aQjyg0IKit8",
    authDomain: "fireblogs-820ba.firebaseapp.com",
    projectId: "fireblogs-820ba",
    storageBucket: "fireblogs-820ba.appspot.com",
    messagingSenderId: "1081016726923",
    appId: "1:1081016726923:web:13d9d29353d348a0b4ab8e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();