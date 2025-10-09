// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
//
// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBiIhb0XohFxnupkf8C4GG9hKfLZcMj3vY",
//     authDomain: "quagnite-authorization.firebaseapp.com",
//     projectId: "quagnite-authorization",
//     storageBucket: "quagnite-authorization.firebasestorage.app",
//     messagingSenderId: "139815935567",
//     appId: "1:139815935567:web:aaf11e9a059aa40fe3543a",
//     measurementId: "G-EC8LDM4JQK"
// };
//
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBiIhb0XohFxnupkf8C4GG9hKfLZcMj3vY",
    authDomain: "quagnite-authorization.firebaseapp.com",
    projectId: "quagnite-authorization",
    storageBucket: "quagnite-authorization.firebasestorage.app",
    messagingSenderId: "139815935567",
    appId: "1:139815935567:web:aaf11e9a059aa40fe3543a",
    measurementId: "G-EC8LDM4JQK"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;