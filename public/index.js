// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmhyLiWn4nLHv0BxCtb5NldybASBgIceQ",
  authDomain: "esp8266-thpsensor.firebaseapp.com",
  databaseURL: "https://esp8266-thpsensor-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "esp8266-thpsensor",
  storageBucket: "esp8266-thpsensor.appspot.com",
  messagingSenderId: "694067345087",
  appId: "1:694067345087:web:85d8e728f12893f2b4b80a",
  measurementId: "G-YHXTSF5JR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  

