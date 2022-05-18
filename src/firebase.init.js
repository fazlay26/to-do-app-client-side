// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVKr7Z8aAsAhxxh1EhP-epE3xhKCIoaRU",
    authDomain: "todo-app-220e4.firebaseapp.com",
    projectId: "todo-app-220e4",
    storageBucket: "todo-app-220e4.appspot.com",
    messagingSenderId: "1000887504977",
    appId: "1:1000887504977:web:47f40fa1e237ba4455a870"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;