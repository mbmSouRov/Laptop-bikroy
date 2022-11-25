// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: "AIzaSyCYAX7EUnWzAjfyY-MIZBd_Cai_a2c5n5A",
  //   authDomain: "laptop-bikroy.firebaseapp.com",
  //   projectId: "laptop-bikroy",
  //   storageBucket: "laptop-bikroy.appspot.com",
  //   messagingSenderId: "781824980232",
  //   appId: "1:781824980232:web:98c5d2c1bb254ed2a9e8bd",
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
