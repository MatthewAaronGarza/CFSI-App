// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB2dfUpummanSx6fGaoRf5hzxTJ7LQ8afY",
    authDomain: "cfsi-dd562.firebaseapp.com",
    projectId: "cfsi-dd562",
    storageBucket: "cfsi-dd562.appspot.com",
    messagingSenderId: "657303173027",
    appId: "1:657303173027:web:c57614af95e4c9d4f54c16",
    measurementId: "G-7C7FDWFNHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };