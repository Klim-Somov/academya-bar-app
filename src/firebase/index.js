
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXTxj231HHPQ0OMqsRbDu49sF-d9Qfxt4",
  authDomain: "acdemia-bar.firebaseapp.com",
  projectId: "acdemia-bar",
  storageBucket: "acdemia-bar.appspot.com",
  messagingSenderId: "491761807467",
  appId: "1:491761807467:web:d8d358735de41de5f2c12e"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
