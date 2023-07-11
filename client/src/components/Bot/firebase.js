import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAUkL2wCRCfDfMGv0matUYI_MsxbaI0yJY",
    authDomain: "stackoverflow-clone-f4a90.firebaseapp.com",
    projectId: "stackoverflow-clone-f4a90",
    storageBucket: "stackoverflow-clone-f4a90.appspot.com",
    messagingSenderId: "999709819442",
    appId: "1:999709819442:web:2fd3d90baead126633f22b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;



//   // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAUkL2wCRCfDfMGv0matUYI_MsxbaI0yJY",
//   authDomain: "stackoverflow-clone-f4a90.firebaseapp.com",
//   projectId: "stackoverflow-clone-f4a90",
//   storageBucket: "stackoverflow-clone-f4a90.appspot.com",
//   messagingSenderId: "999709819442",
//   appId: "1:999709819442:web:2fd3d90baead126633f22b"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);