// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,
    apiKey: "AIzaSyBN0SYTG7hnhVxCu57H6TQPHEoapltabWA",
    authDomain: "web-schedu-plannr.firebaseapp.com",
    projectId: "web-schedu-plannr",
    storageBucket: "web-schedu-plannr.appspot.com",
    messagingSenderId: "173138651134",
    appId: "1:173138651134:web:78dec2783c6f900ef042af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;